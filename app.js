
$(document).ready(function (){

});

var classNames = ["Aaron", "Alicia", "Brian", "Casie", "Chelsea", "Clare", "Cody", "Eric", "Jeanne", "Kaitlin", "Kelly", "Luke", "Mary", "Michael", "Michelle", "Rom", "Steve", "Terry", "Tracy", "Vince"];


function randomNumber(min, max) {
	return Math.floor(Math.random() * (1 + max - min) + min);
}

function shuffleClass(){
	var randomi;
	var shuffledClass = [];
	while(classNames.length > 0){
		randomi = randomNumber( 0, classNames.length-1);
		shuffledClass.push(classNames[randomi]);
		classNames.splice(randomi, 1);
	}
	return shuffledClass;
}

function Button(size) {
	this.size = size;
}

var classGroups = {
	one: [],
	two: [],
	three: [],
	four: [],
	five: [],
	six: [],
	seven: [],
	eight: [],
	nine: [],
}

Button.prototype.generateGroups = function(){
	var baseGroup = Math.floor(20 / this.size);
	var extras = 20 % this.size;
	for (var i = 0; i < this.size; i++){
		if (extras > 0){
		this["group"+(i+1)] = crazyClass.splice(0, baseGroup);
		extras--;
		}else{
			this["group"+(i+1)] = crazyClass.splice(0, baseGroup-1);
		}
	}
}
var crazyClass = (shuffleClass());
var hi = new Button(9);
hi.generateGroups();
console.log(hi)


// Button.prototype.shuffleClass = function() {
// 	shuffledClass = [];
// 	while(classNames.length > 0){
// 		shuffledClass.push(classNames[randomNumber, classNames.length]);
// 		classNames.splice(5, 1);
// 	}
// };

