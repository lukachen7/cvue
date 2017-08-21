define(["vue","text!componentPath/cv-tab/cv-tab-content.html","underscore"],
function(Vue,template,_) {
  /*
   * 导航容器控件
   */
  var component = {
    template:template,
    data:function(){
    	/*
    	 * effect 为切换页面动画效果
    	 */
        // var self = this;
        // var currentIndex = self.defaultIndex?self.defaultIndex:0;
        // var currentContent = null;
        // if (self.currentList && self.currentList.length > 0 && self.currentList.length > currentIndex) {
        //     currentContent = self.contentList[self.currentIndex];
        // }
      return {
          effect:"slider-left",
          currentIndex:0,
          currentContent: {}
      }
    },
    /*
     * contents 分页内容列表
     */
    props:["contentList","defaultIndex"],
    mounted:function(){
        var self = this;

        self.currentIndex = self.defaultIndex?self.defaultIndex:0;
        if (self.contentList && self.contentList.length > 0 && self.contentList.length > self.currentIndex) {
            self.currentContent = self.contentList[self.currentIndex];
            console.log(JSON.stringify(self.currentContent));
        }
    },
    components:{
    },
    methods:{
        /*
         *切换TAB方法
         */
        showIndex:function(index){

            var self = this;
            if (self.contentList && self.contentList.length > 0 && self.contentList.length > index && self.currentIndex != index){
                if (index < self.currentIndex){
                    self.effect = "slider-right";
                }else {
                    self.effect = "slider-left";
                }
                self.currentIndex = index;
                self.currentContent = self.contentList[self.currentIndex];
            }
        }
    },
  }
  Vue.component("cv-tab-content",component);
  return component;
});