define(["vue","toastr","servicePath/rule",'servicePath/timer',"text!com.csair.demo/directory.html","com.csair.demo/app"],function(Vue,toastr,rule,timer,template,app) {
  // 这里是模块的代码
  var page = {
    template:template,
    data:function(){
      return {
        
      }
    },
    props:["param","contentId"],
    mounted:function(){
    		
    },
    destroyed:function(){
    		console.log("destroyed");
    		
    },
    methods:{
    		"navPush":function (content){
//  			this.$refs.cvScroll.consoleTest();
    			this.$emit("navPush",content);
    		}
    },
  }
  Vue.component("directory",page);
  return page;
});