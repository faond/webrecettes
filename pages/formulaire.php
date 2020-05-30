<!DOCTYPE html>
<html lang="fr" dir="ltr">
  <head>
    <meta charset="utf-8">
    <link rel="stylesheet" href="../css/formulaire_ajout.css">
    <title>Formulaire pour ajouter une recette</title>
  </head>
  <body>

    </div>
    <!-- Début questionnaire -->
    <header id="header_liste_recette">       <a href="../index.php"><img src="../api/images/icone/back.png" alt="arrow_back"></a>     </header>
    <div id = "questionnaire-header">

     <div id ="formulaire_ajout">
       <h1 id='titre'>Ajoute ta recette !</h1>
       <form class="form_ajout">
         <div id="unNom">
           <label for="nom_ajout">Un p'tit nom pour ta recette : </label>
           <input class="nom_ajout input" type="text" name="nom_ajout" placeholder="Nom de la recette">
         </div>


         <div id="centrale">
           <div id="gauche">
             <div class="zone2">
               <label for="type_ajout">Son type : </label>
               <select id="type_ajout" class="select" type="text" name="recettes"></select>
             </div>

             <div class="zone2">
               <label for="nb_ajout">Pour régaler combien de personnes ? </label>
               <select id="nb_ajout" class="select" type="text" name="nb_ajout">
                 <script type="text/javascript">
                 for(let nb = 1 ; nb<21 ; nb++){
                   let nbPers =  document.createElement("option");
                   nbPers.innerHTML = nb;
                   nb_ajout.appendChild(nbPers);
                 }
                 </script>
               </select>
             </div>

             <div class="zone2">
                <label for="tpsPrep_ajout">Mmmm, c'est long cette histoire ? </label>
                <input class="tpsPrep_ajout input number" type="text" name="tpsPrep_ajout" placeholder="Temps de préparation">
                <label for="tpsPrep_ajout"> minutes</label>
             </div>

             <div class="zone2">
                <label for="tpsCui_ajout">Et combien de temps de cuisson ? </label>
                <input class="tpsCui_ajout input number" type="text" name="tpsCui_ajout" placeholder="Temps de cuisson">
                <label for="tpsPrep_ajout"> minutes</label>
            </div>

            <div class="zone2">
              <label for="region_div">Elle vient d'où cette recette ? </label>
              <div id ="region_div">
                <select id="region_select" class="region_ajout select" type="text" name="region_ajout"></select>
                <input class="btn_region button" type="button" value="Ajouter une nouvelle région">
              </div>
            </div>


              <div class="zone2">
                 <label for="diff_ajout">Easy peasy ou hardcore ? </label>
                 <select class="diff_ajout select" type="text" name="diff_ajout">
                   <option>Facile<option>Moyen<option>Difficile
                 </select>
              </div>

              <div class="zone2">
                 <label for="cout_ajout">Salaire d'étudiant ou de Premier ministre ? </label>
                 <select class="cout_ajout select" type="text" name="cout_ajout">
                   <option>Faible<option>Moyen<option>Elevé
                 </select>
              </div>

           </div>


           <hr id="ligne">

           <div id="droite">
             <div class="zone">
               <label for="zone_ingredients">Miam, miam, elle se cuisine avec quoi ?</label>
               <div id = "zone_ingredients">
                 <div class='ingredients'>
                   <select class="ingredients_ajout select_ingredient_nom select" type="text" name="ingredients_ajout" onchange="change_valeur(this.parentElement)" >
                   <input class="qt_ajout select_ingredient_qt number input" type="text" name="qt_ajout" placeholder="Quantité">
                   <label class="unite_ajout" for="ingredients_ajout">int</label>
                   <img src="../api/ajout_recette/moins.png" alt="moins" class="moins_ingredient" height="15px" width="15px" onclick="supp_div(this.parentElement)">
                 </div>
              </div>
              <img src="../api/ajout_recette/plus.png" alt="plus" id="plus_ingredient" height="15px" width="15px">
              <div id="nouveau_ingredient">
                <input class="btn_ingredient button" type="button" value="Ajouter un nouvel ingrédient">
              </div>
             </div>

             <div class="zone">
               <label for="materiel">Et le matos alors ? </label>
               <div id="zone_matos">
                 <div class="materiel">
                   <select id="matos_ajout" class="matos_ajout select_matos select" type="text" name="matos_ajout" ></select>
                   <img src="../api/ajout_recette/moins.png" alt="moins" class="moins_matos" height="15px" width="15px" onclick="supp_div(this.parentElement)">
                 </div>
               </div>
               <img src="../api/ajout_recette/plus.png" alt="plus" id="plus_matos" height="15px" width="15px">
               <div id="div_matos">
                 <input class="btn_matos button" type="button" value="Ajouter un nouvel ustentile">
               </div>
             </div>

             <div class="zone">
               <label for="étapes">Les étapes !</label>
               <div id="étapes">
                 <label id ="num_etape" for="recette_ajout">1</label>
                 <textarea rows="1" cols="30" class="etape_ajout input" type="text" name="etape_ajout" placeholder="Description de l'étape"></textarea>
               </div>
              <img src="../api/ajout_recette/plus.png" alt="plus" id="plus_etape" height="15px" width="15px">
             </div>



           </div>
         </div>


        <div id="bas">
          <div>
             <label for="resume_ajout">Résume ta recette en quelques mots : </label>
             <textarea rows="1" cols="30"class="resume_ajout input" type="text" name="resume_ajout" placeholder="Donne nous envie !"></textarea>
          </div>

          <div>
             <label for="pseudo_ajout">Signe ton oeuvre par ton pseudo : </label>
             <input class="pseudo_ajout input" type="text" name="pseudo_ajout" placeholder="Un petit nom">
          </div>

           <div>
             <label for="date">Date de ton cadeau pour notre super site : </label>
             <input id="date" class="date_ajout input" name="begin" min="2020-05-01" class="bouton_date" value="2020-01-01" >
           </div>

        </div>
        <div id="msg_erreur"></div>

       </form>
       <div class="boutons_fin">
         <input class="btn_envoi button buttonenvoi" type="button" value="Envoyez la recette" onclick="envoi()">
         <input class="btn_sortir button buttonretour" type="button" value="Retour - Ne pas ajouter de recette" onclick="retour()">
       </div>



       <!-- fin questionnaire -->
      </div>

    </body>
    <script type="text/javascript" src="../js/ajout_recette.js"></script>
    <script type="text/javascript" src="../js/post_recette.js"></script>
    </html>
