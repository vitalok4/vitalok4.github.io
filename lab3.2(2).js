function $() 

{

var elements = new Array();

for (var i = 0; i < arguments.length; i++)

{var element = arguments[i];

if (typeof element == 'string')

element = document.getElementById(element);

if (arguments.length == 1)

return element;

elements.push(element);

}

return elements;}





function f1()

{

X=parseFloat($('tx1').value);

N=parseFloat($('tx2').value);

S=1;

P1=1;

P2=1;

for(i=1; i<=N; i++)

{P1=P1*X;

P2=P2*i;

S=S+P1/P2; 

}      

$('tx3').value=S;

}