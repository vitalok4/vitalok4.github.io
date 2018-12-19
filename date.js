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
return elements;
}
var date1=new Date();
var date2=new Date();

function f(x)
{
$('tx0').value=$('tx0').value+x;
}


function l()
{
var today=new Date();
var sessiy=new Date(2018,12,07);
var t=today.getTime()-sessiy.getTime();
$("tx0").value=t;
}

function d1(z)
{
var t=$('tx0').value;
t=parseInt(t);
if(z==1)
{date1.setDate(t);$('tx1').value=date1;}
else 
{date2.setDate(t);$('tx2').value=date2;}

$('tx0').value="";

}

function m1(z)
{
var t=$('tx0').value;
t=parseInt(t);
if(z==1)
{date1.setMonth(t);$('tx1').value=date1;}
else 
{date2.setMonth(t);$('tx2').value=date2;}

$('tx0').value="";

}

function y1(z)
{
var t=$('tx0').value;
t=parseInt(t);
if(z==1)
{date1.setYearh(t);$('tx1').value=date1;}
else 
{date2.setYear(t);$('tx2').value=date2;}

$('tx0').value="";

}

function k()
{
var t=date1.getTime()-date2.getTime();
$("tx0").value=t;
}

