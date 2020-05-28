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
			let etape = document.createElement('h2');
			etape.classList.add('etape'); 
			etape.innerHTML= data[i].description
			etapes.appendChild(etape); 
	}	
}

const affichageIngredients = (data) =>{
	
	let ingredients = document.getElementById('ingredients'); 

	for (let i=0; i<data.length; i++){
			let ingredient = document.createElement('div');
			ingredient.classList.add('ingredient'); 
			ingredient.innerHTML= data[i].quantite + ' '; 
			let nomRecette =  data[i].libelle.toLowerCase(); 
			if(data[i].unite != 'int'){
				ingredient.innerHTML+= data[i].unite; 
				if(nomRecette[0]=='a' || nomRecette[0]=='e' || nomRecette[0]=='e' || nomRecette=='o' || nomRecette[0]=='u' || nomRecette[0]=='y' || nomRecette[0]=='h'){
					ingredient.innerHTML += " d' "; 
				} 
				else{
					ingredient.innerHTML += ' de '; 
				}
			}
			else{
				if(data[i].quantite>1){
					nomRecette+='s'; 
				}
			} 
			ingredient.innerHTML+= nomRecette ;  
			ingredients.appendChild(ingredient); 
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
		console.log("coucou"); 
		affichage_recette(data); 
	});
	console.log("coucou"); 
	let params_ingredients = {};
	params_ingredients.nomRecette = id;
	let url_ingredients = new URL("../api/ingredients.php", window.location.href);
	url_ingredients.search = new URLSearchParams(params_ingredients);
	fetch(url_ingredients, {
		method: 'GET'
	}).then(response => response.json())
	.then( data => {
		console.log(data);
		affichageIngredients(data); 
	});

});
    