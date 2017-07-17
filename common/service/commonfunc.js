(function(factory) {
    if (typeof define === "function" && define.amd) {
        define( ['underscore'], factory);
    } else {
        factory( _ );
    }
}(function(_) {
	'use strict';
	/*
	 * 一些公用方法封装
	 */
	
	//function绑定this  使用方法：$('#confirm_btn').click(self.complete.bind(self));
	Function.prototype.bind = function(obj) {
	    var _this = this;
	    return function() {
	    	_this.apply(obj,arguments);
	    }
	}
	
	var CommonFunc = {
		/*
		 * 获取cookie
		 */
		getCookie:function(name)
		{
			var arr,reg=new RegExp("(^| )"+name+"=([^;]*)(;|$)");
			if(arr=document.cookie.match(reg))
			return unescape(arr[2]);
			else
			return null;
		},
		//取URL所带的参数值
		getUrlParam:function(name)
		{
		     var reg = new RegExp("(^|&)"+ name +"=([^&]*)(&|$)");
		     var r = window.location.search.substr(1).match(reg);
		     if(r!=null)return  unescape(r[2]); return null;
		},
		//判断坐标是否在中国以内，不精确
		isLocationOutOfChina:function($location)
		{  
		    if ($location.log < 72.004 || $location.log > 137.8347 || $location.lat < 0.8293 || $location.lat > 55.8271){
		        return true;  
		    }
		    return false;  
		},
		//IOS坐标转国内火星坐标
		transformFromWGSToGCJ:function($location) 
		{  
			var a = 6378245.0;  
			var ee = 0.00669342162296594323; 
			
		    var newLocation={};
		    if(CommonFunc.isLocationOutOfChina($location)){  
		        newLocation = $location;  
		    }else{ 
		    	var tmpLocation={log:$location.log-105,lat:$location.lat-35};
		        var adjustLat = this.transformLat(tmpLocation);
		        var adjustLon = this.transformLog(tmpLocation);
		        var radLat = $location.lat / 180.0 * Math.PI;  
		        var magic = Math.sin(radLat);  
		        magic = 1 - ee * magic * magic;  
		        var sqrtMagic = Math.sqrt(magic);  
		        adjustLat = (adjustLat * 180.0) / ((a * (1 - ee)) / (magic * sqrtMagic) * Math.PI);  
		        adjustLon = (adjustLon * 180.0) / (a / sqrtMagic * Math.cos(radLat) * Math.PI);  
		        newLocation.lat = $location.lat + adjustLat;  
		        newLocation.log = $location.log + adjustLon;  
		    }  
		    return newLocation;  
		},
		transformLat:function($location) 
		{     
		   var lat = -100.0 + 2.0 * $location.log + 3.0 * $location.lat + 0.2 * $location.lat * $location.lat + 0.1 * $location.log * $location.lat + 0.2 * Math.sqrt(Math.abs($location.log));  
		    lat += (20.0 * Math.sin(6.0 * $location.log * Math.PI) + 20.0 *Math.sin(2.0 * $location.log * Math.PI)) * 2.0 / 3.0;  
		    lat += (20.0 * Math.sin($location.lat * Math.PI) + 40.0 * Math.sin($location.lat / 3.0 * Math.PI)) * 2.0 / 3.0;  
		    lat += (160.0 * Math.sin($location.lat / 12.0 * Math.PI) + 320 * Math.sin($location.lat * Math.PI / 30.0)) * 2.0 / 3.0;  
		    return lat;  
		},
		transformLog:function($location)
		{  
		    var log = 300.0 + $location.log + 2.0 * $location.lat + 0.1 * $location.log * $location.log + 0.1 * $location.log * $location.lat + 0.1 * Math.sqrt(Math.abs($location.log));  
		    log += (20.0 * Math.sin(6.0 * $location.log * Math.PI) + 20.0 * Math.sin(2.0 * $location.log * Math.PI)) * 2.0 / 3.0;  
		    log += (20.0 * Math.sin($location.log * Math.PI) + 40.0 * Math.sin($location.log / 3.0 * Math.PI)) * 2.0 / 3.0;  
		    log += (150.0 * Math.sin($location.log / 12.0 * Math.PI) + 300.0 * Math.sin($location.log / 30.0 * Math.PI)) * 2.0 / 3.0;  
		    return log;  
		},
	    //火星坐标转换为百度坐标  
	    bd_encrypt:function($location)  
	    {  
	    	var x_pi = Math.PI * 3000.0 / 180.0; 
	    	var newLocation={};
	        var x = $location.log;
	        var y = $location.lat;
	        var z = Math.sqrt(x * x + y * y) + 0.00002 * Math.sin(y * x_pi);  
	        var theta = Math.atan2(y, x) + 0.000003 * Math.cos(x * x_pi);  
	//      newLocation.log = z * Math.cos(theta) + 0.0065;  
	        newLocation.log = z * Math.cos(theta) + 0.0015; 
	        newLocation.lat = z * Math.sin(theta) + 0.006;  
	  		return newLocation;
	    },
	    //百度转火星  以备后用
	    bd_decrypt:function($location)  
	    {  
	    	var x_pi = Math.PI * 3000.0 / 180.0; 
	    	var newLocation={};
	        var x = $location.log - 0.0065;
	        var y = $location.lat - 0.006;
	        var z = Math.sqrt(x * x + y * y) - 0.00002 * Math.sin(y * x_pi);  
	        var theta = Math.atan2(y, x) - 0.000003 * Math.cos(x * x_pi);  
	        newLocation.log = z * Math.cos(theta);  
	        newLocation.lat = z * Math.sin(theta);  
	        return newLocation;
	    } 
	}
	return CommonFunc;
}));