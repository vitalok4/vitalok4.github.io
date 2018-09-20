function $() 
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

function f4()
{ 
document.getElementById("T5").src="T3.png";
}

function f3()
{ 
document.getElementById("T5").src="T4.png";
}

function f2()
{ 
document.getElementById("T5").src="T2.png";
}

function f1()
{ 
document.getElementById("T5").src="T1.png";
}