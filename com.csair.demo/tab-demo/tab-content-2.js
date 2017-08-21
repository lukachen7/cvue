/**
 * Created by chenwj on 2017/8/21.
 */
define(["vue","text!com.csair.demo/tab-demo/tab-content-2.html","com.csair.demo/app","underscore"],function(Vue,template,app,_) {
    // 这里是模块的代码
    var page = {
        template:template,
        data:function(){

            return {

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

        }
    }
    Vue.component("tab-content-2",page);
    return page;
});