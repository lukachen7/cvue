define(["vue","moment","text!com.csair.demo/calendar-demo.html","com.csair.demo/app"],function(Vue,moment,template,app) {
  // 这里是模块的代码
  var page = {
    template:template,
    data:function(){
      return {
        clientPages:app.clientPage,
        selectedDate:null
      }
    },
    props:["param"],    
    mounted:function(){
    		
    },
    computed: {
	    selectedDateStr:function(){    
	    		var me = this;
	    		if (me.selectedDate){
	    			var selectedMoment = moment(me.selectedDate);
	    			var tmpStr = selectedMoment.format("YYYY-MM-DD HH:mm:ss");
	    			return tmpStr;   	    			
	    		}else{
	    			return "选择日期时间";
	    		}	    			
	    }
	},
    destroyed:function(){
    		console.log("destroyed");
    },
    methods:{
    		showModal:function(modalName,type){
    			if (typeof modalName == "string" && typeof type == "string"){
    				app.rootModal.showModal({modalClass:"cv-modal-default",modalContent:modalName,param:{callBackFunc:this.selectDateCallBack,calendarShowDate:this.selectedDate?this.selectedDate:null},modalEffect:type});
    			}
    		},
    		selectDateCallBack:function(date){
    			this.selectedDate = new Date(date.getTime());   			
    		}
    },
  }
  Vue.component("calendar-demo",page);
  return page;
});