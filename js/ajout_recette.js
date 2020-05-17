//Js pour l'ajout d'une recette


const ajoutBtn = document.querySelector(".ajout_recette");
const btn_ingredient = document.querySelector(".btn_ingredient");
const btn_region = document.querySelector(".btn_region");
const btn_matos = document.querySelector(".btn_matos");
let ingredients_ajout = document.querySelector(".ingredients_ajout");
let type_ajout = document.getElementById("type_ajout");
let region_ajout = document.getElementById("region_ajout");
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
let clic_ajout = 0;

ajoutBtn.addEventListener('click', () => {
  clic_ajout ++;
  if(clic_ajout == 1){
    formulaire_ajout.style.display = "inline-flex";

    let url_types = new URL("api/ajout_recette/types.php", window.location.href);
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

      let url_ingredients = new URL("api/ajout_recette/ingredients.php", window.location.href);
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


      let url_regions = new URL("api/ajout_recette/regions.php", window.location.href);
      fetch(url_regions, {
        method: 'GET'
      }).then( response => response.json() )
        .then( data => {
            console.log("regions ok");
            let regions = [];
            data.forEach( element => {
              regions.push(element.nom);
            });
            listeDeroulante(region_ajout, regions);
          });

      let url_materiel = new URL("api/ajout_recette/materiel.php", window.location.href);
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
  }
  else{
    console.log("deja affiché");
  }



});



const listeDeroulante = (parent, tableau) => {
  for(let t in tableau){
    let option =  document.createElement("option");
    option.innerHTML = tableau[t];
    parent.appendChild(option);
  }
}


const change_valeur = (select_element) => {
  let url_ingredients = new URL("api/ajout_recette/ingredients.php", window.location.href);
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


const ajout_div_bouton = (bouton, nom_class, interieur, parent) =>{
  bouton.addEventListener('click', () =>{
    if(nom_class == "region"){
      div_region.innerHTML = interieur;
    }
    else{
      if(nom_class == "etape"){
        num_etape++;
        interieur = `<label id ="num_etape" for="recette_ajout">${num_etape}</label>
        <input class="etape_ajout" type="text" name="etape_ajout" placeholder="Description de l'étape">
        <img src="api/ajout_recette/moins.png" alt="plus" id="moins_etape" height="15px" width="15px"  onclick="supp_div_etape(this.parentElement, étapes)">`;
      }
      let nouveau = document.createElement("div");
      nouveau.classList.add(nom_class);
      nouveau.innerHTML = interieur;
      parent.appendChild(nouveau);
    }
  });
}




let interieur_matos = `<input class="matos_ajout" type="text" name="matos_ajout" placeholder="Nom ustentile">
<img src="api/ajout_recette/moins.png" alt="moins" class="moins_matos" height="15px" width="15px" onclick=" supp_div(this.parentElement)">` ;
ajout_div_bouton(btn_matos, "matos", interieur_matos, div_matos);

let interieur_region = `<input class="region_ajout" type="text" name="region_ajout" placeholder="Nom région">` ;
ajout_div_bouton(btn_region, "region", interieur_region, div_region);

let interieur_vide = '' ;
ajout_div_bouton(plus_etape, "etape", interieur_vide, étapes);
ajout_div_bouton(plus_ingredient, "ingredients", interieur_vide, ingredients_div);

let interieur_ingredient = `<input class="ingredients_ajout" type="text" name="ingredients_ajout" placeholder="Nom ingrédient">
<input class="qt_ajout" type="text" name="qt_ajout" placeholder="Quantité">
<select class="unite_ajout" for="recette_ajout">
<option>int<option>cl<option>g
</select>
<img src="api/ajout_recette/moins.png" alt="moins" class="moins_ingredient" height="15px" width="15px"  onclick="supp_div(this.parentElement)">` ;
ajout_div_bouton(btn_ingredient, "ingredients", interieur_ingredient, nouveau_ingredient);


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


const retour = () =>{
  formulaire_ajout.style.display = "none";
  clic_ajout =0;
  //for(let i=1 ; i<)
  //while(zone_ingredients.childNodes.length>0){zone_ingredients.removeChild(zone_ingredients.lastChild)};
   while (zone_ingredients.firstChild) {
     zone_ingredients.removeChild(zone_ingredients.firstChild);
   }
  while (type_ajout.firstChild) {
    type_ajout.removeChild(type_ajout.firstChild);
  }
  while (region_ajout.firstChild) {
    region_ajout.removeChild(region_ajout.firstChild);
  }
  while (matos_ajout.firstChild) {
    matos_ajout.removeChild(matos_ajout.firstChild);
  }
}



/* Bloquer les calendriers sur la date du jour */

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

today = dd+'-'+mm+'-'+yyyy;
document.getElementById("date").setAttribute("min", today);
document.getElementById("date").setAttribute("value", today);
