Document.prototype.ready = callback => {
	if(callback && typeof callback === 'function') {
		document.addEventListener("DOMContentLoaded", () =>  {
			if(document.readyState === "interactive" || document.readyState === "complete") {
				return callback();
			}
		});
	}
};
const affichage_recette = (data) => {
	let titre = document.getElementById('titre'); 
	let type = document.getElementById('type');
	let photo = document.getElementById('photo'); 
	let nbPersonnes = document.getElementById('nbPersonnes'); 
	let difficulte = document.getElementById('difficulte'); 
	let budget = document.getElementById('budget'); 
	let tpsPrepa = document.getElementById('tpsPrepa'); 
	let tpsCuisson = document.getElementById('tpsCuisson'); 
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
			let numEtape = document.createElement('h3');
			let num = i+1; 
			numEtape.innerHTML = "Etape " + num; 
			let etape = document.createElement('div');
			etape.classList.add('etape'); 
			etape.innerHTML= data[i].description; 
			etapes.appendChild(numEtape); 
			etapes.appendChild(etape); 
	}	
}

const affichageIngredients = (data) =>{
	
	let ingredients = document.getElementById('ingredients'); 

	for (let i=0; i<data.length; i++){
			let ingredient = document.createElement('div');
			ingredient.classList.add('ingredient_detail'); 
			ingredient.innerHTML= data[i].quantite + ' '; 
			let nomRecette =  data[i].libelle.toLowerCase(); 
			if(data[i].unite != 'int'){
				ingredient.innerHTML+= data[i].unite; 
				if(nomRecette[0]=='a' || nomRecette[0]=='e' || nomRecette[0]=='i' || nomRecette[0]=='o' || nomRecette[0]=='u' || nomRecette[0]=='y' || nomRecette[0]=='h'){
					ingredient.innerHTML += " d' "; 
				} 
				else{
					ingredient.innerHTML += ' de '; 
				}
			}
			else{
				if(data[i].quantite>1 &&nomRecette[nomRecette.length-1]!='s'){
					nomRecette+='s'; 
				}
			} 
			ingredient.innerHTML+= nomRecette ;  
			ingredients.appendChild(ingredient); 
	}
}

const affichageUstensiles = (data) =>{
	
	let ustensiles = document.getElementById('ustensiles'); 

	for (let i=0; i<data.length; i++){
			let ustensile = document.createElement('div');
			ustensile.classList.add('ustensile_detail'); 
			ustensile.innerHTML= data[i].libelle;   
			ustensiles.appendChild(ustensile); 
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
		console.log('Infos recette', data);
		affichage_recette(data); 
	});

	let url_ingredients = new URL("../api/ingredients.php", window.location.href);
	url_ingredients.search = new URLSearchParams(params);
	fetch(url_ingredients, {
		method: 'GET'
	}).then(response => response.json())
	.then( data => {
		console.log('ingredients', data);
		affichageIngredients(data); 
	});

	let url_ustensiles = new URL("../api/ustensiles.php", window.location.href);
	url_ustensiles.search = new URLSearchParams(params);
	fetch(url_ustensiles, {
		method: 'GET'
	}).then(response => response.json())
	.then( data => {
		console.log('ustensiles', data);
		affichageUstensiles(data); 
	});

});
    