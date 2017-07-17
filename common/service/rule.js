(function(factory) {
    if (typeof define === "function" && define.amd) {
        define( ['underscore'], factory);
    } else {
        factory( _ );
    }
}(function(_) {
	/*
	 * 常用通用变量
	 */
	
	console.log("service.rule loaded.");
	var serverRoot = "";
	return {
		//页面控件列表
		clientPage:{
			testPage1:"testpage1",
			testPage2:"testpage2"
		},
		//服务端接口列表
		serverUrl:{
			
		},
		//常用正则表达式列表
		regs:{
			
		}
	}
}));