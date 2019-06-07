// Array of objects. Each object is an ingredient with properties for Name, Grams per teaspoon, and Sub-type of ingredient

let masterArray = [
	{"ingredient":"Almond Paste","grams":5.396},
	{"ingredient":"Almonds, Sliced","grams":2.958},
	{"ingredient":"Almonds, Slivered","grams":1.792},
	{"ingredient":"Almonds, Whole","grams":2.375},
	{"ingredient":"Apples, Dried and Diced","grams":1.771},
	{"ingredient":"Apples, Peeled and Sliced","grams":2.354},
	{"ingredient":"Apricots, Dried and Diced","grams":2.667},
	{"ingredient":"Baking Powder","grams":4.000},
	{"ingredient":"Baking Soda","grams":6.000},
	{"ingredient":"Bananas","grams":4.729},
	{"ingredient":"Barley","grams":4.438},
	{"ingredient":"Barley Flakes","grams":1.917},
	{"ingredient":"Bell Peppers, Diced","grams":2.958},
	{"ingredient":"Berries","grams":2.958},
	{"ingredient":"Blueberries, Dried","grams":3.250},
	{"ingredient":"Blueberries, Fresh","grams":3.542},
	{"ingredient":"Bread Crumbs, White","grams":2.333},
	{"ingredient":"Bread Crumbs, Panko","grams":1.042},
	{"ingredient":"Buckwheat","grams":3.542},
	{"ingredient":"Bulgur","grams":3.167},
	{"ingredient":"Butter","grams":4.708},
	{"ingredient":"Buttermilk","grams":4.667},
	{"ingredient":"Caraway Seeds","grams":3.000},
	{"ingredient":"Carrots, Grated","grams":2.063},
	{"ingredient":"Carrots, Puréed","grams":5.333},
	{"ingredient":"Carrots, Diced","grams":2.958},
	{"ingredient":"Cashews, Chopped","grams":2.354},
	{"ingredient":"Cashews, Whole","grams":2.354},
	{"ingredient":"Celery, Diced","grams":2.958},
	{"ingredient":"Cheese, Grated","grams":2.354},
	{"ingredient":"Cheese, Feta","grams":2.354},
	{"ingredient":"Cheese, Ricotta","grams":4.729},
	{"ingredient":"Cheese, Parmesan (Grated)","grams":2.083},
	{"ingredient":"Cherries, Dried","grams":2.958},
	{"ingredient":"Cherries, Frozen","grams":2.354},
	{"ingredient":"Chives","grams":0.875},
	{"ingredient":"Chocolate Chips","grams":3.542},
	{"ingredient":"Citrus Peel, Candied","grams":3.542},
	{"ingredient":"Cocoa Powder","grams":1.750},
	{"ingredient":"Coconut, (Shredded/Sweetened)","grams":1.771},
	{"ingredient":"Coconut, (Shredded/Unsweetened)","grams":2.354},
	{"ingredient":"Coconut, Large Flakes","grams":1.250},
	{"ingredient":"Cookie Crumbs","grams":1.771},
	{"ingredient":"Corn Syrup","grams":6.500},
	{"ingredient":"Cornmeal, Coarse","grams":2.875},
	{"ingredient":"Cornmeal, Cereal Grade","grams":3.250},
	{"ingredient":"Cornstarch","grams":2.333},
	{"ingredient":"Cranberries, Dried","grams":2.375},
	{"ingredient":"Cranberries, (Fresh/Frozen)","grams":2.063},
	{"ingredient":"Cream","grams":4.729},
	{"ingredient":"Cream Cheese","grams":4.729},
	{"ingredient":"Currants","grams":2.958},
	{"ingredient":"Dates, Chopped","grams":3.104},
	{"ingredient":"Egg","grams":49.000},
	{"ingredient":"Egg Whites, Fresh","grams":35.000},
	{"ingredient":"Egg Whites, Dry","grams":1.833},
	{"ingredient":"Egg Yolks","grams":14.000},
	{"ingredient":"Espresso Powder","grams":2.333},
	{"ingredient":"Figs, (Dried/Chopped)","grams":3.104},
	{"ingredient":"Flax Meal","grams":2.083},
	{"ingredient":"Flaxseed","grams":2.917},
	{"ingredient":"Garlic, Per Head","grams":113.000},
	{"ingredient":"Garlic, Minced","grams":4.667},
	{"ingredient":"Garlic, (Peeled/Sliced)","grams":3.104},
	{"ingredient":"Ginger, Crystallized","grams":4.000},
	{"ingredient":"Ginger, Fresh, Sliced","grams":4.750},
	{"ingredient":"Graham Cracker Crumbs, Boxed","grams":2.063},
	{"ingredient":"Graham Crackers, Crushed","grams":2.958},
	{"ingredient":"Grape Nuts","grams":2.375},
	{"ingredient":"Hazelnut Spread","grams":6.667},
	{"ingredient":"Hazelnuts, Whole","grams":2.958},
	{"ingredient":"Honey","grams":7.083},
	{"ingredient":"Jam","grams":6.438},
	{"ingredient":"Lard","grams":4.708},
	{"ingredient":"Leeks, Diced","grams":1.917},
	{"ingredient":"Macadamia Nuts, Whole","grams":3.104},
	{"ingredient":"Malt Syrup","grams":7.167},
	{"ingredient":"Malted Milk Powder","grams":2.917},
	{"ingredient":"Maple Sugar","grams":3.250},
	{"ingredient":"Maple Syrup","grams":6.500},
	{"ingredient":"Marshmallow Cream","grams":1.771},
	{"ingredient":"Marshmallow Fluff","grams":2.667},
	{"ingredient":"Marshmallows, Mini","grams":0.896},
	{"ingredient":"Mayonnaise","grams":4.708},
	{"ingredient":"Milk, Evaporated","grams":5.333},
	{"ingredient":"Milk, Whole","grams":4.729},
	{"ingredient":"Milk, Dry","grams":1.750},
	{"ingredient":"Milk, Sweetened Condensed","grams":6.500},
	{"ingredient":"Millet","grams":4.292},
	{"ingredient":"Molasses","grams":7.083},
	{"ingredient":"Mushrooms, Sliced","grams":1.625},
	{"ingredient":"Oat Bran","grams":2.208},
	{"ingredient":"Oats, Rolled","grams":2.063},
	{"ingredient":"Oats, Quick Cooking","grams":1.854},
	{"ingredient":"Oats, (Steel Cut/Raw)","grams":4.125},
	{"ingredient":"Oats, (Steel Cut/Cooked)","grams":5.313},
	{"ingredient":"Oil","grams":4.125},
	{"ingredient":"Olives, Sliced","grams":2.958},
	{"ingredient":"Onion, Diced","grams":2.958},
	{"ingredient":"Peaches, (Peeled/Diced)","grams":3.542},
	{"ingredient":"Peanut Butter","grams":5.625},
	{"ingredient":"Peanuts","grams":2.958},
	{"ingredient":"Pears, (Peeled/Diced)","grams":3.396},
	{"ingredient":"Pecans, Chopped","grams":2.354},
	{"ingredient":"Persimmon Pulp","grams":5.021},
	{"ingredient":"Pesto","grams":4.667},
	{"ingredient":"Pine Nuts","grams":2.958},
	{"ingredient":"Pineapple, Diced","grams":3.542},
	{"ingredient":"Pistachio Paste","grams":6.500},
	{"ingredient":"Pistachios","grams":2.500},
	{"ingredient":"Polenta","grams":3.396},
	{"ingredient":"Popcorn, Popped","grams":0.109},
	{"ingredient":"Poppy Seeds","grams":3.000},
	{"ingredient":"Potatoes, Mashed","grams":4.438},
	{"ingredient":"Praline Paste","grams":6.500},
	{"ingredient":"Pumpkin, Canned","grams":4.729},
	{"ingredient":"Quinoa, Dry","grams":3.688},
	{"ingredient":"Quinoa, Cooked","grams":3.833},
	{"ingredient":"Raisins, Loose","grams":3.104},
	{"ingredient":"Raisins, Packed","grams":3.542},
	{"ingredient":"Raspberries","grams":2.500},
	{"ingredient":"Rhubarb, Diced","grams":2.500},
	{"ingredient":"Rice, Cooked","grams":3.542},
	{"ingredient":"Rice, Dry","grams":4.125},
	{"ingredient":"Rice Krispies","grams":0.583},
	{"ingredient":"Rye Flakes","grams":1.333},
	{"ingredient":"Sesame Seeds","grams":2.958},
	{"ingredient":"Shallots, Sliced","grams":3.250},
	{"ingredient":"Shortening","grams":3.833},
	{"ingredient":"Sour Cream","grams":4.729},
	{"ingredient":"Splenda","grams":0.521},
	{"ingredient":"Strawberries, Sliced","grams":3.479},
	{"ingredient":"Sugar, Granulated","grams":4.167},
	{"ingredient":"Sugar, Powdered","grams":2.365},
	{"ingredient":"Sugar, Brown","grams":4.438},
	{"ingredient":"Sugar, Demerara","grams":4.583},
	{"ingredient":"Sundried Tomatoes, Dry","grams":3.542},
	{"ingredient":"Sunflower Seeds","grams":2.917},
	{"ingredient":"Tahini Paste","grams":5.333},
	{"ingredient":"Tapioca","grams":3.500},
	{"ingredient":"Toffee Bits","grams":3.250},
	{"ingredient":"Toffee Chunks","grams":3.250},
	{"ingredient":"Walnuts, Whole","grams":2.667},
	{"ingredient":"Walnuts, Chopped","grams":2.354},
	{"ingredient":"Water","grams":4.656},
	{"ingredient":"Wheat Berries","grams":3.833},
	{"ingredient":"Wheat bran","grams":1.333},
	{"ingredient":"Wheat Flakes","grams":2.333},
	{"ingredient":"Wheat germ","grams":2.333},
	{"ingredient":"Yeast, Instant","grams":3.111},
	{"ingredient":"Yogurt","grams":4.729},
	{"ingredient":"Zucchini, Shredded","grams":3.333}
];

