require(['vue','fastclick','servicePath/rule','servicePath/timer','com.csair.demo/app',
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
'com.csair.demo/directory'],
function(Vue,FastClick,rule,timer,app){
	var root = new Vue({
	  el: '#demo',
	  data: {
	    platformClass:null
	  }
	});
	FastClick.attach(document.body);
	if(window.device){
		onDeviceReady();		
	}else{
		document.addEventListener("deviceready", onDeviceReady, false);
	}	
	function onDeviceReady(){
	    root["platformClass"] = {};
	    root["platformClass"][window.device.platform] = true;
	}
	
	app.root=root;
	app.rootModal = root.$refs.rootModal;
	app.rootLoading = root.$refs.rootLoading;
});