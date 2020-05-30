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

}

let modificationRecette = document.querySelector('#modification');
modificationRecette.addEventListener('change',elementModifie);
