require(['vue','fastclick','servicePath/rule','servicePath/timer','modulePath/test/app',
'filterPath/time-num',
'componentPath/cv-nav/cv-nav',
'componentPath/cv-modal/cv-modal',
'componentPath/cv-modal/cv-modal-background',
'componentPath/cv-modal/cv-modal-default',
'componentPath/cv-scroll/cv-scroll',
'componentPath/cv-slider/cv-slider',
'componentPath/cv-loading/cv-loading',
'componentPath/cv-calendar/cv-calendar',
'modulePath/test/testpage',
'modulePath/test/testpage2',
'modulePath/test/testmodal',
'modulePath/test/testmodal2'],
function(Vue,FastClick,rule,timer,app){
	var root = new Vue({
	  el: '#demo',
	  data: {
	    message: 'hello world',
	  }
	});
	FastClick.attach(document.body);
	var timeOutKey = timer.addFrameOutCall(25,function(){console.log("index call")});
	setTimeout(function(){
		timer.removeFrameOutCall(timeOutKey);
	},10000);
//	setTimeout(function(){
//		root.$refs.rootModal.showModal({modalClass:"cv-modal-default",modalContent:"testmodal",param:{message:this.modalId},modalEffect:"fade"});
//	},3000);
	
	app.root=root;
	app.rootModal = root.$refs.rootModal;
	app.rootLoading = root.$refs.rootLoading;
});