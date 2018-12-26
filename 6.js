function Drob(a,b)
{
this.a=a;
this.b=b;

this.ches=_Drobches;
this.znam=_Drobznam;
this.mul=_Drobmul;
this.toString=_DrobtoString;
}
function _Drobches()
{
return(this.a)?this.a:0;
}
function _Drobznam()
{
return(this.b)?this.b:1;
}
function _Drobmul
{}

function _DrobtoString()
{
str="/";
return this.ches()+str+this.znam();
}
var x1=new Drob(1,2);
var x2=new Drob(1,0);
var x3=new Drob(0,1);
document.write(x1+'<br>'+x2+'<br>' +x3+'<br>');