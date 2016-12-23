document.oncontextmenu=function ()
{
	return false;
};

document.addEventListener('contextmenu', function (ev){
	var oEvent=ev||event;
	
	oEvent.preventDefault();
}, false);