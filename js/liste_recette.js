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

function afficherModification(){
	let recipe_selected = document.querySelector('.recipe_selected');
	recipe_selected.classList.add('up');
}
function fermerModification(){
	let recipe_selected = document.querySelector('.recipe_selected');
	recipe_selected.classList.remove('up');
}
let buttonModifierRecette = document.querySelector('#modifierRecette');
buttonModifierRecette.addEventListener('click',afficherModification);

let buttonModifier = document.querySelector('.bouton_modifier');
buttonModifier.addEventListener('click',fermerModification);


function elementModifie(){
  let select = document.getElementById("modification");
	let indexSelected = select.selectedIndex;
  let elementSelected = select.options[indexSelected].value;
	let zones = document.getElementsByClassName('field');

  if(elementSelected == 'intitule'){
		for (element of zones) {
		  element.classList.remove('up');
		}
		document.querySelector('#intitule_container').classList.add('up');
}
  if(elementSelected == 'resume'){
		for (element of zones) {
			element.classList.remove('up');
		}
		document.querySelector('#resume_container').classList.add('up');
  }
	if(elementSelected == 'nbPersonne'){
		for (element of zones) {
			element.classList.remove('up');
		}
		document.querySelector('#nbPersonne_container').classList.add('up');
  }
	if(elementSelected == 'tpsPreparation'){
		for (element of zones) {
			element.classList.remove('up');
		}
		document.querySelector('#tpsPrep_container').classList.add('up');
  }
	if(elementSelected == 'tpsCuisson'){
		for (element of zones) {
			element.classList.remove('up');
		}
		document.querySelector('#tpsCuisson_container').classList.add('up');
	}
	if(elementSelected == 'difficulte'){
		for (element of zones) {
			element.classList.remove('up');
		}
		document.querySelector('#difficulte_container').classList.add('up');
	}
	if(elementSelected == 'typeCout'){
		for (element of zones) {
			element.classList.remove('up');
		}
		document.querySelector('#typeCout_container').classList.add('up');
	}
	if(elementSelected == 'date'){
		for (element of zones) {
			element.classList.remove('up');
		}
		document.querySelector('#date_container').classList.add('up');
	}
}

let modificationRecette = document.querySelector('#modification');
modificationRecette.addEventListener('change',elementModifie);