// Array of objects holding volume units and their respective multipliers

let unitArray = [

{"unit":"Teaspoons", "multiplier":"1"},
{"unit":"Tablespoons", "multiplier":"3"},
{"unit":"Cups", "multiplier":"48"},
{"unit":"Pints", "multiplier":"96"},
{"unit":"Quarts", "multiplier":"192"},
{"unit":"Gallons", "multiplier":"384"}

];

// Binds select element in html to variable to contain all ingredients as objects.

let ingList = document.getElementById("ingredientDropdown");

// Populates ingList select element with the names of each ingredient in the master array

masterArray.forEach(function(item){
ingOption = document.createElement("OPTION");
ingList.appendChild(ingOption);
ingOption.innerHTML = item.ingredient;
});

// Binds select element in html to contain dropdown selection of measuring units

let unitCount = document.getElementById("unitQuantity");



// PLACEHOLDER THING

let unitList = document.getElementById("unitDropdown");

// Populates unitList select element with each volume unit of measurement

unitArray.forEach(function(item){
unitOption = document.createElement("OPTION");
unitList.appendChild(unitOption);
unitOption.innerHTML = item.unit;
});


// Dynamically displays the grams per teaspoon of each ingredient as it is selected from the dropdown



let ingNumber = 0;
let unitNumber = 0;
let ingWeight = document.getElementById("totalWeight");
ingWeight.innerHTML = "0"

