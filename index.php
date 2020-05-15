<!DOCTYPE html>
<html lang="fr" dir="ltr">
  <head>
    <meta charset="utf-8">
    <link rel="stylesheet" href="css/styles.css">
    <link rel="stylesheet" href="css/formulaire_ajout.css">
    <link href="https://fonts.googleapis.com/css2?family=Quicksand&display=swap" rel="stylesheet">
    <title>Recette de Luxe</title>
  </head>
  <body>
    <header>
      <div class="menu_container">
        <div class="menu_deroulant">
          <div class="menu_btn">
              <div class="menu_burger"></div>
          </div>
          <nav id="menu" class="styles_menu">
            <ul>
              <a id="entree" href="#"><li>Nos entrées</li></a>
              <a id="plat" href="#"><li>Nos plats</li></a>
              <a id= "dessert" href="#"><li>Nos desserts</li></a>
              <a id="boisson" href="#"><li>Nos boissons</li></a>
            </ul>
          </nav>
          </div>
        <h1>Recette de Luxe</h1>
        </div>
      </div>
    </header>
    <div class="main_container">
      <div id="slider" class="slider"></div>
      <h1>Vos recettes</h1>
      <?php
        include_once "api/connexion.php";
       ?>

     <form class="formulaire">
       <label for="recettes">Avez vous une recette précise en tête ? : </label>
       <input id="nomRecette" type="text" name="nomRecette" placeholder="Nom d'une recette">

       <label for="recettes">Quel type de recette voulez vous ? : </label>
       <input id="type" type="text" name="recettes" placeholder="Entrée, Plat, Dessert...">

       <label for="recettes">Quel budget maximum avez-vous ? : </label>
       <input id="budget" type="text" name="budget" placeholder="Faible, Moyen, Elevé...">

       <input id="bouton_recette"  type="button" name="type_recette" value="Voir les recettes">
     </form>




     <input class="ajout_recette"  type="button" name="ajout_recette" value="Ajouter une recette">
       <div id ="formulaire_ajout">
         <h2>Ajoute ta recette !</h2>
         <form class="form_ajout">
           <div>
             <label for="nom_ajout">Un p'tit nom pour ta recette : </label>
             <input class="nom_ajout" type="text" name="nom_ajout" placeholder="Nom de la recette">
           </div>

           <div>
             <label for="type_ajout">Son type : </label>
             <select id="type_ajout" type="text" name="recettes"></select>
           </div>

           <div>
             <label for="nb_ajout">Pour régaler combien de personnes ? </label>
             <select id="nb_ajout" type="text" name="nb_ajout">
               <script type="text/javascript">
               for(let nb = 1 ; nb<21 ; nb++){
                 let nbPers =  document.createElement("option");
                 nbPers.innerHTML = nb;
                 nb_ajout.appendChild(nbPers);
               }
               </script>
             </select>
           </div>


           <label for="zone_ingredients">Miam, miam, elle se cuisine avec quoi ?</label>
           <div id = "zone_ingredients">
             <div class='ingredients'>
               <select class="ingredients_ajout" type="text" name="ingredients_ajout" onchange="change_valeur(this.parentElement)" >
               <input type="text" name="qt_ajout" placeholder="Quantité">
               <label for="ingredients_ajout">int</label>
               <img src="api/ajout_recette/moins.png" alt="moins" class="moins_ingredient" height="15px" width="15px" onclick="supp_div(this.parentElement)">
             </div>
          </div>
          <img src="api/ajout_recette/plus.png" alt="plus" id="plus_ingredient" height="15px" width="15px">
          <div id="nouveau_ingredient">
            <input class="btn_ingredient" type="button" value="Ajouter un nouvel ingrédient">
          </div>

          <div>
             <label for="tpsPrep_ajout">Mmmm, ça va me prendre combien de temps cette histoire ? </label>
             <input class="tpsPrep_ajout" type="text" name="tpsPrep_ajout" placeholder="Temps de préparation (en min)">
          </div>

          <div>
             <label for="tpsCui_ajout">Et combien de cuisson ? </label>
             <input class="tpsCui_ajout" type="text" name="tpsCui_ajout" placeholder="Temps de cuisson (en min)">
         </div>

           <label for="region_div">Elle vient d'où cette recette ? </label>
           <div id ="region_div">
             <select id="region_ajout" type="text" name="region_ajout"></select>
             <input class="btn_region" type="button" value="Ajouter une nouvelle région">
           </div>


           <label for="étapes">Les étapes !</label>
           <div id="étapes">
             <label id ="num_etape" for="recette_ajout">1</label>
             <input class="nom_ajout" type="text" name="nom_ajout" placeholder="Description de l'étape">
           </div>
          <img src="api/ajout_recette/plus.png" alt="plus" id="plus_etape" height="15px" width="15px">

          <div>
             <label for="diff_ajout">Easy peasy ou hardcore ? </label>
             <select class="diff_ajout" type="text" name="diff_ajout">
               <option>Facile<option>Moyen<option>Difficile
             </select>
          </div>

          <div>
             <label for="cout_ajout">Salaire d'étudiant ou de Premier ministre ? </label>
             <select class="cout_ajout" type="text" name="cout_ajout">
               <option>Faible<option>Moyen<option>Elevé
             </select>
          </div>

           <label for="materiel">Et le matos alors ? </label>
           <div id="zone_matos">
             <div class="materiel">
               <select id="matos_ajout" type="text" name="matos_ajout" ></select>
               <img src="api/ajout_recette/moins.png" alt="moins" class="moins_matos" height="15px" width="15px" onclick="supp_div(this.parentElement)">
             </div>
           </div>
           <img src="api/ajout_recette/plus.png" alt="plus" id="plus_matos" height="15px" width="15px">
           <div id="div_matos">
             <input class="btn_matos" type="button" value="Ajouter un nouvel ustentile">
           </div>

          <div>
             <label for="resume_ajout">Résume ta recette en quelques mots : </label>
             <input class="resume_ajout" type="text" name="resume_ajout" placeholder="Donne nous envie !">
          </div>

          <div>
             <label for="img_ajout">Avec une image, ça donne toujours plus envie : </label>
             <input class="img_ajout" type="text" name="img_ajout" placeholder="Ta photo">
          </div>

          <div>
             <label for="pseudo_ajout">Signe ton oeuvre par ton pseudo : </label>
             <input class="pseudo_ajout" type="text" name="pseudo_ajout" placeholder="Un petit nom">
          </div>

           <div>
             <label for="date">Date de ton cadeau pour notre super site : </label>
             <input id="date" class="date" name="begin" min="2020-05-01" class="bouton_date" value="2020-01-01" >
           </div>

         </form>
         <input class="btn_sortir" type="button" value="Retour - Ne pas ajouter de recette" onclick="retour()">
       </div>



    </div>
  </body>
  <script type="text/javascript" src="./js/ajout_recette.js"></script>
  <script type="text/javascript" src="./js/function_mep.js"></script>
  <script type="text/javascript" src="./js/requetes.js"></script>
  <script type="text/javascript" src="./js/script.js"></script>

</html>