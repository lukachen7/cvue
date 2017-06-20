define(["vue","toastr","servicePath/rule",'servicePath/timer',"text!modulePath/test/testpage.html","modulePath/test/app"],function(Vue,toastr,rule,timer,template,app) {
  // 这里是模块的代码
  var page = {
    template:template,
    data:function(){
      return {
        clientPages:rule.clientPage,
        myFrameOutKey:''
      }
    },
    props:["param","contentId"],
    mounted:function(){
    		this.myFrameOutKey = timer.addFrameOutCall(25,function(){console.log("testPage1 call")});
    },
    destroyed:function(){
    		console.log("destroyed");
    		if(this.myFrameOutKey != ""){
    			timer.removeFrameOutCall(this.myFrameOutKey);
    		}
    },
    methods:{
    		"navPush":function (content){
//  			this.$refs.cvScroll.consoleTest();
    			this.$emit("navPush",content);
    		},
    		"pullDownAction":function(component){
    			component.scrollRefresh();
		},
		"pullUpAction":function(component){	
			component.scrollRefresh();
		},
		"loadingTest":function (){
			app.rootLoading.showLoading();
			setTimeout(function(){
				app.rootLoading.hideLoading();
				toastr.success("顺利隐藏");
			},5000);
    		},
    },
  }
  Vue.component("testpage1",page);
  return page;
});