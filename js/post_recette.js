let params = {};
let ready;
let erreur = [];
let envoyer_recette = document.getElementsByClassName("btn_envoi");

function test_formulaire_plein(){


  var class_ingredient = document.getElementsByClassName("ingredients_ajout");
  let ingredients_libelle =[];
  remplir_tableau(ingredients_libelle, class_ingredient);

  var class_qt = document.getElementsByClassName("qt_ajout");
  let ingredients_qt =[];
  remplir_tableau(ingredients_qt, class_qt);

  var class_unite = document.getElementsByClassName("unite_ajout");
  let ingredients_unite =[];
  remplir_tableau(ingredients_unite, class_unite);

  var class_matos = document.getElementsByClassName("matos_ajout");
  let materiel =[];
  remplir_tableau(materiel, class_matos);

  var class_etape = document.getElementsByClassName("etape_ajout");
  let etapes =[];
  remplir_tableau(etapes, class_etape);


  params["nom_ajout"] = document.querySelector(".nom_ajout").value;
  params["type_ajout"] = document.querySelector("#type_ajout").value;
  params["nb_ajout"] = document.querySelector("#nb_ajout").value;
  params["tpsPrep_ajout"] = document.querySelector(".tpsPrep_ajout").value;
  params["tpsCui_ajout"] = document.querySelector(".tpsCui_ajout").value;
  params["diff_ajout"] = document.querySelector(".diff_ajout").value;
  params["cout_ajout"] = document.querySelector(".cout_ajout").value;
  params["resume_ajout"] = document.querySelector(".resume_ajout").value;
  params["pseudo_ajout"] = document.querySelector(".pseudo_ajout").value;
  params["region_ajout"] = document.querySelector(".region_ajout").value;
  params["ingredients_ajout"] = ingredients_libelle;
  params["qt_ajout"] = ingredients_qt;
  params["unite_ajout"] = ingredients_unite;
  params["matos_ajout"] = materiel;
  params["etape_ajout"] = etapes;
  console.log(params);


  for (const property in params) {
    if(Array.isArray(params[property])==false){
      verif_info(params, property);
    }
    else{
      for (const dedans in params[property]){
        if(params[property] == ingredients_libelle){
          verif_info_tabl(class_ingredient, dedans);
        }
        else if(params[property] == ingredients_qt){
          verif_info_tabl(class_qt, dedans);
        }
        else if(params[property] == ingredients_unite){
          verif_info_tabl(class_unite, dedans);
        }
        else if(params[property] == materiel){
          verif_info_tabl(class_matos, dedans);
        }
        else if(params[property] == etapes){
          verif_info_tabl(class_etape, dedans);
        }

      }
    }

  }
  console.log("ready",ready);
  if(ready==false){
    //msg_erreur();
    return false;
  }

  return true;



}

const envoi = () => {
  ready = true;

  if(test_formulaire_plein()==false){
    console.log("remplir tous les champs");
  }
  else{
    fetch("api/ajout_recette/post_recette.php", {
      method : 'POST',
      body: JSON.stringify(params)

    })
      .then( response => response.json() )
      .then( response => {
        console.log("reponse : ", response);
      });
  }
}

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

const verif_info = (params, property) => {
  if(params[property]==""){
    document.querySelector(`.${property}`).style = "border-color: rgba(211, 96, 100, 0.7)";
    erreur.push("autre");
    ready = false;
  }
  else{
    if(document.querySelector(`.${property}`)!=null){
      document.querySelector(`.${property}`).style = "border-color: none";

    }
    else{
      document.querySelector(`#${property}`).style = "border-color: none";
    }
  }
}

const verif_info_tabl = (class_nom, dedans) => {
  if(class_nom[dedans].value==""){
    class_nom[dedans].style = "border-color: rgba(211, 96, 100, 0.7)";
    ready = false;
    }
  else{

    if(class_nom[dedans].classList == "ingredients_ajout" || class_nom[dedans].classList == "matos_ajout"){
      if(compte_occurence(class_nom, class_nom[dedans].value).length > 1){
        for(let l=1 ; l<compte_occurence(class_nom, class_nom[dedans].value).length ; l++){
          class_nom[compte_occurence(class_nom, class_nom[dedans].value)[l]].style = "border-color: rgba(21, 96, 100, 0.7)";
          erreur.push("doublon");
        }
      }
      else{
        class_nom[dedans].style = "border-color: none";
      }
    }
    else if(class_nom[dedans].classList != "ingredients_ajout" || class_nom[dedans].classList != "matos_ajout"){
      class_nom[dedans].style = "border-color: none";
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


/*
const msg_erreur = () => {
  let nouveau = document.createElement("div");
  console.log(erreur);
  nouveau.classList.add("message");
  if(erreur.includes("autre")){
    nouveau.innerHTML += "Merci de remplir tous les champs";
  }
  else if(erreur.includes("doublon")){
    nouveau.innerHTML += "Certains éléments apparaissent plusieurs fois, merci de les supprimer";
  }
  //envoyer_recette.appendChild(nouveau);
}
*/
