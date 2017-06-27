define(["vue","jquery","text!componentPath/cv-modal/cv-modal-background.html","underscore"],function(Vue,$,template,_) {
  // 这里是模块的代码
  var modal = {
    template:template,
    data:function(){
      return {
      }
    },
    props:["isShow"],
    mounted:function(){
    },
    destroyed:function(){
    		console.log("destroyed");    		
    },
    computed: {
	},
    methods:{
    		afterEnter:function(){
    			this.$emit("backgroundAfterEnter");
    		},
    		afterLeave:function(){
    			this.$emit("backgroundAfterLeave");
    		}
    },
  }
  Vue.component("cv-modal-background",modal);
  return modal;
});