define(["vue","toastr","servicePath/rule",'servicePath/timer',"text!com.csair.demo/scroll-demo.html","com.csair.demo/app"],function(Vue,toastr,rule,timer,template,app) {
  // 这里是模块的代码
  var page = {
    template:template,
    data:function(){
    		var index = 0;
    		var dataList = [];
    		for (var i=0;i<10;i++){
    			index+=1;
    			var tmpData = "第（"+index+"）条数据";
    			dataList.push(tmpData);
    		}
      return {
        clientPages:app.clientPage,
        index:index,
        dataList:dataList
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
		"pullDownAction":function(component){
			var me = this;
			setTimeout(function(){
				for(var i=0;i<3;i++){
					me.index+=1;
		    			var tmpData = "第（"+me.index+"）条数据";
		    			me.dataList.unshift(tmpData);
				}
				component.scrollRefresh();
			},2000);    			
		},
		"pullUpAction":function(component){	
			var me = this;
			setTimeout(function(){
				for(var i=0;i<3;i++){
					me.index+=1;
		    			var tmpData = "第（"+me.index+"）条数据";
		    			me.dataList.push(tmpData);
				}
				component.scrollRefresh();
			},2000);
		}
    },
  }
  Vue.component("scroll-demo",page);
  return page;
});