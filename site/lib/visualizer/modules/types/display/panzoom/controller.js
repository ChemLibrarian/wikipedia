define(["modules/default/defaultcontroller"],function(a){function b(){}return b.prototype=$.extend(!0,{},a),b.prototype.moduleInformation={name:"Panzoom",description:"Panzoom",author:"Daniel Kostro",date:"15.06.2014",license:"MIT",cssClass:"mod_panzoom"},b.prototype.references={picture:{type:"picture",label:"A picture"}},b.prototype.events={},b.prototype.variablesIn=["picture"],b.prototype.actionsIn={},b.prototype.configurationStructure=function(){var a=[],b=this.module.definition.vars_in;if(b)for(var c=0,d=b.length;d>c;c++)a.push({title:b[c].name,key:b[c].name});return{groups:{group:{options:{type:"list"},fields:{}},img:{options:{type:"table",multiple:!0},fields:{variable:{type:"combo",title:"Variable In",options:a,"default":""},opacity:{type:"text",title:"Opacity [0,1]","default":"1"},order:{type:"text",title:"z-index","default":""}}}}}},b.prototype.configAliases={img:["groups","img",0]},b});