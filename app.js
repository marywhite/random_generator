// global namespace
var APP = APP || {};

// // global variables
APP.ids = {
  classNames: ["Aaron", "Alicia", "Brian", "Casie", "Chelsea", "Clare", "Cody", "Eric", "Jeanne", "Kaitlin", "Kelly", "Luke", "Mary", "Michael", "Michelle", "Rom", "Steve", "Terry", "Tracy", "Vince"],
}

// global helpers
APP.randomNumber = function randomNumber(min, max) {
	return Math.floor(Math.random() * (1 + max - min) + min);
}


// Define the numberClassGroups constructor
var NumberClassGroups = function(numGroups, namesArray) {
	this.numGroups = numGroups,
	this.classNames = namesArray	
};

//set base group size and extras for number numberClassGroups
NumberClassGroups.prototype.organizeGroups = function (){
	this.baseGroupSize = Math.floor(this.classNames.length / this.numGroups),
	this.extras = Math.floor(this.classNames.length % this.numGroups);	
}

//shuffle classNames into new array
NumberClassGroups.prototype.shuffleClass = function (){
	var newList = this.classNames.slice(0);
	var randomi;
	var shuffledArray = [];
		while(newList.length > 0){
			randomi = APP.randomNumber( 0, newList.length-1);
			shuffledArray.push(newList[randomi]);
			newList.splice(randomi, 1);
		} this.shuffledArray = shuffledArray;
}

//create groups from shuffledClass
NumberClassGroups.prototype.generateGroups = function () {
	for (var i = 0; i < this.numGroups; i++){
		if (this.extras > 0){
			this["group"+(i+1)] = this.shuffledArray.splice(0, this.baseGroupSize+1);
			this.extras--;
		}else{
			this["group"+(i+1)] = this.shuffledArray.splice(0, this.baseGroupSize);
		}
	}
}


//Define the SizeClassGroups constructor
var SizeClassGroups = function(groupSize, classNames) {
	this.classNames = classNames,
	this.baseGroupSize = groupSize
};

SizeClassGroups.prototype = new NumberClassGroups();        
SizeClassGroups.prototype.constructor = SizeClassGroups;


//Set 
SizeClassGroups.prototype.getGroupNumber = function () {
	this.numGroups = Math.floor(this.classNames.length / this.baseGroupSize);
	this.extras = this.classNames.length - (this.numGroups * this.baseGroupSize);
}

function select() {
		$('.selected').removeClass('selected');
		$(this).addClass('selected');
	}


$(document).ready(function (){
	$(".groupButton").click(select);
	$(".sizeButton").click(select);

	$("#generate").click(function(){
		$(".container").remove();
		var selected = $(".selected")
		var classGroups;
		if ($(selected).is(".groupButton")){
			classGroups = new NumberClassGroups($(selected).text(), APP.ids.classNames);
			classGroups.organizeGroups();
		} else {
			classGroups = new SizeClassGroups($(selected).text(), APP.ids.classNames);
			classGroups.getGroupNumber();
		}
		

		classGroups.shuffleClass();
		classGroups.generateGroups();

		
		var nameId = 0;
		for ( var i = 0; i < classGroups.numGroups; i++){
			$(".listArea").append("<div class=container> <ul id ='group" + (i+1) + "'>Group "  + (i+1) + "</ul></div>");
			for (var j = 0; j < classGroups["group" + (i+1)].length; j++){
				nameId++;
				$("<li id='name" + nameId + "'>"  + classGroups["group" + (i+1)][j] + "</li>").appendTo("#group"+(i+1)).hide();
				$("#name"+nameId).delay(nameId * 500).slideDown("slow");
			}
		}
	});
});



