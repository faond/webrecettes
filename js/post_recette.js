// On créer les objets pour récupérer les données

let params = {};
let type_recette = {};
let region_recette = {};
let ingredients_recette = {};
let ustentile_recette = {};
let param_pseudo = {};
let id_recette = {};
let id_recup ;
let etapes = [];
let comprend =[];
let requiert =[];
let ready;
let erreur = [];
let msg_erreur = document.getElementById("msg_erreur");
let envoyer_recette = document.getElementsByClassName("btn_envoi");
let ingredients = document.getElementsByClassName("ingredients_ajout")[0];
let region_tableau = document.getElementsByClassName("region_select");
let matos_tableau = document.getElementsByClassName("matos_ajout")[0];

// Fonction pour récupérer toutes les données du formulaire et vérifier qu'elles sont correctes

function test_formulaire_plein(){

  //On remplit toutes les informations venant du formulaire dans des tableaux pour préparer les requetes

  var class_ingredient_select = document.getElementsByClassName("select_ingredient_nom");
  var class_ingredient_plus = document.getElementsByClassName("plus_ingredient_nom");
  let ingredients_exist =[];
  let ingredients_libelle_nv =[];
  remplir_tableau(ingredients_exist, class_ingredient_select);
  remplir_tableau(ingredients_libelle_nv, class_ingredient_plus);

  var class_qt = document.getElementsByClassName("qt_ajout");
  let ingredients_qt =[];
  remplir_tableau(ingredients_qt, class_qt);
  comprend["quantite"]=ingredients_qt;

  var class_unite = document.getElementsByClassName("unite_ajout");
  let ingredients_unite =[];
  remplir_tableau(ingredients_unite, class_unite);

  var class_matos_exist = document.getElementsByClassName("select_matos");
  var class_matos_nv = document.getElementsByClassName("plus_matos");
  let materiel_existe =[];
  let materiel_nv =[];
  remplir_tableau(materiel_existe, class_matos_exist);
  remplir_tableau(materiel_nv, class_matos_nv);


  var class_etape = document.getElementsByClassName("etape_ajout");
  remplir_tableau(etapes, class_etape);

  type_recette["formulaire"] = document.querySelector("#type_ajout").value;
  type_recette["id"] = 'id_type';
  type_recette["nom"] = 'typeRecette';
  type_recette["table"] = 'projets2_type';

  id_recette["formulaire"] = document.querySelector(".nom_ajout").value;
  id_recette["id"] = 'id_recette';
  id_recette["nom"] = 'intitule';
  id_recette["table"] = 'projets2_recette';

  ingredients_recette["formulaire"] = ingredients_exist;
  ingredients_recette["id"] = 'id_ingredient';
  ingredients_recette["nom"] = 'libelle';
  ingredients_recette["table"] = 'projets2_ingredient';
  ingredients_recette["unite"] = ingredients_unite;
  ingredients_recette["libelle"] = ingredients_libelle_nv;
  ingredients_recette["id_recup"] = [];


  ustentile_recette["formulaire"] = materiel_existe;
  ustentile_recette["id"] = 'id_ustensile';
  ustentile_recette["nom"] = 'libelle';
  ustentile_recette["table"] = 'projets2_ustensile';
  ustentile_recette["libelle"] = materiel_nv;
  ustentile_recette["id_recup"] = [];


  let region =  document.querySelector(".region_ajout");
  region_recette["id"] = 'id_region';
  region_recette["nom"] = 'nom';
  region_recette["table"] = 'projets2_region';
  if(region.id == 'region_select'){
    region_recette["formulaire"] = region.value;
  }
  else{
    region_recette["formulaire"] = undefined;
    region_recette["region"] = document.querySelector(".region_ajout").value;
    if(region_recette["region"]==""){
      document.querySelector(".region_ajout").style ="border-color: rgba(211, 96, 100, 0.7)"; // Couleur vide
      ready=false;
    }
  }



  param_pseudo["pseudo_ajout"] = document.querySelector(".pseudo_ajout").value;

  params["nom_ajout"] = document.querySelector(".nom_ajout").value;
  params["nb_ajout"] = document.querySelector("#nb_ajout").value;
  params["tpsPrep_ajout"] = document.querySelector(".tpsPrep_ajout").value;
  params["tpsCui_ajout"] = document.querySelector(".tpsCui_ajout").value;
  params["diff_ajout"] = document.querySelector(".diff_ajout").value;
  params["cout_ajout"] = document.querySelector(".cout_ajout").value;
  params["resume_ajout"] = document.querySelector(".resume_ajout").value;
  params["date_ajout"] = document.querySelector(".date_ajout").value;


  // On vérifie que toutes les informations avant de les envoyer dans la BdD

  verif_info(param_pseudo, "pseudo_ajout");
  verfication_params(params);
  verfication_tableau(ingredients_recette["formulaire"], class_ingredient_select);
  verfication_tableau(ingredients_recette["libelle"], class_ingredient_plus);
  verfication_tableau(ustentile_recette["formulaire"], class_matos_exist);
  verfication_tableau(comprend["quantite"], class_qt);
  verfication_tableau(etapes, class_etape);


  console.log("ready",ready);
  if(ready==false){
    // Certaines informations ne sont pas bonnes
    return false;
  }
  // Tout est ok on peut envoyer les données
  return true;
}


