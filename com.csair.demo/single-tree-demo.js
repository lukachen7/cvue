define(["vue","text!com.csair.demo/single-tree-demo.html","com.csair.demo/app"],function(Vue,template,app) {
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
	     singleItem:null,
      }
    },
    props:["param"],    
    mounted:function(){
    		
    },
    computed: {
	    
	},
    destroyed:function(){
    		console.log("destroyed");
    },
    methods:{
    		showModal:function(modalName,type){
    			if (typeof modalName == "string" && typeof type == "string"){
    				app.rootModal.showModal({modalClass:"cv-modal-default",modalContent:modalName,param:{callBackFunc:this.selectSingleCallBack,treeItemList:this.tmpTreeList,defaultSelectedItem:this.singleItem},modalEffect:type});
    			}
    		},
    		selectSingleCallBack:function(item){
    			this.singleItem = item;   			
    		},
    },
  }
  Vue.component("single-tree-demo",page);
  return page;
});