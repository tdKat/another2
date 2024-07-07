
document.addEventListener('DOMContentLoaded', function() {
    const fortunes = [
      "A beautiful, smart, and loving person will be coming into your life.",
      "A dubious friend may be an enemy in camouflage.",
      "A faithful friend is a strong defense.",
      "A fresh start will put you on your way.",
      "A friend asks only for your time, not your money."
    ];
  
    function generateFortune() {
      const randomIndex = Math.floor(Math.random() * fortunes.length);
      return fortunes[randomIndex];
    }
  
    function displayFortune() {
      const fortuneText = generateFortune();
      const fortuneContainer = document.getElementById('fortune-text');
      fortuneContainer.textContent = fortuneText;
    }
  
    displayFortune();
  });
  