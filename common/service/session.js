/**
 * HTML5 Session存储模块，Session DB实例
 * 
 */
(function(factory) {
    if (typeof define === "function" && define.amd) {
        define( ['underscore'], factory);
    } else {
        factory( _ );
    }
}(function(_){

	var Session = function(){
		
	}
	Session.saveObject = function(key, object) {
		window.sessionStorage[key] = JSON.stringify(object);
	}

	Session.loadObject = function(key) {
		var objectString =  window.sessionStorage[key];
		return objectString == null ? null : JSON.parse(objectString);
	}

	Session.deleteObject = function(key) {
		window.sessionStorage[key] = null;
	}
	return Session;
}));