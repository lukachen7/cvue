define(["vue","jquery","iscroll","text!componentPath/cv-slider/cv-slider.html"],
function(Vue,$,iScroll,template) {
  // 控件的代码
  var component = {
    template:template,
    data:function(){
      return {
      	iscroll:null,
      }
    },
    props:[],
    mounted:function(){
    		var me = this;
    		var firstItem = $(me.$el).find('.cv-slider-item').first();
    		if(firstItem){
    			$(me.$el).height(firstItem.height());
    			$(me.$el).find(".cv-slider-item-container").height(firstItem.height());
    			$(me.$el).find('.cv-slider-item').width($(me.$el).width());
    			me.$el.addEventListener('touchmove', function (e) { e.preventDefault(); }, false);
    			me.iscroll = new IScroll(me.$el, {
				scrollX: true,
				scrollY: false,
				momentum: false,
				snap: true,
				snapSpeed: 400,
				keyBindings: true,
			});	
    		}
    },
    destroyed:function(){
    		console.log("destroyed");
    		if(this.iscroll){
    			this.iscroll.destroy();
    			this.iscroll=null;
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