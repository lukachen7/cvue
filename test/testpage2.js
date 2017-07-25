define(["vue","moment","text!test/testpage2.html","test/app"],function(Vue,moment,template,app) {
  // 这里是模块的代码
  var page = {
    template:template,
    data:function(){
    		var tmpList = [];
    		var randomNum = Math.ceil(Math.random()*7)+2;
    		for(var i=0;i<randomNum;i++){
    			tmpList.push(i);
    		}
    		return {
	        tmpList:tmpList,
	        selectedDate:null,
	        tmpSingleTreeList:[
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
	        singleItem:{parentValue:"cccbbb",itemValue:"cccbbbbbb",itemText:"cccbbbBBB"},
	        multiItems:[{parentValue:"aaaaaa",itemValue:"aaaaaabbb",itemText:"aaaaaaBBB"},
	        				{parentValue:"aaaaaaaaa",itemValue:"aaaaaaaaabbb",itemText:"aaaaaaaaaBBB"},
	        				{parentValue:"cccbbb",itemValue:"cccbbbbbb",itemText:"cccbbbBBB"}]
	    }
    },
    props:["param","contentId"],
    mounted:function(){
    		app.root.message="imTestpage2!"
    },
    computed: {
	    selectedDateStr:function(){
	    		if (this.selectedDate){
	    			var selectedMoment = moment(this.selectedDate);
	    			return selectedMoment.format("YYYY-MM-DD HH:mm:ss");
	    		}
	    		return "选择时间";
	    },
	    multiItemsStr:function(){
	    		var tmpArr = [];
	    		for(var i=0;i<this.multiItems.length;i++){
	    			tmpArr.push(this.multiItems[i]["itemText"]);
	    		}
	    		return tmpArr.join(",");
	    }
	},
    methods:{
    		showModal:function(){
    			app.rootModal.showModal("testmodal");
    		},
    		showModal2:function(){
    			app.rootModal.showModal({modalClass:"cv-modal-default",modalContent:"testmodal2",param:{message:"message"},modalEffect:"bottom-push"});
    		},
    		showCalender:function(){
    			app.rootModal.showModal({modalClass:"cv-modal-default",modalContent:"calendarmodal1",param:{callBackFunc:this.selectDateCallBack,calendarMinDate:new Date(500000000),calendarShowDate:this.selectedDate?this.selectedDate:null},modalEffect:"bottom-push"});
    		},
    		showCalender2:function(){
    			app.rootModal.showModal({modalClass:"cv-modal-default",modalContent:"calendarmodal2",param:{callBackFunc:this.selectDateCallBack,calendarMinDate:new Date(500000000),calendarShowDate:this.selectedDate?this.selectedDate:null},modalEffect:"move-fade"});
    		},
    		showTree:function(){
    			app.rootModal.showModal({modalClass:"cv-modal-default",modalContent:"treemodal",param:{callBackFunc:this.selectSingleCallBack,treeItemList:this.tmpSingleTreeList,defaultSelectedItem:this.singleItem},modalEffect:"bottom-push"});
    		},
    		showTreeMulti:function(){
    			app.rootModal.showModal({modalClass:"cv-modal-default",modalContent:"treemodal2",param:{callBackFunc:this.selectMultiCallBack,treeItemList:this.tmpSingleTreeList,defaultSelectedItems:this.multiItems},modalEffect:"move-fade"});
    		},
    		selectDateCallBack:function(date){
    			this.selectedDate = date;   			
    		},
    		selectSingleCallBack:function(item){
    			this.singleItem = item;   			
    		},
    		selectMultiCallBack:function(items){
    			this.multiItems = [];
    			for (var i=0;i<this.tmpSingleTreeList.length;i++){
    				var tmpItem = this.tmpSingleTreeList[i];
    				if (items.indexOf(tmpItem["itemValue"]) > -1){
    					this.multiItems.push(tmpItem);
    				}
    			}
    		}
    }
  }
  Vue.component("testpage2",page);
  return page;
});