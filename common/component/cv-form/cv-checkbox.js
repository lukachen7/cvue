define(["vue","jquery","text!componentPath/cv-form/cv-checkbox.html","underscore"],
function(Vue,$,template,_) {
  /*
   * 多选checkbox控件
   */
  var component = {
    template:template,
    data:function(){
      return {
      	id:_.uniqueId("checkbox_")
      }
    },
    model: {
    		prop: 'checked',
    		event: 'change'
  	},
  	props: {
    		checked: Boolean,
    		value: String,
    		labelText: String,
  	},
    mounted:function(){
    		 
    },
    components:{
    },
    methods:{
    },
    computed: {
	    
	},
  }
  Vue.component("cv-checkbox",component);
  return component;
});