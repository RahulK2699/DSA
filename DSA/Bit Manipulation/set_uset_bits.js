/*
given x and y, set x continues set bits and y continues unset bits

input x = 3 y = 2 => 11100
*/

function setBits(x, y) {

  return ((1 << x) - 1) << y;
}


/*
x = 3 => 111 =>   2**2 + 2**1 + 2**0 =  7 => 2**3 - 1  
nothing but setting 3 bits
1 << x => 2**x
left shift by y times means adding unset bits 

this is how  our answer will be ((1 << x) - 1) << y
*/