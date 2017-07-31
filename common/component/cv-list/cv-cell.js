define(["vue","jquery","iscroll","text!componentPath/cv-list/cv-cell.html"],
function(Vue,$,iScroll,template) {
  /*
   * cell控件 可放任何元素
   */
  var component = {
    template:template,
    data:function(){
      return {
      	iscroll:null
      }
    },
    props:[],
    mounted:function(){
    		var me = this;
    		var firstItem = $(me.$el).find('.cv-cell-item').first();
    		
    		function init(){
    			me.resizeEl();
    			if (firstItem && !me.iscroll){
    				me.$el.addEventListener('touchmove', function (e) { e.preventDefault(); }, false);
	    			me.iscroll = new IScroll(me.$el, {
					scrollX: true,
					scrollY: false,
					momentum: false,
					snap: true,
					snapSpeed: 500
				});	
				
				me.iscroll.on("scroll",function(){
					
				})
				me.iscroll.on("scrollEnd",function(){

				})
    			}
    		}
    		$(window).resize(me.resizeEl);
    		if (firstItem.find('img')){
    			firstItem.find('img').bind('load',me.resizeEl);
    		}
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
    },
    computed: {
	},
    methods:{
    		resizeEl:function(e){
    			var me = this;
    			var firstItem = $(me.$el).find('.cv-cell-item').first();
	    		if(firstItem){
//	    			$(me.$el).append("<div>"+firstItem+"</div>");
	    			firstItem.width($(me.$el).width());	
	    			$(me.$el).find('.controls').height(firstItem.height());	
	    		}
	    		me.$emit("onResize");
//	    		console.log(e.currentTarget.tagName);
	    		if(e && e.currentTarget.tagName == "IMG"){
	    			$(e.currentTarget).unbind("onload");
	    			
	    		}
    		}
    },
  }
  Vue.component("cv-cell",component);
  return component;
});