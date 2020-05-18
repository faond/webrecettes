Document.prototype.ready = callback => {
	if(callback && typeof callback === 'function') {
		document.addEventListener("DOMContentLoaded", () =>  {
			if(document.readyState === "interactive" || document.readyState === "complete") {
				return callback();
			}
		});
	}
};
const affichage_etapes = (data, choix = 0) => {
	let div_recette = document.getElementById('section_recette');
	div_recette.innerHTML= "";
	for (let i=0; i<data.length-1; i++){ //J'ai rajouté un -1 pour enlever un message d'erreur. Why ? idk
		let message;
		let paragraphe = document.createElement("p");
		paragraphe.classList.add("div-recette"); 
		
		let image = document.createElement('div'); 
		image.classList.add("image-recette"); 
		image.style.backgroundImage = 'url(../api/images/'+data[i].cheminPhoto+')';

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
		
		paragraphe.innerHTML = message;
		paragraphe.appendChild(image); 
		div_recette.appendChild(paragraphe);
	}	
}

document.ready( () => {
	event.preventDefault();
    console.log("Page recette");
    var urlcourante = document.location.href;
    console.log(urlcourante);
	var id = urlcourante.split('id=')[1]; 
	id = decodeURI(id);

	// const espace = /%20/gi;
	// const circonflexeA = /%C3%A2/gi;
	// const accentAiguE = /%C3%A9/gi;
	// const accentGraveE = /%%C3%A8/gi;
	// const accentGraveA = /%C3%A0/gi;
	// const CCedille = /%C3%A7/gi;
	// const accentGraveU = /%C3%B9/gi;

	// id = id.replace(espace," ");
	// id = id.replace(circonflexeA,"â");
	// id = id.replace(accentAiguE,"é");
	// id = id.replace(accentGraveE,"è");
	// id = id.replace(accentGraveA,"à");
	// id = id.replace(CCedille,"ç");
	// id = id.replace(accentGraveU,"ù");

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
		affichage_etapes(data,1); 
	});
});
    