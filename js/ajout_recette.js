//Js pour l'ajout d'une recette

// Selectors
const btn_ingredient = document.querySelector(".btn_ingredient");
const btn_region = document.querySelector(".btn_region");
const btn_matos = document.querySelector(".btn_matos");
let ingredients_ajout = document.querySelector(".ingredients_ajout");
let nom_ajout = document.querySelector(".nom_ajout");
let type_ajout = document.getElementById("type_ajout");
let diff_ajout = document.getElementById("diff_ajout");
let cout_ajout = document.getElementById("cout_ajout");
let nb_ajout = document.getElementById("nb_ajout");
let region_select = document.getElementById("region_select");
let matos_ajout = document.getElementById("matos_ajout");
let plus_ingredient = document.getElementById("plus_ingredient");
let plus_matos = document.getElementById("plus_matos");
let plus_etape = document.getElementById("plus_etape");
let zone_ingredients = document.getElementById("zone_ingredients");
let ingredients_div = document.querySelector(".ingredients");
let materiel_div = document.querySelector(".materiel");
let div_region = document.getElementById("region_div");
let div_matos = document.getElementById("div_matos");
let num_etape = document.getElementById("num_etape").innerHTML;
let étapes = document.getElementById("étapes");
let nouveau_ingredient = document.getElementById("nouveau_ingredient");
let moins_ingredient = document.querySelector(".moins_ingredient");
let zone_matos = document.getElementById("zone_matos");
let formulaire_ajout = document.getElementById("formulaire_ajout");
let btn_sortir = document.querySelector("btn_sortir");
let btn_envoi = document.querySelector("btn_envoi");
let form_ajout = document.querySelector("form_ajout");



// Au chargement : fait apparaitre le formulaire
document.addEventListener('DOMContentLoaded', ready=>{

    // Requetes GET dans la bdd pour remplir les listes déroulantes avec les bonnes données
    let url_types = new URL("../api/ajout_recette/types.php", window.location.href);
  	fetch(url_types, {
  		method: 'GET'
  	}).then( response => response.json() )
  		.then( data => {
  				console.log("type ok");
          let types = [];
  				data.forEach( element => {
  					types.push(element.typeRecette);
  				});
          listeDeroulante(type_ajout, types);

  			});

      let url_ingredients = new URL("../api/ajout_recette/ingredients.php", window.location.href);
      fetch(url_ingredients, {
        method: 'GET'
     }).then( response => response.json() )
        .then( data => {
            console.log("ingredients ok");
            let ingredients = [];
            data.forEach( element => {
              ingredients.push(element.libelle);
            });
            listeDeroulante(ingredients_ajout, ingredients);
          });


      let url_regions = new URL("../api/ajout_recette/regions.php", window.location.href);
      fetch(url_regions, {
        method: 'GET'
      }).then( response => response.json() )
        .then( data => {
            console.log("regions ok");
            let regions = [];
            data.forEach( element => {
              regions.push(element.nom);
            });
            listeDeroulante(region_select, regions);
          });

      let url_materiel = new URL("../api/ajout_recette/materiel.php", window.location.href);
      fetch(url_materiel, {
        method: 'GET'
      }).then( response => response.json() )
        .then( data => {
          console.log("matos ok");
          let matos = [];
          data.forEach( element => {
            matos.push(element.libelle);
          });
          listeDeroulante(matos_ajout, matos);
         });

});




// Rempli les selects avec les données recues
const listeDeroulante = (parent, tableau) => {
  for(let t in tableau){
    let option =  document.createElement("option");
    option.innerHTML = tableau[t];
    parent.appendChild(option);
  }
}


// Pour les ingrédients : change dynamiquement l'unité en fonction de l'ingrédient
const change_valeur = (select_element) => {
  let url_ingredients = new URL("../api/ajout_recette/ingredients.php", window.location.href);
  fetch(url_ingredients, {
    method: 'GET'
 }).then( response => response.json() )
    .then( data => {
        let unites = [];
        data.forEach( element => {
          unites.push(element.unite);
        });
        select_element.children[2].innerHTML = unites[select_element.firstElementChild.selectedIndex];
      });
}

