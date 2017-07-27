define(["vue","text!com.csair.demo/loading-demo.html","com.csair.demo/app"],function(Vue,template,app) {
  // 这里是模块的代码
  var page = {
    template:template,
    data:function(){
      return {
        clientPages:app.clientPage,
      }
    },
    props:["param"],
    mounted:function(){
    		
    },
    destroyed:function(){
    		console.log("destroyed");
    },
    methods:{
    		showLoading:function(){
			app.rootLoading.showLoading();
			setTimeout(function(){
				app.rootLoading.hideLoading();
			},3000);
    		}
    },
  }
  Vue.component("loading-demo",page);
  return page;
});