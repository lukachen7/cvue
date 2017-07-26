define(["vue","jquery","iscroll",'servicePath/timer',"text!componentPath/cv-slider/cv-slider.html"],
function(Vue,$,iScroll,timer,template) {
  /*
   * 滑动焦点图控件 可放任何元素
   */
  var component = {
    template:template,
    data:function(){
      return {
      	iscroll:null,
      	sliderTimeOutKey:null
      }
    },
    props:['autoPlay'],
    mounted:function(){
    		var me = this;
    		var firstItem = $(me.$el).find('.cv-slider-item').first();
    		
    		function init(){
    			me.resizeEl();
    			if (firstItem && !me.iscroll){
    				me.$el.addEventListener('touchmove', function (e) { e.preventDefault(); }, false);
	    			me.iscroll = new IScroll(me.$el, {
					scrollX: true,
					scrollY: false,
					momentum: false,
					snap: true,
					snapSpeed: 500,
					keyBindings: true,
				});	
				//注册自动轮播
				me.sliderTimeOutKey = timer.addFrameOutCall(40,function(){
					if(me.autoPlay){
						if (me.iscroll.x == me.iscroll.maxScrollX){
							me.iscroll.goToPage(0,0,500,iScroll.utils.ease.circular)
						}else{
							me.iscroll.next();
						}
					}				
				});
    			}
    		}
    		$(window).resize(me.resizeEl);
    		init();
    },
    updated:function(){
    },
    destroyed:function(){
    		console.log("destroyed");
    		if(this.iscroll){
    			this.iscroll.destroy();
    			this.iscroll=null;
    		}
    		if(this.sliderTimeOutKey != null){
    			timer.removeFrameOutCall(this.sliderTimeOutKey);
    			this.sliderTimeOutKey = null;
    		}
    },
    components:{    		
    },
    methods:{
    		resizeEl:function(){
    			var me = this;
    			var firstItem = $(me.$el).find('.cv-slider-item').first().html();
	    		if(firstItem){
//	    			$(me.$el).height(firstItem.height());
//	    			console.log(firstItem,$(me.$el).height(),firstItem.height());
	    			$(me.$el).append("<div>"+firstItem+"</div>");
	    			$(me.$el).find('.cv-slider-item').width($(me.$el).width());	    			
	    		}
    		}
    },
  }
  Vue.component("cv-slider",component);
  return component;
});