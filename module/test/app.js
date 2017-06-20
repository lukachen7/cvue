define( ['underscore','toastr'],function(_,toastr) {
	console.log("app loaded.");
	toastr.options = {
	  "closeButton": false,
	  "debug": false,
	  "positionClass": "toast-top-full-width",
	  "onclick": null,
	  "showDuration": "300",
	  "hideDuration": "1000",
	  "timeOut": "5000",
	  "extendedTimeOut": "1000",
	  "showEasing": "swing",
	  "hideEasing": "linear",
	  "showMethod": "fadeIn",
	  "hideMethod": "fadeOut"
	}
	return {
		root:null,
		rootModal:null,
		rootLoading:null
	}
});