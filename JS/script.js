// Sélectionner la boîte
const box = document.getElementById('box');
const boxText = document.getElementById('boxText');
let moved = false;  // Variable pour suivre l'état du déplacement

// Événement : Au clic, déplacer la boîte de 500px vers la droite ou revenir à la position initiale
box.addEventListener('click', () => {
    if (!moved) {
        // Si la boîte n'a pas encore été déplacée, on la déplace de 500px vers la droite
        gsap.to(box, { x: 500, duration: 1 });
         // Faire disparaître le texte (fade out)
        gsap.to(boxText, { opacity: 0, duration: 1 });
    } else {
        // Si elle a été déplacée, on la ramène à la position initiale
        gsap.to(box, { x: 0, duration: 1 });
        // Faire réapparaître le texte (fade in)
        //gsap.to(boxText, { opacity: 1, duration: 1 });
    }
    moved = !moved;  // Inverser l'état du déplacement après chaque clic
});

// Événement 2 : Au double-clic, faire tourner la boîte de 360 degrés
box.addEventListener('dblclick', () => {
    box.innerText = 'Excellent! Vous avez cliqué deux fois';
    box.style.border = '5px solid rgb(180, 186, 169)';
    gsap.set(box, { rotation: 0 });
    gsap.to(box, { rotation: 360, duration: 3 });
});

// Événement 3 : Survoler la boîte, changer la couleur et agrandir
box.addEventListener('mouseover', () => {
    box.innerText = 'Position actuelle!';
    box.style.backgroundColor = 'orange';
    gsap.to(box, { scale: 1.2, duration: 2 });
});
// Événement 2 : Au double-clic, faire tourner la boîte de 360 degrés
//box.addEventListener('dblclick', () => {
//    gsap.to(box, { rotation: "+=360", duration: 1 });
//});

// Événement 3 : Au survol de la souris, changer la couleur de fond en orange
//box.addEventListener('mouseover', () => {
 //   gsap.to(box, { backgroundColor: "orange", duration: 0.5 });
//});

// Événement 4 : Quand la souris quitte la boîte, restaurer la couleur de fond originale
box.addEventListener('mouseout', () => {
    gsap.to(box, { backgroundColor: "lightblue", duration: 0.5 });
});

// Événement 5 : Appuyer sur la touche "flèche haut" pour agrandir la boîte
document.addEventListener('keydown', (event) => {
    if (event.key === 'ArrowUp') {
        gsap.to(box, { scale: 1.5, duration: 0.5 });
    }
});

// Optionnel : Restaurer la taille initiale après avoir relâché la touche "flèche haut"
document.addEventListener('keyup', (event) => {
    if (event.key === 'ArrowUp') {
        gsap.to(box, { scale: 1, duration: 0.5 });
    }
});

