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
    		//isOnly时目前效果不加暂时不用
    		showModal:function(modal,isOnly){
    			/*
    			 * modal object属性说明
    			 * modalClass模版控件的名字 string
    			 * modalId自动生成的ID string
    			 * param所带参数 object
    			 */
    			var me = this;
    			if (typeof modal == "string"){
    				modal = {modalClass:modal,modalId:_.uniqueId("modal_")};
    			}else if(typeof modal == "object" && modal["modalClass"]){
    				modal.modalId = _.uniqueId("modal_");
    			}else{
    				console.log("无法识别参数");
    			}
    			me.modalList.push(modal);
    			if (isOnly){
    				me.modalList.splice(0,(me.modalList.length-1));
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
	    }
	},
  }
  Vue.component("cv-modal",component);
  return component;
});