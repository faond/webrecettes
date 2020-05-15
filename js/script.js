const filtre = (type) => {
	event.preventDefault();
	console.log("Clic");
	//on créé un objet Javascript
	let params = {};
	params.type = type;
	params.nomRecette = document.getElementById('nomRecette').value;
	params.budget = document.getElementById('budget').value;


	let url = new URL("api/requetes.php", window.location.href);
	url.search = new URLSearchParams(params);
	fetch(url, {
		method: 'GET'
	}).then(response => response.json())
	.then( data => {
		console.log(data);
		let div_recette = document.getElementById('section_recette');
		div_recette.innerHTML= "";

		for (let i=0; i<data.length; i++){
				let message;
				let paragraphe = document.createElement("p");
				message = "Voici la recette : " + data[i].intitule + ", de type : " + data[i].typeRecette + "<br/>";
				message += " - " + data[i].description + "<br/>";
				i++;

				while(data[i].numEtape != 1 && i<data.length-1){
					message += " - " + data[i].description + "<br/>";
					i++;
				}

				paragraphe.innerHTML = message;
				div_recette.appendChild(paragraphe);
		}

	});
  }


document.getElementById('entree').onclick = event =>{
	filtre("Entrée");
}

document.getElementById('plat').onclick = event =>{
	filtre("Plat");
}

document.getElementById('dessert').onclick = event =>{
	filtre("Dessert");
}

document.getElementById('boisson').onclick = event =>{
	filtre("Boisson");
}

document.getElementById('bouton_recette').onclick = event => {
	filtre(document.getElementById('type').value);
}



//fetch('api/requetes.php', {
//method: 'GET',
//body: JSON.stringify(params)



//------Script pour vider la div des resultats, plus propre que de mettre innerHTML = ""-------//
/*

const clean = tag => {
  if (tag.hasChildNodes()) {
    let child = tag.lastElementChild;
    while (child) {
      tag.removeChild(child);
      child = tag.lastElementChild;
    }
  }
};

*/
