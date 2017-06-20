require(['vue','fastclick','servicePath/rule','servicePath/timer','modulePath/test/app',
'componentPath/cv-nav/cv-nav',
'componentPath/cv-modal/cv-modal',
'componentPath/cv-scroll/cv-scroll',
'componentPath/cv-slider/cv-slider',
'componentPath/cv-loading/cv-loading',
'modulePath/test/testpage',
'modulePath/test/testpage2',
'modulePath/test/testmodal'],
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
	setTimeout(function(){
		root.$refs.rootModal.showModal("testmodal",true);
	},3000);
	
	app.root=root;
	app.rootModal = root.$refs.rootModal;
	app.rootLoading = root.$refs.rootLoading;
});