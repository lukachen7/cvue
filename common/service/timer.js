(function(factory) {
    if (typeof define === "function" && define.amd) {
        define( ['underscore'], factory);
    } else {
        factory( _ );
    }
}(function(_) {
	
	console.log("service.timer loaded.");
	var timerSetting = {
		//时间开关
		timeoutRun:true,
		//注册FrameOut事件
		addFrameOutCall:function(frameTime,func){
			frameTime = parseInt(frameTime);
			if(frameTime < 1){
				frameTime = 1;
			}
			if(!func){
				return;
			}
			var tmpId = _.uniqueId("FrameOutCall_");
			timer.eventDic[tmpId] = {frameTime:frameTime,func:func,offsetTime:(timer.frameTimer % frameTime)}
			return tmpId;
		},
		//删除FrameOut事件
		removeFrameOutCall:function(id){
			if (timer.eventDic[id]){
				timer.eventDic[id] = null;
				delete timer.eventDic[id];
			}
		}
	}
	//timer注册器，防止注册太多timer事件影响速度
	var timer = {
		lastTime:0,
		//事件列表
		eventDic:{},
		//暂定为0.1秒循环一次
		timeOutTime:100,
		//计时器
		frameTimer:0,
		//仿帧频时间控制器
		frameOutCall:function(){
			var me = this;
			me.frameTimer++;
			
			//这里可以注册时间控制器
			_(me.eventDic).forEach(function(eventItem,key){
				if (((me.frameTimer - eventItem['offsetTime']) % eventItem["frameTime"]) == 0){					
					if (eventItem && typeof eventItem["func"] == "function"){
						eventItem["func"]();
					}
				}	
			});
									
			if (timerSetting.timeoutRun){
				var currTime = new Date().getTime();
				var timeToCall = Math.max(0, me.timeOutTime - (currTime - me.lastTime));
				setTimeout(function(){
					me.frameOutCall();
				},timeToCall);
				me.lastTime = currTime + timeToCall;
			}
		},	
	}
	setTimeout(function(){timer.frameOutCall()},timer.timeOutTime);
	return timerSetting
}));