// Fonction qui poste toutes les informations dans la bdd

const envoi = async function(){
  ready = true;
  while (msg_erreur.firstChild) {
    msg_erreur.removeChild(msg_erreur.firstChild);
  }
  erreur=[];
  let class_erreur = document.getElementsByClassName("erreur");
  if(test_formulaire_plein()==false){
    affiche_erreur();
    console.log("remplir tous les champs");
  }


  else{
    //Ajout du pseudo dans projets2_auteur
    await fetch("../api/ajout_recette/post/post_pseudo.php", {
      method : 'POST',
      body: JSON.stringify(param_pseudo)
    })
      .then( response => response.json() )
      .then( response => {
        console.log("Pseudo posté : ", response);
        params["pseudo_ajout"] = response;
      });


      //Récupérer l'ID du type dans projets2_type
      await fetch("../api/ajout_recette/recup_id.php", {
        method : 'POST',
        body: JSON.stringify(type_recette)
      })
        .then( response => response.json() )
        .then( response => {
          console.log("ID type : ", response[0][0]);
          params["type_ajout"] = response[0][0];
        });


        //Si region nouvelle
        if(region_recette["formulaire"]==undefined){
          console.log("connait pas");
          await fetch("../api/ajout_recette/post/post_region.php", {
            method : 'POST',
            body: JSON.stringify(region_recette)
          })
            .then( response => response.json() )
            .then( response => {
              console.log("Region postée : ", response);
            });
            params["region_ajout"] = region_tableau.length+1;//PAS OUF
         }
         else{
           //Récupérer l'ID de la region dans projets2_region
           await fetch("../api/ajout_recette/recup_id.php", {
             method : 'POST',
             body: JSON.stringify(region_recette)
           })
             .then( response => response.json() )
             .then( response => {
               console.log("ID region : ", response[0][0]);
               params["region_ajout"] = response[0][0];
             });
         }

        //console.log(params);

        //Ajout de la recette dans projets2_recette
        await fetch("../api/ajout_recette/post/post_tableRecette.php", {
          method : 'POST',
          body: JSON.stringify(params)
        })
          .then( response => response.json() )
          .then( response => {
            console.log("Recette postée : ", response);
          });

          //Récupérer l'ID de la recette dans projets2_recette
          await fetch("../api/ajout_recette/recup_id.php", {
            method : 'POST',
            body: JSON.stringify(id_recette)
          })
            .then( response => response.json() )
            .then( response => {
              console.log("ID recette : ", response[0][0]);
              id_recup = response[0][0];
            });



            //Poster les étapes dans projets2_etape
            for(let l=0 ; l<etapes.length ; l++){
              let etapes_post = {};
              etapes_post["id_recette"] =id_recup;
              etapes_post["etape"] = l+1;
              etapes_post["description"] =  etapes[l];
              await fetch("../api/ajout_recette/post/post_etapes.php", {
                method : 'POST',
                body: JSON.stringify(etapes_post)
              })
                .then( response => response.json() )
                .then( response => {
                  console.log("Etapes postées: ", response);
                });
            }

            //Si ingredients existent : récupérer l'ID des ingredients dans projets2_ingredient
            for(let i=0 ; i<ingredients_recette["formulaire"].length ; i++){
              let existe = [ingredients_recette["formulaire"][i], ingredients_recette["table"], ingredients_recette["nom"], ingredients_recette["id"], 'exist'];
              await fetch("../api/ajout_recette/recup_id.php", {
                method : 'POST',
                body: JSON.stringify(existe)
              })
                .then( response => response.json() )
                .then( response => {
                  ingredients_recette["id_recup"][i] = response[0][0];
                });
            }

            //Si ingredients nouveaux
            for(let i=0 ; i<ingredients_recette["libelle"].length ; i++){
              let ingred = [ingredients_recette["libelle"][i], ingredients_recette["unite"][ingredients_recette["formulaire"].length+i]];
              await fetch("../api/ajout_recette/post/post_ingredient.php", {
                method : 'POST',
                body: JSON.stringify(ingred)
              })
                .then( response => response.json() )
                ingredients_recette["id_recup"][ingredients_recette["formulaire"].length+i] = ingredients.length+1+i;//PAS OUF
            }
            //console.log(ingredients_recette);


            //Si ustentiles existent : récupérer l'ID des ustentiles dans projets2_ustensile
            for(let i=0 ; i<ustentile_recette["formulaire"].length ; i++){
              //console.log(ustentile_recette["formulaire"][i]);
              let existe = [ustentile_recette["formulaire"][i], ustentile_recette["table"], ustentile_recette["nom"], ustentile_recette["id"], 'exist'];
              await fetch("../api/ajout_recette/recup_id.php", {
                method : 'POST',
                body: JSON.stringify(existe)
              })
                .then( response => response.json() )
                .then( response => {
                  ustentile_recette["id_recup"][i] = response[0][0];
                });
            }
            //Si ustentiles nouveaux
            for(let i=0 ; i<ustentile_recette["libelle"].length ; i++){
              await fetch("../api/ajout_recette/post/post_ustensile.php", {
                method : 'POST',
                body: JSON.stringify(ustentile_recette["libelle"][i])
              })
                .then( response => response.json() )
                ustentile_recette["id_recup"][ustentile_recette["formulaire"].length+i] = matos_tableau.length+1+i;//PAS OUF
            }
            //console.log(ustentile_recette);



            //Poster les ingredients et quantite dans projets2_comprend
            comprend["ingredients"]=ingredients_recette["id_recup"];
            for(let l=0 ; l<comprend["ingredients"].length ; l++){
              let comprend_post = {};
              comprend_post["id_recette"] = id_recup;
              comprend_post["id_ingredient"] = comprend["ingredients"][l];
              comprend_post["quantite"] = comprend["quantite"][l];
              //console.log(comprend_post);
              await fetch("../api/ajout_recette/post/post_comprend.php", {
                method : 'POST',
                body: JSON.stringify(comprend_post)
              })
                .then( response => response.json() )
                .then( response => {
                  console.log("Comprend posté: ", response);
                });
            }


            //Poster les ustensiles dans projets2_requiert
            requiert["ustensiles"]=ustentile_recette["id_recup"];
            for(let l=0 ; l<requiert["ustensiles"].length ; l++){
              let requiert_post = {};
              requiert_post["id_recette"] = id_recup;
              requiert_post["id_ustensile"] = requiert["ustensiles"][l];
              await fetch("../api/ajout_recette/post/post_requiert.php", {
                method : 'POST',
                body: JSON.stringify(requiert_post)
              })
                .then( response => response.json() )
                .then( response => {
                  console.log("Requiert posté: ", response);
                });
            }
  window.location.reload()
  }

}


