﻿function $() 
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

function f11(){
var a = parseFloat($('tx1').value);
var b = parseFloat($('tx2').value);
var c =parseFloat($('tx3').value);
min=a;
if (min > b)
min=b;
if (min > c)
min=c;
$('tx4').value=min;
}

function f22(){
var a = parseFloat($('tx1').value);
var b = parseFloat($('tx2').value);
var c =parseFloat($('tx3').value);
max=a;
if (max < b)
max=b;
if (max < c)
max=c;
$('tx5').value=max;
}
function f1(){
	a=parseFloat($('tx1').value);
	if(a>0)
		{ x1=a+1;}
	else 
 		{
		if(a<0)
		{ x1=a-2;}

 		else
 		{x1=10;}
		}
$('tx22').value=x1;}
