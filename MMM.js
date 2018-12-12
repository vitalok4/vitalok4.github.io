



﻿﻿function $() 
{ var elements = new Array(); 
for (var i = 0; i < arguments.length; i++) 
{ var element = arguments[i]; 
if (typeof element == 'string') 
element = document.getElementById(element); 
if (arguments.length == 1) 
return element; 
elements.push(element); 
} 
return elements; }

function f1()
{
	N=parseFloat($('tx1').value);
	K=parseFloat($('tx2').value);
	var sum = 0;
	for(var i=1; i<=N; i++)
	{ 
		sum = sum + Math.pow(i,K);


	}
	$('tx4').value=sum;

}
function f2()
{
	A=parseFloat($('r1').value);
	B=parseFloat($('r2').value);
	result='';
	for(var i=A; i<=B; i++)
	{
		for(var j=1; j<= i; j++)
			result=result+i;
	}
	$('r4').value=result;
}
