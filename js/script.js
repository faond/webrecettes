const affichage_etapes = (data, choix = 0) => {
	let div_recette = document.getElementById('section_recette');
	div_recette.innerHTML= "";
	for (let i=0; i<data.length-1; i++){ //J'ai rajouté un -1 pour enlever un message d'erreur. Why ? idk
		let message;
		let a = document.createElement("a");
		a.classList.add("div-recette"); 
		id = data[i].intitule; 
		a.href = "pages/pageRecette.php?id=" + id;
		
		let image = document.createElement('div'); 
		image.classList.add("image-recette"); 
		image.style.backgroundImage = 'url(api/images/'+data[i].cheminPhoto+')';

		
		message ="<h1 id='titre-recette'>"+data[i].intitule + "</h1><h2 id='type-recette'>"
			+ data[i].typeRecette + "</h2><h2 id='description-recette'>"+data[i].resume+"</h2><br/>";
		
		
		if(choix ==1){
			message += " - " + data[i].description + "<br/>";
		}		
		i++;
		while(data[i].numEtape != 1 && i<data.length-1){
			if(choix == 1){
				message += " - " + data[i].description + "<br/>";
			}			
			i++;
		}
		
		a.innerHTML = message;
		a.appendChild(image); 
		div_recette.appendChild(a);
	}	
}

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
		affichage_etapes(data); 
	});
  }

  

document.ready(() => {
	filtre(document.getElementById('type').value);
})

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
	document.querySelector("#section_recette").scrollIntoView({behavior: "smooth"});
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
