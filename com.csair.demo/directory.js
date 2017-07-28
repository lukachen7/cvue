define(["vue","text!com.csair.demo/directory.html","com.csair.demo/app"],function(Vue,template,app) {
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
    		"navPush":function (content){
    			this.$emit("navPush",{contentClass:content,contentId:_.uniqueId("content_"),param:"传参，类型不限"});
    		}
    },
  }
  Vue.component("directory",page);
  return page;
});