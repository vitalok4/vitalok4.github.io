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



function f(x)
	
		{
		
			var st = "0123456789.";
		
			var mass = x.split('.');
		
			f = "False";
		
			if(mass.length==2)
			
				f="Okey";
		
				return f;
		

}