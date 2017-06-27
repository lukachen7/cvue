define(["vue","jquery","text!componentPath/cv-modal/cv-modal-default.html","underscore"],function(Vue,$,template,_) {
  // 这里是模块的代码
  var modal = {
    template:template,
    data:function(){
      return {
      	isShow:false
      }
    },
    props:["modalClass"],
    mounted:function(){
    		var me = this;
    		me.isShow = true;
    		console.log(JSON.stringify(this.modalClass));
    },
    destroyed:function(){
    		console.log("destroyed");    		
    },
    computed: {
	},
    methods:{
    		backgroundAfterEnter:function(){
    			this.isShow = true;
    		},
    		hideModal:function(){
    			this.isShow = false;
    		},  
    		afterLeave:function(){
    			this.$emit("hideModal",this.modalClass["modalId"]);
    		}
    },
  }
  Vue.component("cv-modal-default",modal);
  return modal;
});