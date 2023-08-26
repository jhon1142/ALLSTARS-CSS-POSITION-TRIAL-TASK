const diceElement = document.getElementById('dice-inner');
const diceFaces = diceElement.getElementsByClassName('dice-face');
const numFaces = diceFaces.length;

diceElement.addEventListener('animationend', rollDice);

function rollDice() {
  const randomFace = Math.floor(Math.random() * numFaces);
  diceElement.style.animation = 'none'; // Detenemos la animación de lanzamiento
  diceElement.offsetHeight; // Forzamos un repaint para reiniciar la animación
  diceElement.style.animation = 'rollDice 2s forwards'; // Reiniciamos la animación
  
  setTimeout(() => {
    updateDiceFace(randomFace);
  }, 2000); // Esperamos 2 segundos (duración de la animación)
}

function updateDiceFace(faceIndex) {
  for (let i = 0; i < numFaces; i++) {
    diceFaces[i].style.display = 'none';
  }
  diceFaces[faceIndex].style.display = 'block';
}
