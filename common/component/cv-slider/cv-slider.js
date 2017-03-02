define(["vue","jquery","iscroll",'servicePath/timer',"text!componentPath/cv-slider/cv-slider.html"],
function(Vue,$,iScroll,timer,template) {
  // 控件的代码
  var component = {
    template:template,
    data:function(){
      return {
      	iscroll:null,
      	sliderTimeOutKey:''
      }
    },
    props:['autoPlay'],
    mounted:function(){
    		var me = this;
    		var firstItem = $(me.$el).find('.cv-slider-item').first();
    		function resizeEl(){
	    		if(firstItem){
	    			$(me.$el).height(firstItem.height());
	    			$(me.$el).find(".cv-slider-item-container").height(firstItem.height());
	    			$(me.$el).find('.cv-slider-item').width($(me.$el).width());	    			
	    		}
    		}
    		function init(){
    			resizeEl();
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
    		$(window).resize(resizeEl);
    		init();
    },
    destroyed:function(){
    		console.log("destroyed");
    		if(this.iscroll){
    			this.iscroll.destroy();
    			this.iscroll=null;
    		}
    		if(this.sliderTimeOutKey != ""){
    			timer.removeFrameOutCall(this.sliderTimeOutKey);
    		}
    },
    components:{    		
    },
    methods:{
    		
    },
  }
  Vue.component("cv-slider",component);
  return component;
});