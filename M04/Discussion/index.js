// console.log('hi');
// [SECTIONS] Operators
/*
	Arithmetic Operators
		- Perform Calculations
			- addition (+)
			- subtraction (-)
			- multiplication (*)
			- division (/)
			- modulus (%)
			- exponentiation (**)
*/

function divideNum(num1, num2) {
	result = num1/num2;
	console.log(result);
	return result;
};

let quotientResult = divideNum(50,5);
console.log(`The result of the operation is ${quotientResult}`);


/*
	Assignment Operator
		- is used toassign value to a variable orproperty of an object
		- equal sign (=)

*/
let variable = 'initial value';
// Addition
let assignNumber = 8;

// long method
assignNumber = assignNumber +2
console.log(`The result of the addition assignment operator is ${assignNumber}`);
//addition assignment operator as shorthand
assignNumber += 2;
console.log(`The result of the addition assignment operator is ${assignNumber}`);

// subtraction (-=)/multiplication (*=)/division (/=)/modulus (%=) assignment operator
let assignResult = 4;
assignResult -= 2;
console.log(`The result of the subtractions assignment operator is ${assignResult}`);
assignResult *= 2;
console.log(`The result of the multiplication assignment operator is ${assignResult}`);
assignResult /= 3;
console.log(`The result of the division assignment operator is ${assignResult}`);

let assignResult1 = 4;
assignResult1 %= 3;
console.log(`The result of the modulus assignment operator is ${assignResult1}`);


// PEMDAS 
let mdas = 1 + 2 - 3 * 4 / 5;
console.log(mdas);
/*
	mdas = 1 + 2 - 3 * 4 / 5;
	mdas = 1 + 2 - 12 / 5;
	mdas = 1 + 2 - 2.4;
	mdas = 3 - 2.4;
	mdas = 0.60;
*/
// order of operations can be change by adding parentheses to the logic
let pemdas = 1 + (2 - 3) * (4 / 5);
console.log(`The result of the pemdas is ${pemdas}`);

/*
	by adding parentheses '()', the order of operation are changed by prioritizing operation inside the parentheses
	pemdas = 1 + (2 - 3) * (4 - 5);
	pemdas = 1 + (2 - 3) * 0.8;
	pemdas = 1 + (-1) * 0.8;
	pemdas = 1 + -0.8;
	pemdas = 0.19 or 0.2;
*/

// Increment operator is used to increased the value of variable by 1
//syntax: increment = increment + 1 => increment++
/*
	Two types of increment operators:
		- post increment (x++)
			- increases the value of the x after it has been evaluated

			x ++ (1)
			2 1 => 2 => 3

		- pre increment (++x)
			- increases the value of x before it is evaluated

			(1)++ x 
			    1 2 => 3 => 3
*/
let x = 2
console.log(x)

a = ++x
console.log(a)

b = x++
console.log(b)


// Decrement operator is used to decreased the value of variable by 1
//syntax: decrement = decrement - 1 => decrement--
/*
	Two types of decrement operators:
		- post decrement (x--)
			- decreases the value of the x after it has been evaluated

			x -- (1)
			2 1 => 1 => 1

		- pre decrement (--x)
			- decreases the value of x before it is evaluated

			(1)-- x 
			    1 2 => 1 => 1
*/
// The value of 'z' is decreases by a value of 1 before returning and storing it in a variable
let z = 3
// the value of `z` is at 3 before it was decremented
console.log(z);
let decrement = --z;
// the value of `z` was decrease reassigning the value to 2
console.log(`The result of pre-decrement is ${z}`);


decrement = z--;
console.log(`The result of post-decrement is ${z}`);


// Comparison Operator
/* 
	Comparison Operator
		- are used to compare the values of the left and right operands
		- return operands

			- Equality or Loose Equality (==)
			- Strict Equality (===)
			- Inequality
*/
/*
	Equality or Loose Equality Operator
		- is used tocompare two values for equality. The operator return true if the values are equal and false otherwise.
		- the equality performs type coercion, which means it converts the values being compared toa common type beforeperforming the comparison

*/

console.log(1 == 1); //true
console.log(1 == '1');//true - the string '1' is coerced to the number 1 before the comparison is made
console.log(2 == 1); //false
console.log(true == 1); //true - the boolean true is coerced to the number 1 before the comparison is made
console.log(null == undefined);//true - null and undefined are equal to each other in the context that they have no value


/* 
	Strict Equality 
		- is used tocompare two values for equality
		- the operator returns true if the values are of the same type and have the same value and false otherwise
		- strict equality does not perform type coercion which means the values being compared must be of the same type to return true

*/		

console.log(2 === 2);//true
console.log(2 === '2');//false - the string '2' is not the smae as the number 2
console.log(true === 1);//false  - theone is boolean and the other one is number
console.log(null === undefined);//false - nulland undefined are not the same type


// Note: As good practice we have touse strict equality operator instead of loose equality to avoid unexpected results due to type coercion

/*
	Type coercion
		- is the implicit conversion of values from one data type to another
		- this happens when operations are performe on different data types that would normally not be possibled and yield irregualr
		- values are automatically converted from one data type to another data type inorder to resolve operation
*/

let numA = '10';//numstring
let numB = 12; //number

//adding/concatenating as string and a number will result a string
let coercionResult = numA + numB;
console.log(typeof(coercionResult));

let numC = 16;
let numD = 14;

let nonCoercion = numC + numD;
console.log(typeof(nonCoercion));

//the boolean 'true' is associated with the value of 1
let numE = true + 1;
console.log(numE);

//the boolean 'false' is associated with the value of 0
let numF = false + 2;
console.log(numF);
console.log(typeof(numF));





































