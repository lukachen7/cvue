define(["vue","text!modulePath/test/testpage2.html","modulePath/test/app"],function(Vue,template,app) {
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
	        tmpList:tmpList
	    }
    },
    props:["param","contentId"],
    mounted:function(){
    		app.root.message="imTestpage2!"
    },
    methods:{
    		showModal:function(){
    			app.rootModal.showModal("testmodal");
    		},
    		showModal2:function(){
    			app.rootModal.showModal({modalClass:"cv-modal-default",modalContent:"testmodal2",param:{message:"message"},modalEffect:"bottom-push"});
    		},
    		showCalender:function(){
    			app.rootModal.showModal({modalClass:"cv-modal-default",modalContent:"cv-calendar",param:null,modalEffect:"bottom-push"});
    		}
    }
  }
  Vue.component("testpage2",page);
  return page;
});