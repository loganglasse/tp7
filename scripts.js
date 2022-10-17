//javascript for tp7

// function to load a file from url "fromFile" into object identified by "whereTo"
function loadFileInto(fromFile, whereTo) {

	// creating a new XMLHttpRequest object
	ajax = new XMLHttpRequest();

	// defines the GET/POST method, source, and async value of the AJAX object
	ajax.open("GET", fromFile, true);

	// provides code to do something in response to the AJAX request
	ajax.onreadystatechange = function() {
			if ((this.readyState == 4) && (this.status == 200)) {
				document.querySelector(whereTo).innerHTML = this.responseText;
				
			} else if ((this.readyState == 4) && (this.status != 200)) {
				console.log("Error: " + this.responseText);
			}
		
	} // end ajax.onreadystatechange function

	// initiate request and wait for response
	ajax.send();

}


//new recipe object

function Recipe(recipeName, contributorName, imageURL, ingredientsURL, equipmentURL, directionsURL) {
  
  this.recipeName = recipeName;
  this.contributor = contributorName;
  this.imageURL = imageURL;
  this.ingredients = ingredientsURL;
  this.equipment = equipmentURL;
  this.directions = directionsURL;
  
  this.displayRecipe = function() {
    
    document.querySelector("#titleBanner h1").innerHTML = this.recipeName;
    document.querySelector("#contributor").innerHTML = this.contributor;
    document.querySelector("#titleBanner").style.backgroundImage = "url(" + this.imageURL + ")";
    loadFileInto(this.ingredients, "#ingredients ul");
    loadFileInto(this.equipment, "#equipment ul");
    loadFileInto(this.directions, "#directions ol");
    
  }
  
}


GarlicBread = new Recipe ("Garlic Bread", 
                          "logan", 
                          "https://images.unsplash.com/photo-1619535860434-ba1d8fa12536?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1496&q=80", 
                          "ingredients.html", 
                          "equipment.html", 
                          "directions.html")

PeachCrisp = new Recipe ("Peach Crisp", 
                          "zaire", 
                          "https://images.unsplash.com/photo-1570978561297-793391262fea?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80", 
                          "peachcrisp-ingredients.html", 
                          "peachcrisp-equipment.html", 
                          "peachcrisp-directions.html")

LemonPankoCrustedSalmon = new Recipe ("Lemon Panko Crusted Salmon", 
                          "samuel", 
                          "https://images.unsplash.com/photo-1519625149185-7626ff3a86bf?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80", 
                          "lemon-ingredients.html", 
                          "lemon-equipment.html", 
                          "lemon-directions.html")


window.onload = function() {
  
  document.querySelector("#firstRecipe").onclick = function(){
    GarlicBread.displayRecipe();
  }
  
  document.querySelector("#secondRecipe").onclick = function(){
    PeachCrisp.displayRecipe();
  }
    
  document.querySelector("#thirdRecipe").onclick = function(){
    LemonPankoCrustedSalmon.displayRecipe();
  }
  
} //end window.onload
