//OBJECTS
/* 
    Objects are data types that allow us to store collection of key-value pairs.
    Can represent real-worl properties such as any objects

    syntax: object literal = {}
*/
// re-assign array items: array[index] = <value>

//re-assign object properties
/* videoGame.title = 'Final Fantasy X'
console.log(videoGame.title)

videoGame.year = 2001;
videoGame.publisher = 'Square Enix';
videoGame.price = 30;

console.log(videoGame.year, videoGame.publisher, videoGame.price);
*/
//object can not have primitive values but can also have array and other objects

let course = {
    title: 'Philosophy',
    description: 'Learn values in life',
    price: 5000,
    isActive: true,
    instructors: ['Nico Robles', 'Nicole Robles', 'Nikolai Robles']
};

console.log(course)
console.log(course.instructors) //Access the array
console.log(course.instructors[1]); //Show the element at index 1
course.instructors.pop() //deletes the chosen element. (chosen index is 1 based on previous log)
console.log(course) //prints all
course.instructors.push('Niku Robles'); //adds a new element named "Niku Robles" at the end of the array
console.log(course.instructors) //prints the instructors

let isPresent = course.instructors.includes('Nico Robles');
console.log(isPresent);

let instructor = {}
//if you re-assign value to a property that dne
// you are able to add a property wit hvalue in our object

instructor.name = 'Avin Robles'
console.log(instructor);

//How do you access an city in an address while inside a variable?
/* 
    console.log(name.address.street)
*/


//CONSTRUCTOR FUNCTION
/* 
    Constructor function: is a special type fo function that is used to create and initialize objects.
    Typically used in conjunction with 'new' keyword to create new instance of an object on a template
    or blueprint.

    instance of an object is a unique occurence of an object that is create from a constructor function
        - when is 'new' keyword used?
            = it creates a 'new object' and initializes it with the properties and methods defined in the
                constructor.

                = 'new object' is called "Instance of an object"
        
    create reusable function to create several objects with similar data structures or keys
    
    useful for creating multiple instances

    'this' is a keyword used in a constructor function that will aloow us to assign a new object's properties
        and associating with the values received from a constructor function's parameter.
        
    constructors are like blueprints or template to create our object
*/

function superhero(name, power, lvl){
    this.name = name;
    this.power = power;
    this.lvl = lvl;
}

let superhero1 = new superhero('Saitama', 'OnePunch', 300000)
console.log(superhero1);

//another again
let superhero2 = new superhero('Family', 'Hope', 1000000)
console.log(superhero2);


//OBJECT METHODS
/* 
    Method which is a property of an object

    Essence is still a function. However, it is now associated as an object

    To invokeor call the function, we have to access the property which contains our functions
*/

let person = {
    name: `Shady`,
    talk: function(){
        //When this keyword is used by a function within an object, it refers to the object where the function is
        //console.log(this)
        console.log(`Hello ${this.name}`)
    }
}
person.talk();

let person2 = {
    name: 'Jungkook',
    age: 26,
    address: {
        city: 'Austin',
        state: 'Texas',
        country: 'USA'
    },
    friends: ['Jin', 'V', 'Jimin'],
    introduce: function(){
        console.log(`Hello, my name is ${this.name}. I am ${this.age} and I live in ${this.address.city},n${this.address.state}, ${this.address.country}. My friends are ${this.friends}`)
    },
    greet: function(obj){
        console.log(obj);
        console.log(`Good day, ${obj.name}/1`)
    }
}

person2.introduce()
person2.greet(person)


//Example
function Person (name, address, age){
    this.name = name;
    this.address = address;
    this.age = age;
    this.isGreeted = false;
    this.greet = function(personToGreet){
        console.log(`Hello! I'm ${name}, nice to meet you ${personToGreet.name}`)
        personToGreet.isGreeted = true;
    }
}
let person3 = new Person('Jimin', 'New York', 25);
let person4 = new Person('Thonie', 'New York', 45);

console.log(person3)
console.log(person4)

person3.greet(person4);

let homiePokemon = {
    name: 'Pikachu',
    lvl: 3,
    health: 100,
    attach: 50,
    tackle: function(){
        console.log('This Pokemon tackled targetPokemon');
        console.log('targetPokemon`s health is now low.' );
    },
    faint: function(){
        console.log('Pokemon fainted!')
    }
}
console.log(homiePokemon)

//create an object constructor instead will help with this process
function Pokemon(name, lvl){
    this.name = name,
    this.lvl = lvl,
    this.health = 2 * lvl,
    this.attack = lvl,
    this.tackle = function(target){
        console.log(`${this.name} tackled ${target.name}`);
        console.log(`${target.name}'s health is now low`);
    this.faint = function(){
        console.log(`${target.name} fainted`);
    }
    }
}

//create new instances of the 'Pokemon' object with unique properties
let pikachu = new Pokemon('Pikachu', 16);
let snorlax = new Pokemon('Snorlax', 20);

pikachu.tackle(snorlax);