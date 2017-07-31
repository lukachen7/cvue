define(["vue","text!com.csair.demo/slider-demo.html","com.csair.demo/app"],function(Vue,template,app) {
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
    		
    },
  }
  Vue.component("slider-demo",page);
  return page;
});