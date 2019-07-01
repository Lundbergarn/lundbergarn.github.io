// Cache selectors
var lastId,
  topMenu = $("#mainNav"),
  topMenuHeight = topMenu.outerHeight() + 1,
  // All list items
  menuItems = topMenu.find("a"),
  // Anchors corresponding to menu items
  scrollItems = menuItems.map(function () {
    var item = $($(this).attr("href"));
    if (item.length) { return item; }
  });

// Bind click handler to menu items
// so we can get a fancy scroll animation
menuItems.click(function (e) {
  var href = $(this).attr("href"),
    offsetTop = href === "#" ? 0 : $(href).offset().top - topMenuHeight - 50;
  $('html, body').stop().animate({
    scrollTop: offsetTop
  }, 850);
  e.preventDefault();
});

// Bind to scroll
$(window).scroll(function () {
  // Get container scroll position
  var fromTop = $(this).scrollTop() + topMenuHeight;

  // Get id of current scroll item
  var cur = scrollItems.map(function () {
    if ($(this).offset().top - 100 < fromTop)
      return this;
  });
  // Get the id of the current element
  cur = cur[cur.length - 1];
  var id = cur && cur.length ? cur[0].id : "";

  if (lastId !== id) {
    lastId = id;
    // Set/remove active class
    menuItems
      .parent().removeClass("active")
      .end().filter("[href=#" + id + "]").parent().addClass("active");
  }
});

const navBar = document.getElementById('Nav');

changeNavBackground = () => {
  if (navBar) {
    let scrollValue = window.pageYOffset;
    if (scrollValue > 0) {
      navBar.style.backgroundColor = "rgb(34,34,34)";
    } else {
      navBar.style.backgroundColor = "transparent";
    }
  }
};

window.addEventListener('scroll', debounce(changeNavBackground));





// Image in on scroll
function debounce(func, wait = 10, immediate = true) {
  var timeout;
  return function () {
    var context = this, args = arguments;
    var later = function () {
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

document.getElementById('about_me').addEventListener('click', function (e) {
  // Get the position of target <br />
  const position = $("#about").offset().top - topMenuHeight - 99;
  // use jquery magic to get there ;) <br />
  $("HTML, BODY").animate({ scrollTop: position }, 1000);
})

