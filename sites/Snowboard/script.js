//Get request
let url, countries, countriesName;
url = "https://restcountries.eu/rest/v1/";
countries = [];
countriesName = [];

fetch(url)
.then(function(response){
  return response.json();
})
.then(function(data){   
  countries = data; 
  return countries;
});

//Sort first value
function firstValue(arr){
  return arr.map(function(val){
    return val.name;
  });
}
//Filter words
function findMatches(wordToMatch, countries) { 
  return countries.filter(country => {
    const regex = new RegExp(wordToMatch, 'gi')
    return country.match(regex);
  });
}
// Display result
function displayCountriesResult(){
  countriesName = firstValue(countries); 
  const searchVal = document.getElementById('search_value').value;
  let match = findMatches(searchVal, countriesName);
  if(match.length !== 0){
    alert(match);
  }
  else{
    alert("Inga länder hittades.")
  }
}

const searchBtn = document.getElementById('search');
const search = document.getElementById('search_value');

searchBtn.addEventListener("click", function(){
  displayCountriesResult();
});
 
search.addEventListener('keypress', function (e) {
    var key = e.which || e.keyCode;
    if (key === 13) {
      displayCountriesResult();
    }
});

//Hamburger menu
const navbar = document.getElementById('navbar');
const burger = document.getElementById('burger-container');
burger.addEventListener("click", function(){
  burger.classList.toggle("open");
  navbar.classList.toggle("active");
});


// SWIPER
// Controll viewport width
var intFrameWidth = window.innerWidth;
  if(intFrameWidth <= 500){
    var appendNumber = 8;
    var prependNumber = 1;
      var swiper = new Swiper('.swiper-container', {
      slidesPerView: 1,
      centeredSlides: true,
      spaceBetween: 30,
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
    });
  }else if(intFrameWidth <= 800) {
    var appendNumber = 8;
    var prependNumber = 1;
    var swiper = new Swiper('.swiper-container', {
      slidesPerView: 2,
      centeredSlides: true,
      spaceBetween: 30,
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
    });

  }else{
      var appendNumber = 8;
      var prependNumber = 1;
      var swiper = new Swiper('.swiper-container', {
      slidesPerView: 3,
      centeredSlides: true,
      spaceBetween: 30,
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
    });
  }