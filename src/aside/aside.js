document.addEventListener('scroll', function() {
  const sections = document.querySelectorAll('section:not(section section)');
  const navLinks = document.querySelectorAll('nav a');

  let currentSection = '';
  const scrollPosition = window.scrollY + 100; // Магическое число для отступа уууууу

  if (window.scrollY < 100) {
    currentSection = sections[0].getAttribute('id');
  } else {
    sections.forEach(section => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.clientHeight;

      if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
        currentSection = section.getAttribute('id');
      }
    });
  }

  navLinks.forEach(link => {
    link.classList.remove('active');
    if (link.getAttribute('href') === `#${currentSection}`) {
      link.classList.add('active');
    }
  });
});