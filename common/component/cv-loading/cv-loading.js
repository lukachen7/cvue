define(["vue","jquery",'servicePath/timer',"text!componentPath/cv-loading/cv-loading.html","underscore"],
function(Vue,$,timer,template,_) {
  /*
   * 加载动画控件
   */
  var component = {
    template:template,
    data:function(){
      return {
      	loadingNum:0,
      	//超时，单位秒
      	timeOutTime:10,
      	//超时计数
      	timeOutTimeNum:0,
      	loadingTimeOutKey:null
      }
    },
    props:[],
    mounted:function(){
    		 
    },
    components:{
    },
    methods:{
    		timeOutCallFunc:function(){
    			var me = this;
    			if(me.timeOutTimeNum >= me.timeOutTime){
				me.hideAllLoading();
				timer.removeFrameOutCall(me.loadingTimeOutKey);
    				me.loadingTimeOutKey = null;
    				me.timeOutTimeNum = 0;
			}else{
				me.timeOutTimeNum++;
			}
    		},
    		checkLoadingNum:function(){
    			var me = this;
    			if(me.loadingNum > 0 && me.loadingTimeOutKey == null){
    				me.loadingTimeOutKey = timer.addFrameOutCall(10,me.timeOutCallFunc);
    			}else if(me.loadingNum <= 0){
    				me.loadingNum = 0;
    				if (me.loadingTimeOutKey != null){
    					timer.removeFrameOutCall(me.loadingTimeOutKey);
    					me.loadingTimeOutKey = null;
    				}
    			}
    			me.timeOutTimeNum = 0;
    		},
    		showLoading:function(){
    			var me = this;
    			me.loadingNum++;
    			me.checkLoadingNum();
    		},
    		hideLoading:function(){
    			var me = this;
    			me.loadingNum--;
    			me.checkLoadingNum();
    		},
    		hideAllLoading:function(){
    			var me = this;
    			me.loadingNum = 0;
    			me.checkLoadingNum();
    		}
    },
    computed: {
	    loadingIsShow:function(){
	    		var me = this;
	    		if(me.loadingNum == 0){
	    			return false;
	    		}else{
	    			return true;
	    		}
	    }
	},
  }
  Vue.component("cv-loading",component);
  return component;
});