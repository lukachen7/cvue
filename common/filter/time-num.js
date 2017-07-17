/*
 * 时间数字补零
 */
define(["vue"],function(Vue) {
	// 这里是模块的代码
	function filter(value){
		var num = parseInt(value);
		if (num < 10){
			return "0"+num;
		}else{
			return num;
		}
	}
	Vue.filter("time-num",filter);
	return filter;
});