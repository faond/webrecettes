// document ready in ES6
Document.prototype.ready = callback => {
	if(callback && typeof callback === 'function') {
		document.addEventListener("DOMContentLoaded", () =>  {
			if(document.readyState === "interactive" || document.readyState === "complete") {
				return callback();
			}
		});
	}
};

// on va afficher la liste des recettes au chargement de la page
document.ready( () => {
	let url = new URL("../api/liste_recette.php", window.location.href);
	fetch(url, {
		method: 'GET'
	}).then( response => response.json() )
		.then( data => {
      let recipeContainer = document.querySelector('#recipe_container');
      let listeUl = document.createElement('ul');
      recipeContainer.appendChild(listeUl);
      listeUl.classList.add('liste_recette')
      let i = 1;
      data.forEach( element => {
        let ligne = document.createElement('li');
        let message = "Recette " + i + " : " + element.intitule;
        ligne.classList.add('recette')
        ligne.innerHTML = message;
        listeUl.appendChild(ligne);
        i++;
      });
	});
});


function elementModifie(){
  var select = document.getElementById("modification");
  var elementSelected = select.options[select.selectedIndex].value;

  if(elementSelected == 'resume'){
    document.querySelector('resume').classList.add('up');
  }
}

let modificationRecette = document.querySelector('#modification');
modificationRecette.addEventListener('onChange',elementModifie);
