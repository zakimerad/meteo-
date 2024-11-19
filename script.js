let villeChoisie = "Paris";
recevoirTemperature(villeChoisie);

let changerDeVille = document.querySelector('#changer');
changerDeVille.addEventListener('click', () => {
  villeChoisie = prompt('Quelle ville souhaitez-vous voir ?');
  if (villeChoisie && villeChoisie.trim() !== "") {
    recevoirTemperature(villeChoisie);
  } else {
    alert('Veuillez entrer un nom de ville valide.');
  }
});

function recevoirTemperature(ville) {
  const apiKey = 'dc8c9152e8adaad0ec8bf635818c0d42';
  
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${ville}&appid=${apiKey}&units=metric`;

  let requete = new XMLHttpRequest(); 
  requete.open('GET', url); 
  requete.responseType = 'json'; 
  requete.send(); 

  requete.onload = function() {
    if (requete.readyState === XMLHttpRequest.DONE) {
      if (requete.status === 200) {
        let reponse = requete.response;
        let temperature = reponse.main.temp;
        let ville = reponse.name;
        document.querySelector('#temperature_label').textContent = temperature;
        document.querySelector('#ville').textContent = ville;
      } else {
        alert(`Erreur : Impossible de récupérer la température pour ${ville}.`);
      }
    } else {
      alert('Un problème est survenu, merci de réessayer plus tard.');
    }
  };

  requete.onerror = function() {
    alert('Erreur de connexion réseau.');
  };
}
                

