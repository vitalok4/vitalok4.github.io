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

function f7()
{
N=parseInt($('tx11').value);
F1=1;
$('tx44').value=F1+' ';
F2=1;
$('tx44').value=$('tx44').value+F2+' ';

for(i=3;i<=N;i++)
{
F=F2+F1;
$('tx44').value=$('tx44').value+F+' ';
F1=F2;
F2=F;
}

}