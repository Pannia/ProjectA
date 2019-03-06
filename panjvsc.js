var calc = function()
{


	var xu= parseFloat(document.getElementById("price").value);
	//document.getElementById("net").value=xu;
	var ym= parseFloat(document.getElementById("dis").value);
	if(xu<0 || xu>1000)
	{
		alert("please enter price between 0 and 1000");
	}
	
	if(ym<0 || ym>70)
	{
		alert("Enter between 0 and 70");
	}
	
	if(isNaN(xu) || isNaN(ym))
	{
		alert("Invalid Input");
	}
	
	
	var zt=(xu*ym)/100;
	var netp =  xu - zt;	
	
	document.getElementById("discount").value= zt;
document.getElementById("net").value= netp;}
	
	window.onload = function()
	{
	document.getElementById("cal").onclick = calc;
	}

	