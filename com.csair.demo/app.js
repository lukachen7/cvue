define( ['underscore','toastr'],function(_,toastr) {
	console.log("app loaded.");
	toastr.options = {
	  "closeButton": false,
	  "debug": false,
	  "positionClass": "toast-top-full-width",
	  "onclick": null,
	  "showDuration": "300",
	  "hideDuration": "500",
	  "timeOut": "4000",
	  "extendedTimeOut": "1000",
	  "showEasing": "swing",
	  "hideEasing": "linear",
	  "showMethod": "fadeIn",
	  "hideMethod": "fadeOut"
	}
	return {
		//页面控件列表
		clientPage:{
			navDemo:"nav-demo",
			scrollDemo:"scroll-demo",
			sliderDemo:"slider-demo",
			formDemo:"form-demo",
			modalDemo:"modal-demo",
			calendarDemo:"calendar-demo",
			singleTreeDemo:"single-tree-demo",
			multiTreeDemo:"multi-tree-demo",
			loadingDemo:"loading-demo",
			toastrDemo:"toastr-demo"
		},
		root:null,
		rootModal:null,
		rootLoading:null
	}
});