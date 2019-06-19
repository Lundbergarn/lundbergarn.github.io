$(document).ready(function () {
  // Add smooth scrolling to all links
  let upp = document.getElementById('upp');
  upp.addEventListener('click', function (event) {
    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== "") {
      // Prevent default anchor click behavior
      event.preventDefault();
      // Store hash
      let hash = this.hash;
      // Using jQuery's animate() method to add smooth page scroll
      // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
      $('html, body').animate({ scrollTop: $(hash).offset().top }, 800,
        function () {
          // Add hash (#) to URL when done scrolling (default click behavior)
          window.location.hash = hash;
        });
    } // End if
  });
});


// Select all links with hashes
$('a[href*="#"]')
  // Remove links that don't actually link to anything
  .not('[href="#"]')
  .not('[href="#0"]')
  .click(function (event) {
    // On-page links
    if (
      location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '')
      &&
      location.hostname == this.hostname
    ) {
      // Figure out element to scroll to
      let target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      // Does a scroll target exist?
      if (target.length) {
        // Only prevent default if animation is actually gonna happen
        event.preventDefault();
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 700, function () {
          // Callback after animation
          // Must change focus!
          let $target = $(target);
          $target.focus();
          if ($target.is(":focus")) { // Checking if the target was focused
            return false;
          } else {
            $target.attr('tabindex', '-1'); // Adding tabindex for elements not focusable
            $target.focus(); // Set focus again
          };
        });
      }
    }
  });


// Hide navbar on scroll if less then 739
const menu = document.getElementById("menu");

if ($(window).width() < 739) {
  let prevScrollpos = window.pageYOffset;
  window.onscroll = function () {
    let currentScrollPos = window.pageYOffset;
    if (prevScrollpos > currentScrollPos) {
      menu.style.top = "0";
    } else {
      menu.style.top = `-${menu.offsetHeight}px`;
      menu.style.transition = "all 0.3s ease-out";
    }
    prevScrollpos = currentScrollPos;
  }
}


//Hide watermark

// function hideImage() {
//   setTimeout(function () {
//     var image = document.getElementsByTagName("img");
//     image[image.length - 1].style.display = 'none';
//   }, 500);
// };
// hideImage();





