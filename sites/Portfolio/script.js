

var modal = document.getElementById('myModal');
var modalImg = document.getElementById("img01");
var captionText = document.getElementById("caption");



$("img").on("click", function(){
	modal.style.display = "block";
  modalImg.src = this.src;
});


var span = document.getElementsByClassName("close")[0];

span.onclick = function() { 
  modal.style.display = "none";
}


$(document).ready(function(){
  // Add smooth scrolling to all links
  var upp = document.getElementById('upp');

  upp.addEventListener('click', function(event) {

    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== "") {
      // Prevent default anchor click behavior
      event.preventDefault();

      // Store hash
      var hash = this.hash;

      // Using jQuery's animate() method to add smooth page scroll
      // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
      $('html, body').animate({scrollTop: $(hash).offset().top}, 800, 
        function(){

        // Add hash (#) to URL when done scrolling (default click behavior)
        window.location.hash = hash;
      });
    } // End if
  });
});



// Image in on scroll

function debounce(func, wait = 10, immediate = true) {
  var timeout;
  return function() {
    var context = this, args = arguments;
    var later = function() {
      timeout = null;
      if (!immediate) func.apply(context, args);
    };
    var callNow = immediate && !timeout;
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
    if (callNow) func.apply(context, args);
  };
};


const sliderImages = document.querySelectorAll('.slide-in');

function checkSlide() {
  sliderImages.forEach(sliderImage => {
        // half way through the image
        const slideInAt = (window.scrollY + window.innerHeight) - sliderImage.height / 2;
        // bottom of the image
        const imageBottom = sliderImage.offsetTop + sliderImage.height;
        const isHalfShown = slideInAt > sliderImage.offsetTop;
        const isNotScrolledPast = window.scrollY < imageBottom;
        if (isHalfShown && isNotScrolledPast) {
          sliderImage.classList.add('active');
        } else {
          sliderImage.classList.remove('active');
        }
      });
}


$(document).ready(debounce(checkSlide));
window.addEventListener('scroll', debounce(checkSlide));
