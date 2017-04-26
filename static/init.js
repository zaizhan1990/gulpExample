;(function(){
	var SITEURL=document.getElementById('SITEURL')==null?"":document.getElementById('SITEURL').attributes['SITEURL'].value;
	var identify=document.getElementById('identify')==null?"index":document.getElementById('identify').attributes['identify'].value;
	//switch(identify){
	//	case "userCenter":
	//		identify="user";
	//	break;
	//	case "helpCenter":
	//		identify="help";
	//	break;
	//}
	   var extrance=SITEURL+"/static/release/js/"+identify;
//    var extrance=SITEURL+"/static/js/moudle/"+identify;
    var script=document.createElement("script");
	script.type="text/javascript";
	script.src=SITEURL+"/static/require.js";
	script.setAttribute("data-main",extrance);
	document.body.appendChild(script);

})();