// Bloquer le calendrier sur la date du jour
var today = new Date();
var dd = today.getDate();
var mm = today.getMonth()+1;
var yyyy = today.getFullYear();
 if(dd<10){
        dd='0'+dd
    }
    if(mm<10){
        mm='0'+mm
    }

today = yyyy+'-'+mm+'-'+dd;
document.getElementById("date").setAttribute("min", today);
document.getElementById("date").setAttribute("value", today);


// Clone les div des ingrédients et du matériel au clic sur le "plus"
const clonage_div = (bouton, celui_cloné, parent) =>{
  bouton.addEventListener('click', () =>{
      let clone = celui_cloné.cloneNode(true);
      if(parent.firstElementChild != null && bouton == plus_ingredient){
        clone.children[1].value = null;
        clone.children[2].innerHTML = "int";
      }
      parent.appendChild(clone);
  });
}

clonage_div(plus_ingredient, ingredients_div, zone_ingredients);
clonage_div(plus_matos, materiel_div, zone_matos);


// Ajoute des div au clic sur le "Ajout"
const ajout_div_bouton = (bouton, nom_class, interieur, parent) =>{
  bouton.addEventListener('click', () =>{
    if(nom_class == "region"){
      div_region.innerHTML = interieur;
    }
    else{
      if(nom_class == "etape"){
        num_etape++;
        interieur = `<label id ="num_etape" for="recette_ajout">${num_etape}</label>
        <textarea rows="1" cols="30" class="etape_ajout input" type="text" name="etape_ajout" placeholder="Description de l'étape"></textarea>
        <img src="../api/ajout_recette/moins.png" alt="plus" id="moins_etape" height="15px" width="15px"  onclick="supp_div_etape(this.parentElement, étapes)">`;
      }
      let nouveau = document.createElement("div");
      nouveau.classList.add(nom_class);
      nouveau.innerHTML = interieur;
      parent.appendChild(nouveau);
    }
  });
}


let interieur_matos = `<input class="matos_ajout plus_matos input" type="text" name="matos_ajout" placeholder="Nom ustentile">
<img src="../api/ajout_recette/moins.png" alt="moins" class="moins_matos" height="15px" width="15px" onclick=" supp_div(this.parentElement)">` ;
ajout_div_bouton(btn_matos, "matos", interieur_matos, div_matos);

let interieur_region = `<input id='region_input' class="region_ajout input" type="text" name="region_ajout" placeholder="Nom région">` ;
ajout_div_bouton(btn_region, "region", interieur_region, div_region);

let interieur_vide = '' ;
ajout_div_bouton(plus_etape, "etape", interieur_vide, étapes);
ajout_div_bouton(plus_ingredient, "ingredients", interieur_vide, ingredients_div);

let interieur_ingredient = `<input class="ingredients_ajout plus_ingredient_nom input" type="text" name="ingredients_ajout" placeholder="Nom ingrédient">
<input class="qt_ajout input number" type="text" name="qt_ajout plus_ingredient_qt" placeholder="Quantité">
<select class="unite_ajout select" for="recette_ajout">
<option>int<option>cl<option>g
</select>
<img src="../api/ajout_recette/moins.png" alt="moins" class="moins_ingredient" height="15px" width="15px"  onclick="supp_div(this.parentElement)">` ;
ajout_div_bouton(btn_ingredient, "ingredients", interieur_ingredient, nouveau_ingredient);



// Fonctions pour supprimer certaines div et revenir à zero

const retour = () => {
  window.location.reload();
}

const supp_div = (parent) => {
  while (parent.firstChild) {
    parent.removeChild(parent.firstChild);
  }
  parent.remove();
}

const supp_div_etape = (parent, grandparent) => {
  console.log(num_etape);
  num_a_supp = parent.firstChild.innerHTML;
  if(num_a_supp<=num_etape){
    console.log(num_a_supp)
    for(let i=num_a_supp ; i<=num_etape ; i++){
      grandparent.children[i].firstChild.innerHTML -= 1;
    }
    num_etape--;
  }
  supp_div(parent);
}
