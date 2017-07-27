define(["vue","toastr","text!com.csair.demo/toastr-demo.html","com.csair.demo/app"],function(Vue,toastr,template,app) {
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
    		showSuccess:function(){
			toastr.success("成功提示")
    		},
    		showError:function(){
			toastr.error("错误提示")
    		},
    		showWarning:function(){
			toastr.warning("警告提示")
    		},
    		showInfo:function(){
			toastr.info("消息提示")
    		},
    },
  }
  Vue.component("toastr-demo",page);
  return page;
});