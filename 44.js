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



function f(x)

{
		
var str = "0123456789.";
		
var mass = x.split('.');

f1="True";

if(mass.length!=2)

f1="False";


for(i=0; i<x.length;i++)

{

tt=x.charAt(i);

if(str.indexOf(tt)==-1)

f1="False";

}
//mass[0]

if(parseInt(mass[0])>24)

f1="False";

//mass[1]

if(parseInt(mass[1])>60)

f1="False";
				
return f1;
		
}

