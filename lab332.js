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

function f1(){
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

function f2(){
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
