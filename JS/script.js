// Sélectionner la boîte
const box = document.getElementById('box');

// Événement 1 : Au clic, déplacer la boîte de 500px vers la droite
box.addEventListener('click', () => {
    gsap.to(box, { x: "+=500", duration: 1 });
});

// Événement 2 : Au double-clic, faire tourner la boîte de 360 degrés
box.addEventListener('dblclick', () => {
    gsap.to(box, { rotation: "+=360", duration: 1 });
});

// Événement 3 : Au survol de la souris, changer la couleur de fond en orange
box.addEventListener('mouseover', () => {
    gsap.to(box, { backgroundColor: "orange", duration: 0.5 });
});

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

