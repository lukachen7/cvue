define(["vue","moment","text!modulePath/test/testpage2.html","modulePath/test/app"],function(Vue,moment,template,app) {
  // 这里是模块的代码
  var page = {
    template:template,
    data:function(){
    		var tmpList = [];
    		var randomNum = Math.ceil(Math.random()*7)+2;
    		for(var i=0;i<randomNum;i++){
    			tmpList.push(i);
    		}
    		return {
	        tmpList:tmpList,
	        selectedDate:null
	    }
    },
    props:["param","contentId"],
    mounted:function(){
    		app.root.message="imTestpage2!"
    },
    computed: {
	    selectedDateStr:function(){
	    		if (this.selectedDate){
	    			var selectedMoment = moment(this.selectedDate);
	    			return selectedMoment.format("YYYY-MM-DD HH:mm:ss");
	    		}
	    		return "选择时间";
	    }
	},
    methods:{
    		showModal:function(){
    			app.rootModal.showModal("testmodal");
    		},
    		showModal2:function(){
    			app.rootModal.showModal({modalClass:"cv-modal-default",modalContent:"testmodal2",param:{message:"message"},modalEffect:"bottom-push"});
    		},
    		showCalender:function(){
    			app.rootModal.showModal({modalClass:"cv-modal-default",modalContent:"calendarmodal1",param:{callBackFunc:this.selectDateCallBack,calendarMinDate:new Date(500000000),calendarShowDate:this.selectedDate?this.selectedDate:null},modalEffect:"bottom-push"});
    		},
    		showCalender2:function(){
    			app.rootModal.showModal({modalClass:"cv-modal-default",modalContent:"calendarmodal2",param:{callBackFunc:this.selectDateCallBack,calendarMinDate:new Date(500000000),calendarShowDate:this.selectedDate?this.selectedDate:null},modalEffect:"move-fade"});
    		},
    		selectDateCallBack:function(date){
    			this.selectedDate = date;   			
    		}
    }
  }
  Vue.component("testpage2",page);
  return page;
});