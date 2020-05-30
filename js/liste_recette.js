// // document ready in ES6
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
       let recipeContainer = document.querySelector('.recipe_container');
       data.forEach( element => {
				 let a = document.createElement('a');
				 let div_recette = document.createElement('div');
				 div_recette.classList.add('div_recette');

				 a.classList.add("a");
				 a.href = "pageRecette.php?id=" + element.intitule;



				 let h3 = document.createElement('h3');
				 let p = document.createElement('p');
				 let legende = document.createElement('legend');

				 h3.innerHTML = element.intitule;
				 h3.classList.add('h3_liste_recette');
				 p.innerHTML = element.resume;
				 p.classList.add('paragraphe_resume');
				 legende.innerHTML = element.pseudo;
				 legende.classList.add('pseudo');

         div_recette.appendChild(h3);
				 div_recette.appendChild(p);
				 div_recette.appendChild(legende);

				 a.appendChild(div_recette);
				 recipeContainer.appendChild(a);

       });
 	});
});