// const recupererId = async (tableau, stock)=>{
//    await fetch("../api/ajout_recette/recup_id.php", {
//     method : 'POST',
//     body: JSON.stringify(tableau)
//   })
//     .then( response => response.json() )
//     .then( response => {
//       stock = response[0][0];
//     });
// }



// Rempli les tableaux avec les données trouvées dans les classes

const remplir_tableau = (tableau, class_tabl) => {
  for(let i=0; i<class_tabl.length ; i++){
    if(class_tabl[i].value==undefined){
      tableau[i]=class_tabl[i].innerHTML;
    }
    else{
      tableau[i]=class_tabl[i].value;
    }
  }
}

// Fonctions pour toutes les verifications

const verfication_params = (params) =>{
  for (const property in params) {
      verif_info(params, property);
    }
}

const verfication_tableau = (params, class_nom) =>{
  for (let dedans=0; dedans<params.length; dedans++){
    verif_info_tabl(class_nom, dedans);
  }
}

const verif_info = (params, property) => {
  if(params[property]==""){
    document.querySelector(`.${property}`).style = "border-color: rgba(211, 96, 100, 0.7)"; // Couleur vide
    erreur.push("vide");
    ready = false;
  }
  else{
    if(document.querySelector(`.${property}`)!=null){
      document.querySelector(`.${property}`).style = "border-color: none";
      document.querySelector(`.${property}`).style = "color: none";
      if(document.querySelector(`.${property}`).classList[2]=="number"){
        verif_nombre(document.querySelector(`.${property}`) ,property);
      }
    }
  }
}


