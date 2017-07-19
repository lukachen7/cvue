define(["vue","jquery","text!componentPath/cv-tree/cv-tree-single.html","underscore"],
function(Vue,$,template,_) {
  /*
   * 树状单选控件
   */
  var component = {
    template:template,
    /*
     * item例 : {parentValue:"aaa",itemValue:"bbb",itemText:"BBB"}
     */
    data:function(){
      return {
      	selectedItem:null,
      	selectedList:[],
      	currentList:[],
      	treeItemList:null
      }
    },
  	props:["param"],
    mounted:function(){
    		var me = this;
    		this.treeItemList = this.param["treeItemList"];
    		if (me.param){
    			if(me.param["treeItemList"]){
    				me.treeItemList = me.param["treeItemList"];
    			}
    			if(me.param["defaultSelectedItem"]){
    				me.selectedItem = me.param["defaultSelectedItem"];   				
    			}
    		}
    		me.updateTree();
    },
    components:{
    },
    methods:{
    		hideModal:function(){
    			this.$emit("selectedComplete");
    		},
    		selectedComplete:function(){
    			if(this.param && this.param.callBackFunc && typeof(this.param.callBackFunc) == "function"){
    				this.param.callBackFunc(this.selectedItem);
    				this.$emit("selectedComplete");
    			}
    		},
    		itemClick:function(value){
    			var me = this;
    			if(value){
    				var tmpItem = me.getItemByValue(value);
	    			if(tmpItem){
	    				me.selectedItem = tmpItem;    				
	    			}
    			}else{
    				me.selectedItem = null;
    			}
    			me.updateTree();
    		},
    		updateTree:function(){
    			var me = this;   			
    			me.selectedList=[];			
			me.currentList = [];
			if(me.selectedItem){
				var tmpItem = me.selectedItem;
				me.selectedList.unshift(tmpItem);		
				while (tmpItem != null && tmpItem.parentValue != null){
					tmpItem=me.getItemByValue(tmpItem.parentValue);
					if (tmpItem!=null){
						me.selectedList.unshift(tmpItem);
					}else{
						break;
					}
				}
				for (var i=0;i<me.treeItemList.length;i++){
					if(me.treeItemList[i]["parentValue"] == me.selectedItem["itemValue"]){
						me.currentList.push(me.treeItemList[i]);
					}
				}
				if (me.currentList.length == 0){
					for (var i=0;i<me.treeItemList.length;i++){
						if(me.treeItemList[i]["parentValue"] == me.selectedItem["parentValue"]){
							me.currentList.push(me.treeItemList[i]);
						}
					}
					var index = me.selectedList.indexOf(me.selectedItem);
					if (index > -1){
						me.selectedList.pop();
					}
				}
			}else{
				for (var i=0;i<me.treeItemList.length;i++){
					if(me.treeItemList[i]["parentValue"] == null){
						me.currentList.push(me.treeItemList[i]);
					}
				}
			}			
    		},
    		getItemByValue:function(value){
    			var me = this;
			for (var i=0;i<me.treeItemList.length;i++){
				if (me.treeItemList[i].itemValue==value){
					return me.treeItemList[i];
				}
			}
			return null;
		},
    },
    computed: {
	    
	},
  }
  Vue.component("cv-tree-single",component);
  return component;
});