console.log("\nHello, Welcome to the De La Salle University!\n");

let fName = 'Jonnabelle';
let lName = 'Clavecilla';
let age = 23;
let hobbies = ['gaming', 'singing', 'reading', 'cooking', 'and sleeping'];
let homeAddress = {
	houseNumber: 'Block 17 Lot 29',
	street: 'Retiro Street',
	subdivision: 'Villa San Lorenzo',
	barangay: 'Brgy. Anabu II-E',
	city: 'Imus',
	province: 'Cavite',
	zipcode: '4103'

};


console.log(`Hi! I am ${fName} ${lName}. I am ${age} years old.`);
console.log(`I live in ${homeAddress.houseNumber} ${homeAddress.street} ${homeAddress.subdivision} ${homeAddress.barangay} ${homeAddress.city} ${homeAddress.province} ${homeAddress.zipcode}.`);
console.log(`My hobbies are ${hobbies.join(", ")}.\n`);
