define(["vue","toastr","servicePath/rule",'servicePath/timer',"text!com.csair.demo/modal-demo.html","com.csair.demo/app"],function(Vue,toastr,rule,timer,template,app) {
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
    		showModal:function(modalName){
    			app.rootModal.showModal({modalClass:"cv-modal-default",modalContent:"middle-modal",param:null,modalEffect:"move-fade"});
    		}
    },
  }
  Vue.component("modal-demo",page);
  return page;
});