/*
  Mini-Activity:
  Create an object that describes your favorite movie/video game:
    -With key value pairs:
      title: <value>
      publisher: <value>/producer: <value>
      year: <value>,
      price: <value>/director: <value>
      isAvailable: <value>
*/

const favoriteMovie = {
  title: "The Hunger Games",
  director: "Francis Lawrence, Gary Ross",
  year: 2012,
  price: 57.98,
  isAvailable: true
};

console.log(favoriteMovie);


/* 
Mini-Activity 2:

      Add properties to our instructor object:
        age - 56
        gender - "Male"
        department - "Humanities"
        courses - array with the following items: "Philosophy 101","Humanities 201"
        isActive - true
        salary: 50000

      Log the instructor object in the console.
*/

const instructor = {};
instructor.name = "John John Rubas",
instructor.email = "john.rubas@gmail.com",
instructor.officeHours = ["Monday 10am-12pm", "Wednesday 1pm-3pm"],
instructor.officeLocation = "JFH Hall, Room 202wsop0"
instructor.age = 56;
instructor.gender = "Male";
instructor.department = "Humanities";
instructor.courses = ["Philosophy 101", "Humanities 201"];
instructor.isActive = true;
instructor.salary = 50000;

console.log(instructor);

/*

Create a constructor function able to receive 3 arguments

-It should be able to receive two strings and a number
-Using this keyword assign properties:
name, brand, price
-assign the parameters as values to each property.

Create 2 new objects using our constructor.

This constructor should be able to create laptop objects.

Log the 2 new laptop objects in the console.

*/

function Laptop(name, brand, price) {
  this.name = name;
  this.brand = brand;
  this.price = price;
}

const laptop1 = new Laptop("MacBook Pro", "Apple", 50000);
const laptop2 = new Laptop("XPS 13", "Dell", 35000);

console.log(laptop1);
console.log(laptop2);



/*
Mini-Activity 4:


        Create a constructor function able to receive 3 arguments
          -It should be able to receive two strings and a number
          -Using the this keyword assign properties:
            name, 
            address, 
            age,
            isGreeted: defaultValue false
            -assign the parameters as values to each property.

        Create 2 new objects using our constructor.

        This constructor should be able to create person objects.

        Log the 2 new person objects in the conso 
*/

function Person(name, address, age) {
  this.name = name;
  this.address = address;
  this.age = age;
  this.isGreeted = false;
}

const person1 = new Person("Joel John Clavecilla", "B4 L14 Retiro Street", 26);
const person2 = new Person("Jonnabelle Clavecilla", "B17 L29 Nevara Street", 23);

console.log(person1);
console.log(person2);














































