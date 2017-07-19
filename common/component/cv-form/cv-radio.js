define(["vue","jquery","text!componentPath/cv-form/cv-radio.html","underscore"],
function(Vue,$,template,_) {
  /*
   * 单选radio控件
   */
  var component = {
    template:template,
    data:function(){
      return {
      	id:_.uniqueId("radio_")
      }
    },
    model: {
    		prop: 'picked',
    		event: 'change'
  	},
  	props: {
    		picked: [String, Number],
    		value: [String, Number],
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
  Vue.component("cv-radio",component);
  return component;
});