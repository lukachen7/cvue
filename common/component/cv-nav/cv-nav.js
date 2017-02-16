define(["vue","text!componentPath/cv-nav/cv-nav.html","underscore"],
function(Vue,template,_) {
  // 控件的代码
  var component = {
    template:template,
    data:function(){
      return {
      	effect:"nav-push",
        navList:[],
      }
    },
    props:["currentContent"],
    mounted:function(){
    		this.navList.push(this.currentContent);    		
    },
    components:{
    },
    methods:{
    		"navPush":function (content){
    			this.effect = "nav-push";
    			this.navList.push(content);
    			this.currentContent = content;
    			console.log(JSON.stringify(this.navList));
    		},
    		"navBack":function (){
    			this.effect = "nav-pop";
    			this.navList.splice((this.navList.length-1),1);
    			this.currentContent = _.last(this.navList);
    		},
    		"navPop":function (content){
    			var contentIndex = _.indexOf(this.navList,content);
    			if (contentIndex > -1){
    				this.effect = "nav-pop";
    				this.navList.splice(contentIndex,(this.navList.length - contentIndex));
    				this.currentContent = _.last(this.navList);
    			}
    		}
    },
  }
  Vue.component("cv-nav",component);
  return component;
});