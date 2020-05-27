Document.prototype.ready = callback => {
	if(callback && typeof callback === 'function') {
		document.addEventListener("DOMContentLoaded", () =>  {
			if(document.readyState === "interactive" || document.readyState === "complete") {
				return callback();
			}
		});
	}
};
const affichage_recettes = (data) => {
	let div_recette = document.getElementById('section_recette');
	let titre = document.getElementById('titre'); 
	let type = document.getElementById('type');
	let photo = document.getElementById('photo'); 
	let nbPersonnes = document.getElementById('nbPersonnes'); 
	let difficulte = document.getElementById('difficulte'); 
	let budget = document.getElementById('budget'); 
	let tpsPrepa = document.getElementById('tpsPrepa'); 
	let tpsCuisson = document.getElementById('tpsCuisson'); 
	let ingredients = document.getElementById('ingredients'); 
	let etapes = document.getElementById('etapes'); 
	let pseudo = document.getElementById('pseudo'); 

	titre.innerHTML= data[0].intitule; 
	type.innerHTML = data[0].typeRecette;	
	photo.style.backgroundImage = 'url(../api/images/'+data[0].cheminPhoto+')';
	nbPersonnes.innerHTML = data[0].nbPersonne;
	difficulte.innerHTML = data[0].difficulte;
	budget.innerHTML = data[0].typeCout;
	tpsPrepa.innerHTML = data[0].tpsPreparation;
	tpsCuisson.innerHTML = data[0].tpsCuisson;
	pseudo.innerHTML = data[0].pseudo;

	for (let i=0; i<data.length; i++){
			let etape = document.createElement('h2');
			etape.classList.add('etape'); 
			etape.innerHTML= data[i].description
			etapes.appendChild(etape); 
	}	
}

document.ready( () => {
	event.preventDefault();
    console.log("Page recette");
    var urlcourante = document.location.href;
    console.log(urlcourante);
	var id = urlcourante.split('id=')[1]; 
	id = decodeURI(id);

	console.log(id);

    let params = {};
	params.type = "";
	params.nomRecette = id;
	params.budget = ""; 
	let url = new URL("../api/requetes.php", window.location.href);
	url.search = new URLSearchParams(params);
	fetch(url, {
		method: 'GET'
	}).then(response => response.json())
	.then( data => {
		console.log(data);
		affichage_recettes(data); 
	});
});
    