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
let envoyer_recette = document.getElementsByClassName("btn_envoi");
let ingredients = document.getElementsByClassName("ingredients_ajout")[0];
let region_tableau = document.getElementsByClassName("region_select");
let matos_tableau = document.getElementsByClassName("matos_ajout")[0];

function test_formulaire_plein(){

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
  params["ingredients_ajout"] = ingredients_exist;
  params["qt_ajout"] = ingredients_qt;
  params["unite_ajout"] = ingredients_unite;
  params["matos_ajout"] = materiel_nv;
  console.log(params);

  // for (const property in params) {
  //   if(Array.isArray(params[property])==false){
  //     verif_info(params, property);
  //   }
  //   else{
  //     for (const dedans in params[property]){
  //       // A REFAIRE POUR LES VERIFS!!!!!!
  //       if(params[property] == ingredients_exist){
  //         verif_info_tabl(class_ingredient_select, dedans);
  //       }
  //       if(params[property] == ingredients_qt){
  //         verif_info_tabl(class_qt, dedans);
  //       }
  //       if(params[property] == ingredients_unite){
  //         verif_info_tabl(class_unite, dedans);
  //       }
  //       else if(params[property] == materiel_nv){
  //         verif_info_tabl(class_matos_nv, dedans);
  //       }
  //       if(params[property] == etapes){
  //         verif_info_tabl(class_etape, dedans);
  //       }
  //
  //     }
  //   }
  // }
  //
  // for (let i=0; i<comprend["quantite"].length;i++){
  //   if(isNaN(comprend["quantite"][i])==true){
  //       console.log(comprend["quantite"][i]);
  //       document.getElementsByClassName("qt_ajout")[i].style = "color: rgba(211, 96, 100, 5.7)";
  //       ready=false;
  //     }
  //     else{
  //       document.getElementsByClassName("qt_ajout")[i].style = "color: none";
  //     }
  // }
  console.log("ready",ready);
  if(ready==false){
    //msg_erreur();
    return false;
  }

  return true;



}
//
// const check_id = async function(tableau, params){
//   if(tableau["formulaire"]==undefined){
//     console.log("connait pas");
//     await fetch("api/ajout_recette/post_region.php", {
//       method : 'POST',
//       body: JSON.stringify(tableau)
//     })
//       .then( response => response.json() )
//       .then( response => {
//         console.log("Posté : ", response);
//         params["region_ajout"] = region_tableau.length+1;//PAS OUF
//       });
//    }
//    else{
//      //Récupérer l'ID de la region dans projets2_region
//      await fetch("api/ajout_recette/recup_id.php", {
//        method : 'POST',
//        body: JSON.stringify(tableau)
//      })
//        .then( response => response.json() )
//        .then( response => {
//          console.log("ID : ", response[0][0]);
//          params["region_ajout"]= response[0][0];
//        });
//    }
// }

const envoi = async function(){
  ready = true;

  if(test_formulaire_plein()==false){
    console.log("remplir tous les champs");
  }
  else{
    //Ajout du pseudo dans projets2_auteur
    await fetch("api/ajout_recette/post_pseudo.php", {
      method : 'POST',
      body: JSON.stringify(param_pseudo)
    })
      .then( response => response.json() )
      .then( response => {
        console.log("Pseudo posté : ", response);
        params["pseudo_ajout"] = response;
      });


      //Récupérer l'ID du type dans projets2_type
      await fetch("api/ajout_recette/recup_id.php", {
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
          await fetch("api/ajout_recette/post_region.php", {
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
           await fetch("api/ajout_recette/recup_id.php", {
             method : 'POST',
             body: JSON.stringify(region_recette)
           })
             .then( response => response.json() )
             .then( response => {
               console.log("ID region : ", response[0][0]);
               params["region_ajout"] = response[0][0];
             });
         }

        console.log(params);

        //Ajout de la recette dans projets2_recette
        await fetch("api/ajout_recette/post_tableRecette.php", {
          method : 'POST',
          body: JSON.stringify(params)
        })
          .then( response => response.json() )
          .then( response => {
            console.log("Recette postée : ", response);
          });


          //Récupérer l'ID de la recette dans projets2_recette
          await fetch("api/ajout_recette/recup_id.php", {
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
              await fetch("api/ajout_recette/post_etapes.php", {
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
              await fetch("api/ajout_recette/recup_id.php", {
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
              let ingred = [ingredients_recette["libelle"][i], ingredients_recette["unite"], [ingredients_recette["formulaire"].length+i]];
              await fetch("api/ajout_recette/post_ingredient.php", {
                method : 'POST',
                body: JSON.stringify(ingred)
              })
                .then( response => response.json() )
                ingredients_recette["id_recup"][ingredients_recette["formulaire"].length+i] = ingredients.length+1+i;//PAS OUF
            }
            console.log(ingredients_recette);


            //Si ustentiles existent : récupérer l'ID des ustentiles dans projets2_ustensile
            for(let i=0 ; i<ustentile_recette["formulaire"].length ; i++){
              console.log(ustentile_recette["formulaire"][i]);
              let existe = [ustentile_recette["formulaire"][i], ustentile_recette["table"], ustentile_recette["nom"], ustentile_recette["id"], 'exist'];
              await fetch("api/ajout_recette/recup_id.php", {
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
              await fetch("api/ajout_recette/post_ustensile.php", {
                method : 'POST',
                body: JSON.stringify(ustentile_recette["libelle"][i])
              })
                .then( response => response.json() )
                ustentile_recette["id_recup"][ustentile_recette["formulaire"].length+i] = matos_tableau.length+1+i;//PAS OUF
            }
            console.log(ustentile_recette);



            //Poster les ingredients et quantite dans projets2_comprend
            comprend["ingredients"]=ingredients_recette["id_recup"];
            for(let l=0 ; l<comprend["ingredients"].length ; l++){
              let comprend_post = {};
              comprend_post["id_recette"] = id_recup;
              comprend_post["id_ingredient"] = comprend["ingredients"][l];
              comprend_post["quantite"] = comprend["quantite"][l];
              console.log(comprend_post);
              await fetch("api/ajout_recette/post_comprend.php", {
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
              await fetch("api/ajout_recette/post_requiert.php", {
                method : 'POST',
                body: JSON.stringify(requiert_post)
              })
                .then( response => response.json() )
                .then( response => {
                  console.log("Requiert posté: ", response);
                });
            }

            // 
            // //Ajouter l'image de la recette
            // let photo = [];
            // photo['image'] = document.getElementById('uploadImage').value;
            // photo['id_recette'] = id_recup;
            // console.log("BONJOUR");
            // console.log(photo);
            // await fetch("api/ajout_recette/upload.php", {
            //   method : 'POST',
            //   body: JSON.stringify(photo)
            //   })
            //   .then( response => response.json() )
            //   .then( response => {
            //   console.log("Requiert posté: ", response);
            // });

  window.location.reload()
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
      console.log(document.querySelector(`.${property}`));
      if(document.querySelector(`.${property}`).classList[2]=="number"){
        console.log("ici");
        if(isNaN(document.querySelector(`.${property}`).value)==true){
            console.log('pas un entier');
            document.querySelector(`.${property}`).style = "color: rgba(211, 96, 100, 5.7)";
            ready=false;
          }
          else{
            document.querySelector(`.${property}`).style = "color: none";
          }
      }
      else{
        document.querySelector(`.${property}`).style = "border-color: none";
      }

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
