define(["vue","moment","text!com.csair.demo/multi-tree-demo.html","com.csair.demo/app"],function(Vue,moment,template,app) {
  // 这里是模块的代码
  var page = {
    template:template,
    data:function(){
      return {
        clientPages:app.clientPage,
        tmpTreeList:[
	        {parentValue:null,itemValue:"aaa",itemText:"AAA"},
	        {parentValue:null,itemValue:"bbb",itemText:"BBB"},
	        {parentValue:null,itemValue:"ccc",itemText:"CCC"},
	        {parentValue:"aaa",itemValue:"aaaaaa",itemText:"aaaAAA"},
	        {parentValue:"aaa",itemValue:"aaabbb",itemText:"aaaBBB"},
	        {parentValue:"aaa",itemValue:"aaaccc",itemText:"aaaCCC"},
	        {parentValue:"bbb",itemValue:"bbbaaa",itemText:"bbbAAA"},
	        {parentValue:"bbb",itemValue:"bbbbbb",itemText:"bbbBBB"},
	        {parentValue:"bbb",itemValue:"bbbccc",itemText:"bbbCCC"},
	        {parentValue:"ccc",itemValue:"cccaaa",itemText:"cccAAA"},
	        {parentValue:"ccc",itemValue:"cccbbb",itemText:"cccBBB"},
	        {parentValue:"aaaaaa",itemValue:"aaaaaaaaa",itemText:"aaaaaaAAA"},
	        {parentValue:"aaaaaa",itemValue:"aaaaaabbb",itemText:"aaaaaaBBB"},
	        {parentValue:"aaaaaaaaa",itemValue:"aaaaaaaaabbb",itemText:"aaaaaaaaaBBB"},
	        {parentValue:"aaaaaaaaa",itemValue:"aaaaaaaaaccc",itemText:"aaaaaaaaaCCC"},
	        {parentValue:"cccbbb",itemValue:"cccbbbaaa",itemText:"cccbbbAAA"},
	        {parentValue:"cccbbb",itemValue:"cccbbbbbb",itemText:"cccbbbBBB"}	        
	     ],
	     multiItems:[]
      }
    },
    props:["param"],    
    mounted:function(){
    		
    },
    computed: {
	    multiItemsStr:function(){
	    		var tmpArr = [];
	    		for(var i=0;i<this.multiItems.length;i++){
	    			tmpArr.push(this.multiItems[i]["itemText"]);
	    		}
	    		return tmpArr.join(",");
	    }
	},
    destroyed:function(){
    		console.log("destroyed");
    },
    methods:{
    		showModal:function(modalName,type){
    			if (typeof modalName == "string" && typeof type == "string"){
    				app.rootModal.showModal({modalClass:"cv-modal-default",modalContent:modalName,param:{callBackFunc:this.selectMultiCallBack,treeItemList:this.tmpTreeList,defaultSelectedItems:this.multiItems},modalEffect:type});
    			}
    		},	    
    		selectMultiCallBack:function(items){
    			this.multiItems = [];
    			for (var i=0;i<this.tmpTreeList.length;i++){
    				var tmpItem = this.tmpTreeList[i];
    				if (items.indexOf(tmpItem["itemValue"]) > -1){
    					this.multiItems.push(tmpItem);
    				}
    			}
    		}
    },
  }
  Vue.component("multi-tree-demo",page);
  return page;
});