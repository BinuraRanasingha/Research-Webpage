function myFunction() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
	x.className += " responsive";
  } else {
	x.className = "topnav";
  }
}

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












