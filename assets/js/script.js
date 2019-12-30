// création du menu
function menuClickShow() {
  document.getElementById('menu').style.display = 'block';
}

function menuClickHide() {
  document.getElementById('menu').style.display = 'none';
}

// compteur
var n = 75; // Nombre final du compteur
var nbDonut = 60;
var cpt = 0;
var cpt1 = 0;
var duree = 5;
var delta = Math.ceil((duree * 1000) / n); // On calcule l'intervalle de temps entre chaque rafraîchissement du compteur (durée mise en milliseconde)
var resultBar =  document.getElementById("result"); // On récupère notre noeud où sera rafraîchi la valeur du compteur
var resultDonut = document.getElementById("resultDonut");

function countdown() {
  resultBar.innerHTML = ++cpt;
  if( cpt < n ) { // Si on est pas arrivé à la valeur finale, on relance notre compteur une nouvelle fois
     setTimeout(countdown, delta);
  }
}

function countdownDonut() {
  resultDonut.innerHTML = ++cpt1;
  if( cpt1 < nbDonut ) { // Si on est pas arrivé à la valeur finale, on relance notre compteur une nouvelle fois
     setTimeout(countdownDonut, delta);
  }
}

setTimeout(countdownDonut, delta);
setTimeout(countdown, delta);

// progress bars
var fill = 0;

window.setInterval(function() {
  fill++;

  if(fill <= 75) {
    document.getElementById('progressBar').style.width = fill + '%';
  } else {
    clearInterval()
  }
},70);
