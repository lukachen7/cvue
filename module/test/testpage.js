define(["vue","servicePath/rule","text!modulePath/test/testpage.html"],function(Vue,rule,template) {
  // 这里是模块的代码
  var page = {
    template:template,
    data:function(){
      return {
        clientPages:rule.clientPage
      }
    },
    props:[],
    mounted:function(){
    		
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
    },
  }
  Vue.component("testpage1",page);
  return page;
});