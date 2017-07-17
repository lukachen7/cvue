(function(factory) {
    if (typeof define === "function" && define.amd) {
        define( ['jquery'], factory);
    } else {
        factory( jQuery );
    }
}(function($) {
	'use strict';
	/*
	 * ajax请求封装
	 */
	
	//onSuccess将收到的数据格式
	function Response(){
		//服务器发来数据
		this.data=null;
		//发往服务器的数据
	    this.sendParams={}; 
		//可保存一些回调时用数据，不向后台发
	    this.clientParams={}; 
	    //发送的时间可调试后台响应时间
	    this.sendTime=null;
	}
	
	function AjaxRequest(settings) {
	    this.options = $.extend({
	        //url
			requestUrl:"",
			//success回调函数
			onSuccess:null,
			//error回调函数
			onError:null,
			//complete回调函数
			onComplete:null,
			//发送的数据
			sendParams:{},
			//可保存一些回调时用数据，不向后台发送“clientSideKey”作为本地存储的KEY
			clientParams:{},
			//发送的时间可调试后台响应时间
			sendTime:null,
			//超时时间
			timeOut:6000,
			//发送前后调用方法，可加上加载动画。
			onSendFunc:null,
			onReceiveFunc:null,
			//控制是否显示加载动画否
			showLoading:true,
			method:"POST",
			dataType:"json",
			cache:false,
			xhrFields:{withCredentials: false},
			crossDomain: true,
	    }, settings);
	    
	    this.initialize();
	}
	//可写在AjaxRequest里要固定发送的KEY
	AjaxRequest.prototype.attParameters = {};
	//设置默认网关
	AjaxRequest.prototype.defaultGateway = "";
	//设置send,receive 方法
	AjaxRequest.prototype.onSendFunc=null;
	AjaxRequest.prototype.onReceiveFunc=null;
	//初始化
	AjaxRequest.prototype.initialize = function () {
	    var self = this;
	
	    var myReg=/^(http|https):\/\//;
		if (!myReg.test(self.options.gateway)){
			self.options.requestUrl=this.defaultGateway+self.options.requestUrl;
		}
		
		if(this.options.onSendFunc == null){
			this.options.onSendFunc = this.onSendFunc;
		}
		if(this.options.onReceiveFunc == null){
			this.options.onReceiveFunc = this.onReceiveFunc;
		}
				
		//如果以有这个参数将不会覆盖
		for (var attP in self.attParameters) {
			if (self.options.sendParams.hasOwnProperty(attP)){
				continue;
			}
			self.options.sendParams[attP] = self.attParameters[attP];
		}
	};
	//发送请求
	AjaxRequest.prototype.send = function(){
		var stringParams = JSON.stringify(this.options.sendParams);
		if (this.options.showLoading) {
			console.log("发送参数:"+stringParams);
		}
		
		if (this.options.showLoading) {
			if (null != this.options.onSendFunc){
				this.options.onSendFunc();
			}
		}
		
		this.options.sendTime=new Date();
		
		$.ajax({
			timeout:this.options.timeOut,
			type:this.options.method,
			url:this.options.requestUrl,
			data:this.options.sendParams,
			dataType:this.options.dataType,
			cache:this.options.cache,
			headers:{token:getCookie('token')},
			xhrFields:this.options.xhrFields,
			crossDomain: this.options.crossDomain,
			success:this.successHandler,
			error:this.onErrorHandler,
			complete:this.completeHandler,
			obj:{
				onError:this.options.onError,
				onComplete:this.options.onComplete,
				onSuccess:this.options.onSuccess,
				showLoading:this.options.showLoading,
				onReceiveFunc:this.options.onReceiveFunc,
				sendParams:this.options.sendParams,
				clientParams:this.options.clientParams,
				sendTime:this.options.sendTime
			}
		}); 
	}
	//error回调
	AjaxRequest.prototype.onErrorHandler = function($data){
		if ( null != this.obj.onError) {
			this.obj.onError($data)
		}
	};
	//成功失败均调用
	AjaxRequest.prototype.completeHandler = function(){
		if (this.obj.showLoading){
			if (null != this.obj.onReceiveFunc) {
				this.obj.onReceiveFunc();
			}
		}
		if ( null != this.obj.onComplete) {
			this.obj.onComplete()
		}
	};
	AjaxRequest.prototype.successHandler = function($data){	
		if (null != this.obj.onSuccess) {
			var response = new Response();
			
			var mydata=$data;
			if ($.type($data) === "string"){
				try{
					mydata=JSON.parse($data);
				}catch(e){
					console.log(e);
				}
			}
			
			if ($data != null){
				response.data=mydata;
				response.sendParams = this.obj.sendParams;
				response.clientParams = this.obj.clientParams;
				response.sendTime= this.obj.sendTime;
			}
			this.obj.onSuccess(response);
		}
	};
	
	return AjaxRequest;
}));