/**
 * Created by chenwj on 2017/8/21.
 */
define(["vue","text!com.csair.demo/tab-demo/tab-demo.html","com.csair.demo/app","underscore"],function(Vue,template,app,_) {
    // 这里是模块的代码
    var page = {
        template:template,
        data:function(){

            return {
                tabList:[
                    {contentClass:"tab-content-1",contentId:_.uniqueId("content_"),param:"我是数据1"},
                    {contentClass:"tab-content-2",contentId:_.uniqueId("content_"),param:"我是数据2"},
                    {contentClass:"tab-content-3",contentId:_.uniqueId("content_"),param:"我是数据3"}
                ]
            }
        },
        props:["param"],
        mounted:function(){
        },
        destroyed:function(){
            console.log("destroyed");
        },
        computed: {

        },
        methods:{
            changeTab:function (index) {
                var self = this;
                self.$refs.tabContent.showIndex(index);
            }
        }
    }
    Vue.component("tab-demo",page);
    return page;
});