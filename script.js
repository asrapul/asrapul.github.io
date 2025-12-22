// Scroll Animation untuk elements
document.addEventListener('DOMContentLoaded', function() {
	// Observer untuk fade-in on scroll
	const observerOptions = {
		threshold: 0.1,
		rootMargin: '0px 0px -50px 0px'
	};

	const observer = new IntersectionObserver(function(entries) {
		entries.forEach(entry => {
			if (entry.isIntersecting) {
				entry.target.style.animation = getAnimationForElement(entry.target);
				observer.unobserve(entry.target);
			}
		});
	}, observerOptions);

	// Observe all skill, project, dan panel elements
	document.querySelectorAll('.skill, .project, .panel').forEach(el => {
		observer.observe(el);
	});
});

function getAnimationForElement(el) {
	if (el.classList.contains('skill')) {
		return 'fadeInUp 0.8s ease-out forwards';
	} else if (el.classList.contains('project')) {
		return 'fadeInUp 1s ease-out forwards';
	}
	return 'fadeInUp 0.6s ease-out forwards';
}

// Smooth scroll untuk nav links
document.querySelectorAll('.nav a').forEach(link => {
	link.addEventListener('click', function(e) {
		const href = this.getAttribute('href');
		if (href.startsWith('#')) {
			e.preventDefault();
			const target = document.querySelector(href);
			if (target) {
				target.scrollIntoView({
					behavior: 'smooth',
					block: 'start'
				});
			}
		}
	});
});

// Add hover glow effect ke project cards
document.querySelectorAll('.project').forEach(project => {
	project.addEventListener('mouseenter', function() {
		this.style.transition = 'all 0.3s ease';
	});
});

// Parallax effect pada hero section
window.addEventListener('scroll', function() {
	const hero = document.querySelector('.hero');
	if (hero) {
		const scrollPosition = window.pageYOffset;
		hero.style.backgroundPosition = `0px ${scrollPosition * 0.5}px`;
	}
});

// Add stagger animation delay ke skill cards
const skills = document.querySelectorAll('.skill');
skills.forEach((skill, index) => {
	skill.style.animationDelay = `${index * 0.1}s`;
});

// Add stagger animation delay ke project cards
const projects = document.querySelectorAll('.project');
projects.forEach((project, index) => {
	project.style.animationDelay = `${index * 0.1}s`;
});

// Form handling
document.addEventListener('DOMContentLoaded', function() {
	const contactForm = document.querySelector('.contact-form');
	if (contactForm) {
		contactForm.addEventListener('submit', function(e) {
			// Form handling bisa disesuaikan dengan backend
			console.log('Form submitted');
		});
	}
});

// Add dark mode toggle (opsional)
const darkModeToggle = () => {
	const isDarkMode = localStorage.getItem('darkMode') === 'true';
	if (isDarkMode) {
		document.body.classList.add('dark-mode');
	}
};

// Load dark mode preference on page load
darkModeToggle();

console.log('Portfolio script loaded successfully!');
