function myFunction() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
	x.className += " responsive";
  } else {
	x.className = "topnav";
  }
}

/*document.addEventListener("DOMContentLoaded", function() {
	// Get all section elements
	const sections = document.querySelectorAll(".section");
	
	
	// Add an event listener to the window's scroll event
	window.addEventListener("scroll", function() {
		let currentSection = "";

		sections.forEach(section => {
			const sectionTop = section.offsetTop - 100;
			if (window.scrollY >= sectionTop) {
				currentSection = section.id;
			}
		});

		// Remove any previously highlighted link
		document.querySelectorAll(".topnav a").forEach(link => {
			link.classList.remove("active");
		});

		// Highlight the current section's link
		//console.log(sections)
		// Highlight the current section's link if it exists
		const link = document.querySelector(`.topnav a[href="#${currentSection}"]`);
		console.log(link)
		if (link) {
			link.classList.add("active");
		}

	});
});*/

// Select all navigation links
//const navLinks = document.querySelectorAll(".navcontent a");


// Add click event listeners to the links
/*navLinks.forEach(link => {
	link.addEventListener("click", function(e) {
		e.preventDefault(); // Prevent the default link behavior

		const targetId = this.getAttribute("href").substring(1); // Get the target section's ID
		const targetSection = document.getElementById(targetId);

		if (targetSection) {
			targetSection.scrollIntoView({ behavior: "smooth" }); // Scroll to the target section smoothly
		}
	});
});*/

/*$(document).ready(function() {

  // Get the navigation bar element
  var navBar = $('.topnav');

  // Get all of the section elements
  var sections = $('section');

  // Add an event listener to the window scroll event
  $(window).scroll(function() {

    // Get the current scroll position
    var scrollY = $(window).scrollTop();

    // Loop through the section elements
    $.each(sections, function(index, section) {

      // Get the top position of the section element
      var sectionTop = $(section).offset().top;

      // If the scroll position is greater than or equal to the top position of the section element, then highlight the corresponding navigation bar item
      if (scrollY >= sectionTop) {
        navBar.find(`a[href="#${section.id}"]`).addClass('active');
      }

      // Otherwise, remove the active class from the corresponding navigation bar item
      else {
        navBar.find(`a[href="#${section.id}"]`).removeClass('active');
      }
    });
  });
});*/

// Get the navigation bar elements
//const navBarElements = document.querySelector('.topnav').querySelectorAll('a');

// Print the navigation bar elements to the console
/*navBarElements.forEach(element => {
  console.log(element);
});*/

let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('.website .topnav .navcontent a');

window.onscroll = () => {
	sections.forEach(sec => {
		let top = window.scrollY ;
		let offset = sec.offsetTop;
		let height = sec.offsetHeight;
		let id = sec.getAttribute('id');
		
		if (top >= offset && top < offset + height) {
			navLinks.forEach(links => {
				links.classList.remove('active');
				document.querySelector('.website .topnav .navcontent a[href*=' + id + ']').classList.add('active');
			});
		};
	});
};












