document.addEventListener('DOMContentLoaded', function() {
    const portfolioCard = document.getElementById('portfolio-card');
    
    portfolioCard.addEventListener('click', function() {
      window.location.href = './portfolio.html';
    });
  });

document.addEventListener('DOMContentLoaded', function() {
  const portfolioCard = document.getElementById('about-me');
    
  portfolioCard.addEventListener('click', function() {
    window.location.href = './aboutme.html';
  });
});

document.addEventListener('DOMContentLoaded', function() {
  const portfolioCard = document.getElementById('contact-me');
    
  portfolioCard.addEventListener('click', function() {
    window.location.href = './contactme.html';
  });
});