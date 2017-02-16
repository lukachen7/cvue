(function(factory) {
    if (typeof define === "function" && define.amd) {
        define( ['jquery'], factory);
    } else {
        factory( jQuery );
    }
}(function($) {
	console.log("service.rule loaded.");
	var serverRoot = "";
	return {
		//页面控件列表
		clientPage:{
			
		},
		//服务端接口列表
		serverUrl:{
			
		},
		//常用正则表达式列表
		regs:{
			
		}
	}
}));