var t;
var b1=255;
var g1=55;
var r1=153;
function f()
{
var x1=document.getElementById('b11');
x1.style.left=(parseInt(x1.style.left)+70)+'px';
x1.style.down=(parseInt(x1.style.top)+50)+'px';
b1-=200;
str1='rgb('+b1+', '+g1+', '+r1+')';
x1.style.backgroundColor=str1;
}
function k()
{t=setInterval('f()',300);}
function g()
{
clearInterval(t);
}
