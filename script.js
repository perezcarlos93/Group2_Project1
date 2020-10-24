//api keys 

const spoonfulKey = "2d708aab5a194b67b9e93de543b36cd2";

const spoonfulurl = "https://api.spoonacular.com/recipes/random";

var urlspoonful = spoonfulurl + "?apiKey=" + spoonfulKey;

const traileraddictkey = ""

//YOUTUBE API Keys and vars

const youTubeKey = "AIzaSyBqfMWUPsMKhmjBYKsxo7LzqFn0QZo20U4";

const youTubeURL = "https://www.googleapis.com/youtube/v3";

var urlYouTube = youTubeURL + "?apiKey=" + youTubeKey;



// function recipe() {
  $("#recipeBtn").on("click", function recipe(){
  $.ajax({
    type:"GET",
    url: urlspoonful,
    data: {
      // id:$(this).val(),  //////////Replace 'val()' with the given divs value name ie value="recipe button"
    },
    success: function(result){
      appendRecipeData(result);
    },
    error: function(result){
      console.log("Error, Data not sent or recieved");
    }
  });
})

////////// function movie
// $("#movieBtn").on("click", function movie(){
//   $.ajax({
//     type:"GET",
//     url: urlYouTube,
//          success: function(result){
//     append.MovieData(result);
//   },
//     error: function(result){
//       console.log("Error, Movie Data not sent or recieved");
//     }
    
//   });
  
// })
// Function that spins the icon buttons - CP
$(".spin").hover(
  function(){$(this).addClass("fa-spin")},
  function(){$(this).removeClass("fa-spin")}
)
// Popover Function - CP
$(function(){
  $("[data-toggle='popover']").popover();
})
// Adding ingredients to PopOver button
function appendIngredientsData(response){
let popOver = $(".ingredients").attr('data-content').val();
console.log("popOver: " + popOver);

  $(".ingredients").on('click', function(){
    console.log(this.data-content);
  })

}


function appendRecipeData(response){
console.log(response)
var recipeDiv = $("#recipeResult").html("<div class='recipe'>");
var title = response.recipes[0].title;
var HeadOne = $("<h1>)").text("Your Recipe Tonight Is: " + title);
recipeDiv.append(HeadOne);

var instructions = response.recipes[0].instructions;
var pOne = $("<p>").text("Instructions: " + instructions);
  recipeDiv.append(pOne);
  
var imgrecipe = response.recipes[0].image;
  console.log(imgrecipe)
// var img = $('<img />')
// .attr('src', imgrecipe); 
// img.appendTo("<div class='recipe'>")
  
  var recipeimg =$("<img>");
  
  recipeimg.attr("src", imgrecipe);
  
            $("#images").html(recipeimg);
}  


///Youtube & Trailer Addict functions

function appendMovieData(response){
  console.log(response)
  var movieDiv = $("#movieResult").html("<div class='movie'>");
  
}




     
    

     
     

//     function appendData(data) {
//   var mainContainer = document.getElementById("myData");
//   for (var i = 0; i < data.length; i++) {
//     var div = document.createElement("div");
//     div.innerHTML = 'Name: ' + data[i].firstName + ' ' + data[i].lastName;
//     mainContainer.appendChild(div);
//   }
// }
                
     
                                