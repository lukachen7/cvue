define(["vue","text!componentPath/cv-nav/cv-nav.html","underscore"],
function(Vue,template,_) {
  // 导航容器控件
  var component = {
    template:template,
    data:function(){
    	/*
    	 * effect 为切换页面动画效果
    	 * navList 为导航页面列表
    	 * currentContent 为当前页面component名字
    	 */
      return {
      	effect:"",
        navList:[],
        currentContent:{}
      }
    },
    /*
     * defaultContent 默认component名字
     */
    props:["defaultContent"],
    mounted:function(){
    		this.currentContent = {contentClass:this.defaultContent,contentId:_.uniqueId("content_")};
    		this.navList.push(this.currentContent);    		
    },
    components:{
    },
    methods:{
    		/*
    		 * navPush,navBack,navPop为绑定处理事件的方法
    		 */
    		"navPush":function (content){
    			if (typeof content == "string"){
    				content = {contentClass:content,contentId:_.uniqueId("content_")};
    			}else if(typeof content == "object" && content["contentClass"]){
    				content.contentId = _.uniqueId("content_");
    			}else{
    				console.log("无法识别参数");
    			}
    			this.effect = "nav-push";
    			this.navList.push(content);
    			this.currentContent = content;
    		},
    		"navBack":function (){
    			this.effect = "nav-pop";
    			this.navList.splice((this.navList.length-1),1);
    			this.currentContent = _.last(this.navList);
    		},
    		"navPop":function (contentId){
    			//contentId可以是ID(优先匹配)
    			var index = _.findIndex(this.navList, function(content) {
			  return content.contentId == contentId;
			});
			//contentId也可以是页面contentClass(不精确)
			if (index > -1){
				index = _.findLastIndex(this.navList, function(content) {
				  return content.contentClass == contentId;
				});
			}
    			if (index > -1){
    				this.effect = "nav-pop";
    				this.navList.splice(index,(this.navList.length - index));
    				this.currentContent = _.last(this.navList);
    			}
    		}
    },
  }
  Vue.component("cv-nav",component);
  return component;
});