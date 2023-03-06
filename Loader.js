let loader = document.querySelector('.loader'); 

window.addEventListener('load', function() {
    loader.style.display='none';
    document.querySelector('.about-me__picture--mask').classList.add('animate__profile');
    document.querySelector('.about-me__info-title').classList.add('fade_up-title');
    document.querySelector('.about-me__info--para').classList.add('fade_up--para');
    document.querySelector('.about-me_links').classList.add('fade_up_links');
    document.querySelector('.about-me__img').classList.add('fade_in__img');
    document.querySelector('#remove').classList.remove('loading');
});

// Store the original page title
var originalTitle = document.title;

// Set a timer variable
var timer;

// Listen for the visibilitychange event
document.addEventListener("visibilitychange", function() {
  // Check if the page is hidden (i.e., user has switched tabs)
  if (document.hidden) {
    // Start a timer that updates the page title every 2 seconds
    timer = setInterval(function() {
      document.title = (document.title == originalTitle) ? "Future Employee Here! 🖐️" : originalTitle;
    }, 2000);
  } else {
    // Clear the timer and restore the original page title
    clearInterval(timer);
    document.title = originalTitle;
  }
});

