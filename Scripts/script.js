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
const navLinks = document.querySelectorAll(".navcontent a");
console.log(navLinks);

// Add click event listeners to the links
navLinks.forEach(link => {
	link.addEventListener("click", function(e) {
		e.preventDefault(); // Prevent the default link behavior

		const targetId = this.getAttribute("href").substring(1); // Get the target section's ID
		const targetSection = document.getElementById(targetId);

		if (targetSection) {
			targetSection.scrollIntoView({ behavior: "smooth" }); // Scroll to the target section smoothly
		}
	});
});
