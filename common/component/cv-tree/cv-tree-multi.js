define(["vue","jquery","text!componentPath/cv-tree/cv-tree-multi.html","underscore"],
function(Vue,$,template,_) {
  /*
   * 树状多选控件
   */
  var component = {
    template:template,
    /*
     * item例 : {parentValue:"aaa",itemValue:"bbb",itemText:"BBB"}
     */
    data:function(){
      return {
      	parentItem:null,
      	selectedItems:null,
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
    			if(me.param["defaultSelectedItems"]){
    				me.selectedItems = me.param["defaultSelectedItems"];   				
    			}
    			if(me.param["treeItemList"]){
    				me.initTree(me.param["treeItemList"]);
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
//  			if(this.param && this.param.callBackFunc && typeof(this.param.callBackFunc) == "function"){
//  				this.param.callBackFunc(this.selectedItems);
    				this.$emit("selectedComplete");
//  			}
    		},
    		itemClick:function(value){
    			var me = this;
    			if(value){
    				var tmpItem = me.getItemByValue(value);
	    			if(tmpItem){
	    				me.parentItem = tmpItem;    				
	    			}
    			}else{
    				me.parentItem = null;
    			}
    			me.updateTree();
    		},
    		initTree:function(itemList){
    			var me = this;
    			me.treeItemList = [];
    			if(itemList && itemList.length>0){
    				for(var i=0;i<itemList.length;i++){
    					var tmpItem = _.clone(itemList[i],true);
    					if(me.checkIsSelected(tmpItem.itemValue)){
    						tmpItem["checked"] = true;
    					}else{
    						tmpItem["checked"] = false;
    					}
    					me.treeItemList.push(tmpItem);
    				}
    			}
    		},
    		updateTree:function(){
    			var me = this;   			
    			me.selectedList = [];			
			me.currentList = [];
			if(me.parentItem){
				var tmpItem = me.parentItem;
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
					if(me.treeItemList[i]["parentValue"] == me.parentItem["itemValue"]){
						me.currentList.push(me.treeItemList[i]);
					}
				}
				if (me.currentList.length == 0){
					for (var i=0;i<me.treeItemList.length;i++){
						if(me.treeItemList[i]["parentValue"] == me.parentItem["parentValue"]){
							me.currentList.push(me.treeItemList[i]);
						}
					}
					var index = me.selectedList.indexOf(me.parentItem);
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
		checkIsSelected:function(value){
			var me = this;
			if (me.selectedItems && me.selectedItems.length>0){
				for(var i=0;i<me.selectedItems.length;i++){
					if(me.selectedItems[i]["itemValue"] == value){
						return true;
					}
				}
			}
			return false;
		}
    },
    computed: {
	    
	},
  }
  Vue.component("cv-tree-multi",component);
  return component;
});