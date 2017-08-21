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
'componentPath/cv-list/cv-cell',
'componentPath/cv-tab/cv-tab-content',

'com.csair.demo/directory',
'com.csair.demo/nav-demo',
'com.csair.demo/scroll-demo',
'com.csair.demo/slider-demo',
'com.csair.demo/modal-demo',
'com.csair.demo/modal/middle-modal',
'com.csair.demo/modal/bottom-modal',
'com.csair.demo/calendar-demo',
'com.csair.demo/modal/middle-calendar',
'com.csair.demo/modal/bottom-calendar',
'com.csair.demo/single-tree-demo',
'com.csair.demo/modal/middle-single-tree',
'com.csair.demo/modal/bottom-single-tree',
'com.csair.demo/multi-tree-demo',
'com.csair.demo/modal/middle-multi-tree',
'com.csair.demo/modal/bottom-multi-tree',
'com.csair.demo/loading-demo',
'com.csair.demo/toastr-demo',
'com.csair.demo/form-demo',
'com.csair.demo/list-demo',
'com.csair.demo/tab-demo/tab-demo',
'com.csair.demo/tab-demo/tab-content-1',
'com.csair.demo/tab-demo/tab-content-2',
'com.csair.demo/tab-demo/tab-content-3'],
function(Vue,FastClick,rule,timer,app){
	var hash = window.location.hash;
	if (hash && hash.length>1){
		hash = hash.replace("#","");
	}else{
		hash = "directory";
	}
	var root = new Vue({
	  el: '#demo',
	  data: {
	    platformClass:null,
	    defaultContent:hash
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