define(["vue","text!com.csair.demo/form-demo.html","com.csair.demo/app"],function(Vue,template,app) {
  // 这里是模块的代码
  var page = {
    template:template,
    data:function(){
      return {
        clientPages:app.clientPage,
        checkboxData:[{checked:true,value:"value1",labelText:"labeltext1"},
        {checked:false,value:"value2",labelText:"labeltext2"},
        {checked:false,value:"value3",labelText:"labeltext3"}],
        radioData:[{value:"aaa",labelText:"AAA"},{value:"bbb",labelText:"BBB"},{value:"ccc",labelText:"CCC"}],
        radioPicked:"aaa",
          currentIndex:0
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
  Vue.component("form-demo",page);
  return page;
});