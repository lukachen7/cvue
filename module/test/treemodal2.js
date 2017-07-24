define(["vue","text!modulePath/test/treemodal2.html","modulePath/test/app"],function(Vue,template,app) {
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
    		selectedComplete:function(){
    			this.$emit("hideModal");
    		}
    },
  }
  Vue.component("treemodal2",modal);
  return modal;
});