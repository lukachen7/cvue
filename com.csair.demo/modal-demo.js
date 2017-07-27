define(["vue","text!com.csair.demo/modal-demo.html","com.csair.demo/app"],function(Vue,template,app) {
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
    		showModal:function(modalName,type){
    			if (typeof modalName == "string" && typeof type == "string"){
    				app.rootModal.showModal({modalClass:"cv-modal-default",modalContent:modalName,param:null,modalEffect:type});
    			}
    		}
    },
  }
  Vue.component("modal-demo",page);
  return page;
});