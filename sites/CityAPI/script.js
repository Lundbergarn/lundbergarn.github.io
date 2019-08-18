var url = "https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json";
var allCitiesData = [];
fetch(url)
.then(function(response){
	return response.json();
})
.then(function(data){   
	allCitiesData = data; 
	return allCitiesData;
});


/////////////////////////
function firstValue(arr){
	return arr.map(function(val){
		return val.city;
	});
}




var allCities = [];

//Filtrera ord
function findMatches(wordToMatch, cities) {  
  return cities.filter(place => {
    const regex = new RegExp(wordToMatch, 'gi')
    return place.city.match(regex) || place.state.match(regex);
  });
}

function displayMatches() {
  const matchArray = findMatches(this.value, allCitiesData);
  console.log(matchArray);
  const html = matchArray.map(function(place) {
    const regex = new RegExp(this.value, 'gi');
    const cityName = place.city;
    const stateName = place.state;
    return `
        <p>${cityName}, ${stateName}</p>
    `;
  }).join("");
  suggestions.innerHTML = html;
}

const searchInput = document.querySelector('.search');
const suggestions = document.querySelector('#div1');

searchInput.addEventListener('keyup', displayMatches);





//Visa städer
var btn = document.querySelector("button");
var btnSort = document.querySelector("#button_sort");
var input = document.querySelector("input");

btn.addEventListener("click", function(){

	allCities = firstValue(allCitiesData);  // Get all the cities	

	  for(var i = 0; i < allCities.length; i++){
	  var para = document.createElement("p");
	  var node = document.createTextNode(allCities[i]);
	  para.appendChild(node);
	  var element = document.getElementById("div1");
	  element.appendChild(para);
	  };
});


// btnSort.addEventListener("click", function(){
//     $("p").remove();
// 	allCities = firstValue(allCitiesData);  // Get all the cities	

// 	allCities = allCities.filter(function(value){  //Get cities on specifik letter
// 		for(var i = 0; i<allCities.length; i++){
// 			return value[i] === input.value.toUpperCase();
// 		}
// 	});

// 	  for(var i = 0; i < allCities.length; i++){
// 	  var para = document.createElement("p");
// 	  var node = document.createTextNode(allCities[i]);
// 	  para.appendChild(node);
// 	  var element = document.getElementById("div2");
// 	  element.appendChild(para);
// 	  };
// });