const verif_info_tabl = (class_nom, dedans) => {
  if(class_nom[dedans].value==""){
    class_nom[dedans].style = "border-color: rgba(211, 96, 100, 0.7)"; // Couleur vide
    erreur.push("vide");
    ready = false;
  }
  else{
    class_nom[dedans].style = "border-color: none";
    class_nom[dedans].style = "color: none";
    if(class_nom[dedans].classList[1] == "select_ingredient_nom" || class_nom[dedans].classList[1] == "select_matos"){
      if(compte_occurence(class_nom, class_nom[dedans].value).length > 1){
        for(let l=1 ; l<compte_occurence(class_nom, class_nom[dedans].value).length ; l++){
          class_nom[compte_occurence(class_nom, class_nom[dedans].value)[l]].style = "color: rgba(166, 113, 255, 0.9)"; // Couleur doublon
          erreur.push("doublon");
        }
      }
    }
    if(class_nom[dedans].classList[2] == "number"){
      verif_nombre(class_nom[dedans], "qt_ajout");
    }
  }
}

const verif_nombre = (tableau, classname) =>{
  if(tableau.length==undefined){
    if(isNaN(tableau.value)==true){
        console.log("pas un nombre");
        tableau.style = "color: rgba(255, 113, 66, 0.9)"; // Couleur NaN
        erreur.push("NaN");
        ready=false;
      }
  }
}

function compte_occurence(tableau_a_verif, occurence_cherchee){
  let tableau_occ = [];
  for (let i=0 ; i<tableau_a_verif.length; i++){
    if(tableau_a_verif[i].value == occurence_cherchee){
      tableau_occ.push(i);
    }
  }
  return tableau_occ;
}

// Fonction pour afficher les bons msg d'erreur en fonction de ce qu'il manque dans le formulaire

const affiche_erreur = () => {
  console.log(erreur);
  if(erreur.includes("vide")){
    div_erreur("Merci de remplir tous les champs", "color: rgba(211, 96, 100, 0.9)");

  }
  if(erreur.includes("doublon")){
    div_erreur("Certains éléments apparaissent plusieurs fois, merci de les supprimer", "color: rgba(166, 113, 255, 0.9)");
  }
  if(erreur.includes("NaN")){
    div_erreur("Merci de renseigner des nombres", "color: rgba(255, 113, 66, 0.9)");
  }
}

const div_erreur = (texte, couleur)=>{
  let nouveau = document.createElement("p");
  nouveau.classList.add("erreur");
  nouveau.innerHTML = texte;
  nouveau.style= couleur;
  msg_erreur.appendChild(nouveau);
}
