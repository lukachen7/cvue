define(["vue","text!modulePath/test/testpage2.html","modulePath/test/app"],function(Vue,template,app) {
  // 这里是模块的代码
  console.log(app);
  var page = {
    template:template,
    data:function(){
    		var tmpList = [];
    		var randomNum = Math.ceil(Math.random()*10);
    		for(var i=0;i<randomNum;i++){
    			tmpList.push(i);
    		}
    		return {
	        tmpList:tmpList
	    }
    },
    props:[],
    mounted:function(){
    		app.root.message="imTestpage2!"
    }
  }
  Vue.component("testpage2",page);
  return page;
});