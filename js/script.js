const affichage_etapes = (data, choix = 0) => {
	let div_recette = document.getElementById('section_recette');
	div_recette.innerHTML= "";
	for (let i=0; i<data.length; i++){
		let message;
		let paragraphe = document.createElement("p");
		paragraphe.classList.add("div-recette"); 
		let image = document.createElement('div'); 
		image.classList.add("image-recette"); 
		cheminPhoto = "api/images/slider/"+data[i].cheminPhoto;
		image.style.backgroundImage = 'url(api/images/slider/'+data[i].cheminPhoto+')';

		
		//image = "<img src='"+cheminPhoto+"' alt='mojito' width='250'/>";
		message = "<h1 id='titre-recette'>"+data[i].intitule + "</h1><h2 id='type-recette'>"
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
		paragraphe.innerHTML = message;
		paragraphe.appendChild(image); 
		div_recette.appendChild(paragraphe);
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
