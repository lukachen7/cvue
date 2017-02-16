define(["vue","text!modulePath/test/testpage2.html"],function(Vue,template) {
  // 这里是模块的代码
  var page = {
    template:template,
    data:function(){
      return {
        tmpList:[0,1,2,3,4,5,6]
      }
    },
    props:[],
    mounted:function(){
    		
    }
  }
  Vue.component("testpage2",page);
  return page;
});