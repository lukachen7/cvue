require(['vue','fastclick','servicePath/rule','servicePath/timer','test/app',
'filterPath/time-num',
'componentPath/cv-nav/cv-nav',
'componentPath/cv-modal/cv-modal',
'componentPath/cv-modal/cv-modal-background',
'componentPath/cv-modal/cv-modal-default',
'componentPath/cv-scroll/cv-scroll',
'componentPath/cv-slider/cv-slider',
'componentPath/cv-loading/cv-loading',
'componentPath/cv-calendar/cv-calendar',
'componentPath/cv-form/cv-checkbox',
'componentPath/cv-form/cv-radio',
'componentPath/cv-tree/cv-tree-single',
'componentPath/cv-tree/cv-tree-multi',
'test/testpage',
'test/testpage2',
'test/directory',
'test/nav-demo',
'test/testmodal',
'test/testmodal2',
'test/calendarmodal1',
'test/calendarmodal2',
'test/treemodal',
'test/treemodal2'],
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