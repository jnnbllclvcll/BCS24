/* 
	Mini-Activity:
	Create a function which will determine the color of shirt to wear depending on the day the user inputs. +90 points

				Monday - Black
				Tuesday - Green
				Wednesday - Yellow
				Thursday - Red
				Friday - Violet
				Saturday - Blue
				Sunday - White

			Log a message on an alert window:
				"Today is <DayToday>, Wear <ColorOfTheDay>"
			If the day input is out of range, log a message on an alert window:
				"Invalid Input. Enter a valid day of the week."

			Stretch Goal: +10 points
			Check if the argument passed is a string:
				-Log an alert if it is not:
					"Invalid Input. Please input a string."
			Research and use .toLowerCase(), so a user can input in lowercase.

			If you're done, send a screenshot your code and output and post it in our discussion
*/


function shirtColor(dayToday){
	let colorOfTheDay = undefined;
	if (typeof dayToday === "string"){
		switch (dayToday.toLowerCase()){
			case 'monday':
				console.log(`Today is ${dayToday}, Wear Black.`);
			break;
			case 'tuesday':
				console.log(`Today is ${dayToday}, Wear Green.`);
			break;
			case 'wednesday':
				console.log(`Today is ${dayToday}, Wear Yellow.`);
			break;
			case 'thursday':
				console.log(`Today is ${dayToday}, Wear Red.`);
			break;
			case 'friday':
				console.log(`Today is ${dayToday}, Wear Violet.`);
			break;
			case 'saturday':
				console.log(`Today is ${dayToday}, Wear Blue.`);
			break;
			case 'sunday':
				console.log(`Today is ${dayToday}, Wear White.`);
			break;
			default:
				console.log('Invalid Input. Enter a valid day of the week.');
			break;
		}

	} else {
		console.log("Invalid Input. Please input a string.");
	}
	
}

shirtColor('Friday');
shirtColor('Sunday');
shirtColor('Wednesday');



















