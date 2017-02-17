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
			timer.eventDic[tmpId] = {frameTime:frameTime,func:func}
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
	var timer = {
		//事件列表
		eventDic:{},
		//帧时间，用于动画等时间控制器预设帧频为25帧
		timeOutTime:40,
		//计时器
		frameTimer:0,
		//仿帧频时间控制器
		frameOutCall:function(){
			var me = this;
//			console.log('frameOutCall'+me.frameTimer,JSON.stringify(me.eventDic));
			me.frameTimer++;
			//这里可以注册时间控制器
			_.each(me.eventDic,function(eventItem){
				if ((me.frameTimer % eventItem["frameTime"]) == 0){					
					if (eventItem && typeof eventItem["func"] == "function"){
						eventItem["func"]();
					}
				}	
			});
									
			if (timerSetting.timeoutRun){
				setTimeout(function(){
					me.frameOutCall();
				},me.timeOutTime);
			}
		},	
	}
	setTimeout(function(){timer.frameOutCall()},timer.timeOutTime);
	return timerSetting
}));