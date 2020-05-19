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

const filtre = (type/*, nomRecette, budget*/) => {
	event.preventDefault();
	console.log("Clic");
	//on créé un objet Javascript
	let nomRecetteApproximatif = document.getElementById('nomRecette').value;
	let url1 = new URL("api/liste_recette.php", window.location.href);
	fetch(url1, {
		method: 'GET'
	}).then( response => response.json() )
		.then( liste_recettes => {
			// console.log("liste_recettes");
			// console.log(liste_recettes);
			// console.log("intitulé");
			// console.log(liste_recettes[0]['intitule'])
			
			let j=0;
			let noms_corrects = {};
			
			/*------------ Pour afficher un résultat même si l'utilisateur écrit mal le nom ----------*/
			nomRecetteApproximatif = nomRecetteApproximatif.toLowerCase();
			nomRecetteApproximatif = nomRecetteApproximatif.toString().replace(/é|è|ê|ë/gi,"e");
			nomRecetteApproximatif = nomRecetteApproximatif.toString().replace(/â|à|ã/gi,"a");
			nomRecetteApproximatif = nomRecetteApproximatif.toString().replace(/ù|ü/gi,"u");
			nomRecetteApproximatif = nomRecetteApproximatif.toString().replace(/ô/gi,"o");
			nomRecetteApproximatif = nomRecetteApproximatif.toString().replace(/ç/gi,"c");

			liste_recettes.forEach(element => {
				elmt_simpl = element['intitule'].toLowerCase();
				elmt_simpl = elmt_simpl.toString().replace(/é|è|ê|ë/gi,"e");
				elmt_simpl = elmt_simpl.toString().replace(/â|à|ã/gi,"a");
				elmt_simpl = elmt_simpl.toString().replace(/ù|ü/gi,"u");
				elmt_simpl = elmt_simpl.toString().replace(/ô/gi,"o");
				elmt_simpl = elmt_simpl.toString().replace(/ç/gi,"c");	

				if(elmt_simpl.indexOf(nomRecetteApproximatif)!=-1){					
				noms_corrects[j]=element['intitule'];
				j++; 
				}
			});

			console.log("noms corrects");
			console.log(noms_corrects);
			let params = {};
			params.type = type;
			if(document.getElementById('nomRecette').value!=""){
				params.nomRecette = noms_corrects[0];
			}
			else params.nomRecette ="";
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
			
	});


	
  }


document.ready(() => {
	filtre(document.getElementById('type').value);
})

document.getElementById('entree').onclick = event =>{
	filtre("Entrée");
	document.querySelector("#section_recette").scrollIntoView({behavior: "smooth"});
}

document.getElementById('plat').onclick = event =>{
	filtre("Plat");
	document.querySelector("#section_recette").scrollIntoView({behavior: "smooth"});
}

document.getElementById('dessert').onclick = event =>{
	filtre("Dessert");
	document.querySelector("#section_recette").scrollIntoView({behavior: "smooth"});
}

document.getElementById('boisson').onclick = event =>{
	filtre("Boisson");
	document.querySelector("#section_recette").scrollIntoView({behavior: "smooth"});
}

document.getElementById('bouton_recette').onclick = event => {
	filtre(document.getElementById('type').value);
	document.querySelector("#section_recette").scrollIntoView({behavior: "smooth"});
}

document.addEventListener('keyup', (e)=>{
    if(e.keyCode == 13) {
        filtre(document.getElementById('type').value);
		document.querySelector("#section_recette").scrollIntoView({behavior: "smooth"});
    };
});



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
