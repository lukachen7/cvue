define(["vue","text!test/testmodal.html","test/app"],function(Vue,template,app) {
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
	    			return {message:"no Message!"};
	    		}else{
	    			return this.param;
	    		}
	    }
	},
    methods:{
    		hideModal:function(){
    			this.$emit("hideModal");
    		},
    		openModal:function(){
    			app.rootModal.showModal({modalClass:"cv-modal-default",modalContent:"testmodal",param:{message:this.modalId},modalEffect:"move-fade"},true);
    		}
    },
  }
  Vue.component("testmodal",modal);
  return modal;
});