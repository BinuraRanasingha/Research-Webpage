/*let sections1 = document.querySelectorAll('div');
let navLinks1 = document.querySelectorAll('.website .topnav .navcontent .dropdown .dropdown-content a');

window.onscroll = () => {
	sections1.forEach(sec1 => {
		let top1 = window.scrollY ;
		let offset1 = sec1.offsetTop;
		let height1 = sec1.offsetHeight;
		let id1 = sec1.getAttribute('id');
		
		if (top >= offset1 && top < offset1 + height1) {
			navLinks.forEach(links1 => {
				links1.classList.remove('active');
				document.querySelector('.website .topnav .navcontent .dropdown .dropdown-content a[href*=' + id + ']').classList.add('active');
			});
		};
	});
};*/