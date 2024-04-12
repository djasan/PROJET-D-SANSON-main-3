const menus = [menu0, menu1, menu2]; // Regroupez tous les menus dans un tableau

// Ajoutez un écouteur d'événements à chaque menu
menus.forEach((menu, index) => {
    menu.addEventListener("click", function () {
        console.log("click menu" + index);

        // Masquer tous les sous-menus
        menus.forEach(otherMenu => {
            const ul = otherMenu.querySelector("ul");
            ul.classList.remove("show");
            ul.classList.add("hide");
        });

        const ul = menu.querySelector("ul");
        if (ul.classList.contains("show")) {
            // Masquer le sous-menu actuel
            ul.classList.remove("show");
            ul.classList.add("hide");
        } else {
            // Afficher le sous-menu actuel
            ul.classList.add("show");
            ul.classList.remove("hide");
        }
    });
});


const menuToggle = document.getElementById('menu-toggle'); // Sélectionnez la case à cocher du menu

menuToggle.addEventListener('change', function () {
    const sidenav = document.querySelector('.sidenav'); // Sélectionnez le menu latéral
    sidenav.classList.toggle('active'); // Ajoutez ou supprimez la classe 'active' pour afficher ou masquer le menu latéral
});

const croquisContainer = document.querySelector('.croquis-container');

// Générez les balises img pour les 19 croquis
for (let i = 1; i <= 15; i++) {
  const img = document.createElement('img');
  img.src = `/assets/img/${i}.png`; // Utilisez le chemin absolu complet avec le numéro de croquis pour générer le chemin de l'image
img.alt = `Croquis ${i}`; // Alt texte pour décrire l'image

  croquisContainer.appendChild(img);
}








