define(["vue","text!com.csair.demo/modal/bottom-modal.html","com.csair.demo/app"],function(Vue,template,app) {
  // 这里是模块的代码
  var modal = {
    template:template,
    data:function(){
      return {
      }
    },
    /*
     * param可能为null
     */
    props:["param","modalId"],
    mounted:function(){
    },
    destroyed:function(){
    		console.log("destroyed");    		
    },
    computed: {
	    params:function(){
	    		if(!this.param){
	    			return null;
	    		}else{
	    			return this.param;
	    		}
	    }
	},
    methods:{
    		openModal:function(modal,type,isOnly){
    			if (typeof modal == "string" && typeof type == "string"){
    				app.rootModal.showModal({modalClass:"cv-modal-default",modalContent:modal,param:null,modalEffect:type},isOnly);
    			}    			
    		},
    		hideModal:function(){
    			this.$emit("hideModal");
    		}
    },
  }
  Vue.component("bottom-modal",modal);
  return modal;
});