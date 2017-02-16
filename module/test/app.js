require(['vue','fastclick',
'common/component/cv-nav/cv-nav',
'common/component/cv-scroll/cv-scroll',
'common/component/cv-slider/cv-slider',
'modulePath/test/testpage',
'modulePath/test/testpage2'],
function(Vue,FastClick){
	var app = new Vue({
	  el: '#demo',
	  data: {
	    message: 'hello world',
	    currentPage: 'testpage1'
	  }
	});
	FastClick.attach(document.body);
});