function reset(){
	let ingNumber = 0;
let unitNumber = 0;
let ingWeight = document.getElementById("totalWeight");
ingWeight.innerHTML = "0"

}

// function boxUpdate(){
// let currentIng = ingList.selectedIndex;
// ingNumber = masterArray[currentIng].grams;
// }

// function unitUpdate(){
// let currentUnit = unitList.selectedIndex;
// unitNumber = unitArray[currentUnit].multiplier;
// }

function calcGrams(){

let currentIng = ingList.selectedIndex;
ingNumber = masterArray[currentIng - 1].grams;


let currentUnit = unitList.selectedIndex;
unitNumber = unitArray[currentUnit - 1].multiplier;


let ingWeight = document.getElementById("totalWeight");
ingWeight.innerHTML = Math.round(ingNumber * unitNumber * unitCount.value);

console.log(ingNumber);
console.log(unitNumber);
console.log(ingWeight);
}



// Function for possible future functionality of adding new ingredients to the master array

// function Ing(item, weight){
// 	this.ingredient = item;
// 	this.grams = weight;
// 	thi ;
// 	masterArray.push(this);
// }




// function boxUpdate(){
// ingNumber = document.getElementById("foodIndex");
// let currentOption = ingList.selectedIndex;
// ingNumber.innerHTML = masterArray[currentOption].grams;
// }

// function unitUpdate(){
// unitNumber = document.getElementById("unitIndex");
// let currentOption = unitList.selectedIndex;
// unitNumber.innerHTML = unitArray[currentOption].multiplier;
// }

// function calcGrams(){
// let ingWeight = document.getElementById("totalWeight");
// ingWeight.innerHTML = Math.round(ingNumber.innerHTML * unitNumber.innerHTML * unitCount.value) + " grams";
// }
