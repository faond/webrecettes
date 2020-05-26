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
      let formulaire = document.querySelector('.formulaire_upload');
      let select = document.createElement('select');
      formulaire.appendChild(select);

      data.forEach( element => {
        let option = document.createElement('option');
        option.value = element.intitule;
        option.innerHTML = element.intitule;
        select.appendChild(option);

      });
	});
});
