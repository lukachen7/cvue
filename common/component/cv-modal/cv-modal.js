define(["vue","jquery","text!componentPath/cv-modal/cv-modal.html","underscore"],
function(Vue,$,template,_) {
  // 控件的代码
  var component = {
    template:template,
    data:function(){
      return {
      	modalList:[],
      	hideTimeOut:null
      }
    },
    props:[],
    mounted:function(){
    		 
    },
    components:{
    },
    methods:{
    		showModal:function(modal,isOnly){
    			/*
    			 * modal object属性说明
    			 * modalClass模版控件的名字 string
    			 * modalContent模版内容的名字 string
    			 * modalId自动生成的ID string
    			 * param所带参数 object
    			 */
    			var me = this;
    			if (typeof modal == "string"){
    				modal = {modalContent:modal,modalClass:"cv-modal-default",modalId:_.uniqueId("modal_"),modalEffect:"move-fade"};
    			}else if(typeof modal == "object" && modal["modalClass"]){
    				modal.modalId = _.uniqueId("modal_");
    			}else{
    				console.log("无法识别参数");
    				return;
    			}
    			if (!modal["modalClass"]){
    				modal["modalClass"] = "cv-modal-default";
    			}
    			if (!modal["modalEffect"]){
    				modal["modalEffect"] = "move-fade";
    			}
    			me.modalList.push(modal);
    			if (isOnly){
    				for(var i=0;i<me.modalList.length-1;i++){
    					me.$refs.modals[i].isShow = false;
    				}
    			}	
    		},
    		hideModal:function(modalId){
    			var index = _.findIndex(this.modalList, function(modal) {
			  return modal.modalId == modalId;
			});
    			if (index > -1){
    				this.modalList.splice(index,1);	
    			}
    		}
    },
    computed: {
	    modalIsShow:function(){
	    		var me = this;
	    		if(me.modalList.length == 0){
	    			return false;
	    		}else{
	    			return true;
	    		}
	    },
	    effect:function(){
	    		var me = this;
	    		if(me.modalList && me.modalList.length>0){
	    			var lastModal = me.modalList[me.modalList.length-1];
	    			if (lastModal["modalEffect"]){
	    				return lastModal["modalEffect"];
	    			}
	    		}
	    		return "modal-list"
	    },
	    containerEffect:function(){
	    		var me = this;
	    		if(me.modalList && me.modalList.length>0){
	    			var firstModal = me.modalList[0];
	    			if (firstModal["modalEffect"]){
	    				return firstModal["modalEffect"];
	    			}
	    		}
	    		return "modal-list";
	    }
	},
  }
  Vue.component("cv-modal",component);
  return component;
});