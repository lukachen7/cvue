(function(factory) {
    if (typeof define === "function" && define.amd) {
        define( ['jquery'], factory);
    } else {
        factory( jQuery );
    }
}(function($) {
	console.log("service.timer loaded.");
	return {
		clientUrl:{
			//views
			userLogin:clientRoot + "/login.html",
			userRegister:clientRoot + "/register.html",
			
			//modal
			downloadAppModal:clientRoot + "/modal/download.html"
		}
	}
}));