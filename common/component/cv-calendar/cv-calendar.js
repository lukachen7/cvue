define(["vue","jquery","underscore","iscroll","text!componentPath/cv-calendar/cv-calendar.html"],function(Vue,$,_,iScroll,template) {
  // 这里是模块的代码
  var component = {
    template:template,
    data:function(){
    		var tmpHourList = [];
    		var tmpMinuteList = [];
    		for (var i=0;i<24;i++){
    			tmpHourList.push(i);
    		}
    		for (var i=0;i<60;i++){
    			tmpMinuteList.push(i);
    		}
		return {
	      	statusEnum:["year","mouth","date","time"],
	    		showStatus:'year',
	        calendarShowDate:new Date(),
			calendarMinDate:new Date(0),
			calendarMaxDate:new Date(),
			monthList:['一月','二月','三月','四月','五月','六月','七月','八月','九月','十月','十一月','十二月'],
			weekList:['日','一','二','三','四','五','六'],
			hourList:tmpHourList,
			minuteList:tmpMinuteList,
			hourScroll:null,
			minuteScroll:null
      	}
    },
    /*
     * param可能为null
     */
    props:["param","modalId"],
    mounted:function(){
    		var me = this;
    		if (me.param){
    			if(me.param["showStatus"] && this.statusEnum.indexOf(me.param["showStatus"]) > -1){
    				me.setShowStatus(me.param["showStatus"]);
    			}
    			if(me.param["calendarMinDate"]){
    				me.calendarMinDate = me.param["calendarMinDate"];
    			}
    			if(me.param["calendarMaxDate"]){
    				me.calendarMaxDate = me.param["calendarMaxDate"];
    			}
    			if(me.param["calendarShowDate"]){
    				me.calendarShowDate = me.param["calendarShowDate"];
    			}
    			if(me.param["monthList"] && me.param["monthList"].length == 12){
    				me.monthList = me.param["monthList"];
    			}
    			if(me.param["weekList"] && me.param["weekList"].length == 7){
    				me.weekList = me.param["weekList"];
    			}
    		}    		
    		if(me.showStatus == me.statusEnum[0]){
			me.yearScroll();
		}
    },
    updated:function(){
    		var me = this;
    		if(me.showStatus == me.statusEnum[3]){
			 if(!me.hourScroll){
			 	me.$refs.cvCalendarHours.addEventListener('touchmove', function (e) { e.preventDefault(); }, false); 		
				me.hourScroll = new IScroll(me.$refs.cvCalendarHours, {
					scrollX: false,
					scrollY: true,
					snap: 'li',
					snapSpeed: 500,
				});	
				me.hourScroll.on("scrollEnd",function(){
					if(this.currentPage){
						var pageY = this.y/(this.maxScrollY/23);
						var tmpDate = new Date(me.calendarShowDate.getTime());
						tmpDate.setHours(parseInt(pageY));
    						if(!me.updateNewDate(tmpDate)){
    							this.goToPage(0,me.calendarShowDate.getHours(),500,iScroll.utils.ease.circular);
    						}
					}
				});
				me.hourScroll.goToPage(0,me.calendarShowDate.getHours(),500,iScroll.utils.ease.circular);
			 }
			 if(!me.minuteScroll){
			 	me.$refs.cvCalendarMinutes.addEventListener('touchmove', function (e) { e.preventDefault(); }, false);
	    			me.minuteScroll = new IScroll(me.$refs.cvCalendarMinutes, {
					scrollX: false,
					scrollY: true,
					snap: 'li',
					snapSpeed: 500,
				});	
				me.minuteScroll.on("scrollEnd",function(){
					if(this.currentPage){
						var pageY = this.y/(this.maxScrollY/59);
						var tmpDate = new Date(me.calendarShowDate.getTime());
						tmpDate.setMinutes(parseInt(pageY));
    						if(!me.updateNewDate(tmpDate)){
    							this.goToPage(0,me.calendarShowDate.getMinutes(),500,iScroll.utils.ease.circular);
    						}
					}
				});
				me.minuteScroll.goToPage(0,me.calendarShowDate.getMinutes(),500,iScroll.utils.ease.circular);
			 }	    		
		}else{
			if(me.hourScroll){
	    			me.hourScroll.destroy();	
	    			me.hourScroll=null;
	    		} 
	    		if(me.minuteScroll){
	    			me.minuteScroll.destroy();		    			
	    			me.minuteScroll=null;
	    		}
		}
		if(me.showStatus == me.statusEnum[0]){
			me.yearScroll();
		}
    },
    destroyed:function(){
    		console.log("destroyed");
    		if(this.hourScroll){
    			this.hourScroll.destroy();
    			this.hourScroll=null;
    		}  
    		if(this.minuteScroll){
    			this.minuteScroll.destroy();
    			this.minuteScroll=null;
    		}
    },
    watch: {
    		
    },
    computed: {
	    yearStr:function(){
	    		return this.calendarShowDate.getFullYear();
	    },
	    monthStr:function(){
	    		return this.calendarShowDate.getMonth()+1;
	    },
	    dateStr:function(){
	    		return this.calendarShowDate.getDate();
	    },
	    hourStr:function(){
	    		return this.calendarShowDate.getHours();
	    },
	    minuteStr:function(){
	    		return this.calendarShowDate.getMinutes();
	    },
	    yearList:function(){
	    		var yearList = [];
	    		var minYear = parseInt(this.calendarMinDate.getFullYear());
	    		var maxYear = parseInt(this.calendarMaxDate.getFullYear());
	    		for (var i=minYear;i<=maxYear;i++){
	    			yearList.push(i);
	    		}
	    		return yearList;
	    },
	    prevDateList:function(){
	    		var tmpDate;
			var tmpDateNum;
			var tmpDayNum;
			var tmpDateList = [];
			tmpDate = new Date(this.calendarShowDate.getTime());
			tmpDate.setDate(0);
			tmpDateNum = tmpDate.getDate();
			tmpDayNum = tmpDate.getDay();
			if (tmpDayNum < 6){
				for (var i=tmpDayNum;i>=0;i--){
					tmpDateList.push(tmpDateNum-i);
				}
			}
			
			return tmpDateList;
	    },
	    dateList:function(){
	    		var tmpDate;
			var tmpDateNum;
			var tmpDayNum;
			var tmpDateList = [];
			tmpDate = new Date(this.calendarShowDate.getTime());
			tmpDate.setMonth(tmpDate.getMonth()+1);
			tmpDate.setDate(0);
			tmpDateNum = tmpDate.getDate();
			for (var i=1;i<=tmpDateNum;i++){
				tmpDateList.push(i);
			}
			return tmpDateList;
	    }
	},
    methods:{
    		yearScroll:function(){
    			var tmpIndex = $(this.$refs.cvCalendarYears).find('ul li.active').index();
			var tmpHeight = parseInt($(this.$refs.cvCalendarYears).find('ul li.active').height());
			$(this.$refs.cvCalendarYears).scrollTop((Math.floor(tmpIndex/3)*tmpHeight));
    		},
    		hideModal:function(){
    			this.$emit("hideModal");
    		},
    		selectedDate:function(){
    			if(this.param && this.param.callBackFunc && typeof(this.param.callBackFunc) == "function"){
    				console.log(typeof(this.param.callBackFunc));
    				this.param.callBackFunc(this.calendarShowDate);
    				this.$emit("hideModal");
    			}
    		},
    		updateNewDate:function(newDate){
    			if (newDate.getTime() >= this.calendarMinDate.getTime() && newDate.getTime() < this.calendarMaxDate.getTime()){
    				this.calendarShowDate = newDate;
    				return true;
    			}
    			return false;
    		},
    		yearSelected:function(year){
    			var tmpDate = new Date(this.calendarShowDate.getTime());
    			tmpDate.setFullYear(parseInt(year));
    			if (this.updateNewDate(tmpDate)){
    				this.setShowStatus(this.statusEnum[1]);
    			}    	
    		},
    		monthSelected:function(month){
    			var tmpDate = new Date(this.calendarShowDate.getTime());
    			tmpDate.setMonth(parseInt(month));
    			if (this.updateNewDate(tmpDate)){
    				this.setShowStatus(this.statusEnum[2]);
    			} 
    		},
    		dateSelected:function(date){
    			var tmpDate = new Date(this.calendarShowDate.getTime());
    			tmpDate.setDate(parseInt(date));
    			if (this.updateNewDate(tmpDate)){
    				this.setShowStatus(this.statusEnum[3]);
    			} 
    		},
    		setShowStatus:function(status){
    			var me = this;
      		if(me.showStatus != status){
				me.showStatus = status;  			
      		}
    		}
    },
  }
  Vue.component("cv-calendar",component);
  return component;
});