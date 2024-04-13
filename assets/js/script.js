




const croquisContainer = document.querySelector('.croquis-container');

// Générez les balises img pour les 19 croquis
for (let i = 1; i <= 15; i++) {
  const img = document.createElement('img');
  img.src = `/assets/img/${i}.png`; // Utilisez le chemin absolu complet avec le numéro de croquis pour générer le chemin de l'image
img.alt = `Croquis ${i}`; // Alt texte pour décrire l'image

  croquisContainer.appendChild(img);
}

  



