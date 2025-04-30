// 1. Smooth scroll pour les ancres
document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener('click', e => {
      e.preventDefault();
      const target = document.querySelector(link.getAttribute('href'));
      if (target) {
        target.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });
  
  // 2. Bouton retour en haut
  const backTop = document.getElementById('back-to-top');
  window.addEventListener('scroll', () => {
    backTop.style.opacity = window.scrollY > 400 ? '1' : '0';
  });
  backTop.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });

