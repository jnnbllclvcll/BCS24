console.log("\nHello, Welcome to De La Salle University!\n")

function computeSupply(age, amtPerDay){
	max_age = 100;
	totalRounded = Math.round((max_age - age) * amtPerDay * 365);
	console.log(`You need to ${totalRounded} to last you until the ripe old age of ${max_age}. \n`);

	console.log('Age: ' + age)
	console.log('Amount consumed per day: ' + amtPerDay)
	console.log('Total amount consumed for the rest of life: ' + totalRounded + '\n')
}

computeSupply(29, 30)
computeSupply(3, 12)
computeSupply(7, 13.5)