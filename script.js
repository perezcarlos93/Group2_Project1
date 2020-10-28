//api keys 

const spoonfulKey = "92cbca1049cb4ffe946267e0ea9128d9";

const spoonfulurl = "https://api.spoonacular.com/recipes/random";

var urlspoonful = spoonfulurl + "?apiKey=" + spoonfulKey;


///IMDB API Keys and vars

const utellyKey ="b7c412f502mshbbc78eb664a4ee7p1c8f5fjsn8b018315a9c2";

const utellyURL = "https://utelly-tv-shows-and-movies-availability-v1.p.rapidapi.com/";

var  urlUtelly = utellyURL + "?apiKey=" + utellyKey;

///////////////////////// ARRAY OF MOVIES/////////////////////////////////////

var nowShowing = ["Indiana Jones", "Jurassic Park", "Star Wars", "Back to the Future", "Saving Private Ryan", "Goodwill Hunting", "Predator", "Terminator", 
                  "Return of the King", "Toy Story 3", "Avengers:Endgame", "Pulp Fiction", "The Hummingbird Project", "Beautiful Boy", "Game Night", "Zack and Miri Make a Porno", 
                  "Uncle Drew", "White Boy Rick", "Skyscraper", "Billionaire Boys Club", "Knives Out", "1917", "Ad Astra", "The Green Mile", "Cast Away", "Scarface", 
                  "The Hateful 8", "The Usual Suspects", "Resevior Dogs", "Goodfellas", "The Wolf of Wall Street", "The Departed", "Role Models", "Fight Club", "We Are Our Friends", 
                  "The Longest Yard", "Rounders", "Friday Night Lights", "The Blindside", "The Waterboy", "The Replacements", "Any Given Sunday", "Jerry Maguire", "Semi-Pro"] 




///////////////////RECIPE FUNCTION FOR SPOONFUL//////////////////////////////////
// function recipe() { ------Nicolai
  $("#recipeBtn").on("click", function recipe(){
  $.ajax({
    type:"GET",
    url: urlspoonful,
    data: {
      
    },
    success: function(result){
      appendRecipeData(result);
    },
    error: function(result){
      console.log("Error, Data not sent or recieved");
    }
  });
})

//remove html tags//

   function removeTags(str) {
      if ((str===null) || (str===''))
      return false;
      else
      str = str.toString();
      return str.replace( /(<([^>]+)>)/ig, '');
   }


//APPENDING THE RECIPE AJAX TO A DIV
function appendRecipeData(response){
console.log(response)
var recipeDiv = $("#recipeResult").html("<div class='recipe'>");
var title = response.recipes[0].title;
var HeadOne = $("<h1>").text("Your Recipe Tonight Is: " + title);
recipeDiv.append(HeadOne);

var instructions = response.recipes[0].instructions;
     var newinstructions = (removeTags(instructions));;

  
var pOne = $("<p>").text("Instructions: " + newinstructions);
  recipeDiv.append(pOne);
  
var imgrecipe = response.recipes[0].image;
  console.log(imgrecipe)
// var img = $('<img />')
// .attr('src', imgrecipe); 
// img.appendTo("<div class='recipe'>")
  
  var recipeimg =$("<img>");
  
  recipeimg.attr("src", imgrecipe);
  
            $("#images").html(recipeimg);

// --------------------------------------------
//   Ingredients Appended to HTML PopOver- CP
var ingredLength = response.recipes[0].extendedIngredients.length
// console.log(ingredLength)
var i;

    var ingredientArray = [];
    for(i=0; i< ingredLength; i++){
        var ingredients = response.recipes[0].extendedIngredients[i].original;
        console.log(ingredients)
        ingredientArray.push(ingredients)
    }
    console.log(ingredientArray)

    $(".ingredients").attr("data-content", ingredientArray)

}
  
  ///////////////////UTELLY FUNCTION ----NICOLAI////////////////////////////////////
  $("#movieBtn").on("click", function movie(){
  var item = nowShowing[Math.floor(Math.random() * nowShowing.length)];
var settings = {
	"async": true,
	"crossDomain": true,
	"url": "https://utelly-tv-shows-and-movies-availability-v1.p.rapidapi.com/lookup?term=" + item,
	"method": "GET",
	"headers": {
		"x-rapidapi-host": "utelly-tv-shows-and-movies-availability-v1.p.rapidapi.com",
		"x-rapidapi-key": "b7c412f502mshbbc78eb664a4ee7p1c8f5fjsn8b018315a9c2"
	},
  success: function(movieResult){
    appendMoviedata(movieResult,item);
  }
}

$.ajax(settings).done(function (response) {
	console.log(response);
});
    })

/////////////////APPENDING THE MOVIE ARRAY TO THE SITE/////////////////////////////
  
function appendMoviedata(movieResult,name){
  console.log(movieResult)
  var movieDiv = $("#movieResult").html("<div class='movie'>");
  var moviename = movieResult.results[0].name;
  console.log(moviename)
  var HeadUno = $("<h1>").text("Your Movie Tonight Is: " + name);
movieDiv.append(HeadUno);
  
  var imgmovie = movieResult.results[0].picture;
  console.log(imgmovie)
  
  var movieimg = $("<img>");
  
  movieimg.attr("src", imgmovie);
  
    $("#movieimg").html(movieimg);
  
    var wtw = movieResult.results[0].locations[0].url;
  
    var watch = $("<a href='"+ wtw+"'/>").text("Where to watch ");
movieDiv.append(watch);

  
  
}
    
  
// Popover Function - CP
// Necessary for Popover to work
$(function(){
  $("[data-toggle='popover']").popover();
})

  
  // Function that spins the icon buttons - CP///////////////////////////////////////////////////////////
$(".spin").hover(
  function(){$(this).addClass("fa-spin")},
  function(){$(this).removeClass("fa-spin")}
)




// JAVASCRIPT TO USE AND CLICK BOTH BUTTONS SIMULTANEOUSLY -NP/////////////////////////////
$(document).ready(function(){
  $("#eveningBtn").on("click",function(){
    $("#recipeBtn").click();
    $("#movieBtn").click();
  });
});





