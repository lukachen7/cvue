define(["vue","iscroll","text!componentPath/cv-scroll/cv-scroll.html","componentPath/cv-scroll/cv-pull-down","componentPath/cv-scroll/cv-pull-up"],
function(Vue,iScroll,template,cvPullDown,cvPullUp) {
  // 控件的代码
  var component = {
    template:template,
    data:function(){
      return {
      	iscroll:null,
      }
    },
    props:["isRefresh","isLoadMore"],
    mounted:function(){
    		var me = this;
    		me.$el.addEventListener('touchmove', function (e) { e.preventDefault(); }, false);
    		var container = me.$el;
		var pullDownEl = container.querySelector('.pullDown');
		var pullDownOffset = 0;
		if (me.isRefresh){
			pullDownOffset = parseInt(pullDownEl.getAttribute('data-offset-h'));
		}
		var pullUpEl = container.querySelector('.pullUp');	
		me.iscroll = new iScroll(me.$el,{
			//设置初始y轴的值
			startY:-pullDownOffset,
			//必选
			probeType:1,
			//关闭鼠标事件
			disableMouse:true,
			//关闭指针事件
//			disablePointer:true
		});
		
		me.iscroll.on("refresh",function(){
			if (me.isRefresh && me.iscroll.y > -pullDownOffset){
				me.iscroll.scrollTo(0, -pullDownOffset, 500, iScroll.utils.ease.circular);
			}
			if (me.isRefresh){
				if (pullDownEl.className.match('loading')) {
					pullDownEl.className = 'pullDown';
					pullDownEl.querySelector('.pullDownLabel').innerHTML = '下拉刷新...';
				}
			}
			if (me.isLoadMore){
				if (pullUpEl.className.match('loading')) {
					pullUpEl.className = 'pullUp';
					pullUpEl.querySelector('.pullUpLabel').innerHTML = '上拉加载更多...';
				}
			}		
		})
		me.iscroll.on("scroll",function(){
			if (me.isRefresh){
				if (this.y >= 0) {
					pullDownEl.className = 'pullDown flip';
					pullDownEl.querySelector('.pullDownLabel').innerHTML = '释放刷新...';
					this.minScrollY = 0;
				}
				if (this.y < 0 && pullDownEl.className.match('flip')) {
					pullDownEl.className = 'pullDown';
					pullDownEl.querySelector('.pullDownLabel').innerHTML = '下拉刷新...';
					this.minScrollY = -pullDownOffset;
				}
			}
			if (me.isLoadMore){
				if ( this.y <= this.maxScrollY) {
					pullUpEl.className = 'pullUp flip';
					pullUpEl.querySelector('.pullUpLabel').innerHTML = '释放加载...';
				} 
				 if ( this.y > this.maxScrollY) {
					pullUpEl.className = 'pullUp';
					pullUpEl.querySelector('.pullUpLabel').innerHTML = '上拉加载更多...';
				}
			}	
		})
		me.iscroll.on("scrollEnd",function(){
			if (me.isRefresh){
				if (pullDownEl.className.match('flip')) {
					pullDownEl.className = 'pullDown loading';
					pullDownEl.querySelector('.pullDownLabel').innerHTML = '加载中...';				
					me.pullDownAction();	// Execute custom function (ajax call?)
					return;
				} 
			}
			if (me.isLoadMore){
				if (pullUpEl.className.match('flip')) {
					pullUpEl.className = 'pullUp loading';
					pullUpEl.querySelector('.pullUpLabel').innerHTML = '加载中...';		
					me.pullUpAction();	// Execute custom function (ajax call?)
					return;
				}
			}
			if (me.isRefresh && me.iscroll.y > -pullDownOffset){
				me.iscroll.scrollTo(0, -pullDownOffset, 500, iScroll.utils.ease.circular);
			}
		})
    },
    destroyed:function(){
    		console.log("destroyed");
    		if(this.iscroll){
    			this.iscroll.destroy();
    			this.iscroll=null;
    		}    		
    },
    components:{
    		"cv-pull-down":cvPullDown,
    		"cv-pull-up":cvPullUp
    },
    methods:{
    		"scrollRefresh":function(){
    			var me = this;
    			setTimeout(function(){
    				me.iscroll.refresh();
    			},1000);	
    		},
    		"pullDownAction":function(){
    			this.$emit("pullDownAction",this)	;
		},
		"pullUpAction":function(){	
			this.$emit("pullUpAction",this);
		},
    },
  }
  Vue.component("cv-scroll",component);
  return component;
});