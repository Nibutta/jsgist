function factorial (x) {			 // Function declaration
   if (x <= 1) return 1; 			// Check the condition for the end of the 												calculation 
   return x * factorial (x-1);		 // Call the same function with a reduced by 1 										argument }



// Факториал через цикл 

function testFactorial(a) {
    var x=1;
    while(a){
        x *= a--;
    }
    
    return x;
}