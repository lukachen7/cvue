require(['vue','fastclick','servicePath/rule','servicePath/timer','modulePath/test/app',
'common/component/cv-nav/cv-nav',
'common/component/cv-scroll/cv-scroll',
'common/component/cv-slider/cv-slider',
'modulePath/test/testpage',
'modulePath/test/testpage2'],
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
	app.root=root;
});