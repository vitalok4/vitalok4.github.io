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

function f11()
{ 
document.getElementById("d42").style.backgroundColor="pink";
}

function f22()
{ 
document.getElementById("d42").style.color="blue";
}
