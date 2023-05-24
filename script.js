document.addEventListener('DOMContentLoaded', function() {
  const portfolioCard = document.getElementById('portfolio-card');
  const aboutMeCard = document.getElementById('about-me');
  const contactMeCard = document.getElementById('contact-me');

  function redirectToPage(cardElement, pageUrl) {
    cardElement.addEventListener('click', function() {
      window.location.href = pageUrl;
    });
  }

  redirectToPage(portfolioCard, './portfolio.html');
  redirectToPage(aboutMeCard, './aboutme.html');
  redirectToPage(contactMeCard, './contactme.html');
});