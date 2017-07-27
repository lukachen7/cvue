define(["vue","text!com.csair.demo/modal/bottom-calendar.html"],function(Vue,template) {
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
    		calendarComplete:function(){
    			this.$emit("hideModal");
    		}
    },
  }
  Vue.component("bottom-calendar",modal);
  return modal;
});