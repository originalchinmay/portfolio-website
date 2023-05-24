document.addEventListener('DOMContentLoaded', function() {
    const portfolioCard = document.getElementById('portfolio-card');
    
    portfolioCard.addEventListener('click', function() {
      window.location.href = './portfolio.html';
    });
  });