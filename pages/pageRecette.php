<!DOCTYPE html>
<html lang="fr" dir="ltr">
  <head>
    <meta charset="utf-8">
    <link rel="stylesheet" href="../css/recette.css">
    <link rel="stylesheet" href="../css/requetes.css">
    <link rel="stylesheet" href="../css/styles.css">
    <link href="https://fonts.googleapis.com/css2?family=Quicksand&display=swap" rel="stylesheet">
    <title>Mes recettes</title>
    <?php include_once '../api/upload.php'; ?>
  </head>
  <body>
    <header id="header_pageRecette">
      <a href="../index.php"><img src="../api/images/icone/back.png" alt="arrow_back"></a>
    </header>
    <h1 id = "titre"></h1>
    <h2 id = "type"></h2>
    <div id="section_recette">
      <!-- <div id = photo class="image-recette"></div> -->
      <img id="photoRecette">
      <div id = "details">
        <div class = 'nbPersonnes div-details'>
          <h3 id="personne-titre" class = 'titre-detail'></h3>
          <div id = "nbPersonnes"></div>
        </div>
        <div class = 'difficulte div-details'>
          <h3 class = 'titre-detail'>Difficulté</h3>
          <div id = "difficulte"></div>
        </div>
        <div class = 'budget div-details'>
          <h3 class = 'titre-detail'>Budget</h3>
          <div id = "budget"></div>
        </div>
        <div class = 'tpsPrepa div-details'>
          <h3 class = 'titre-detail'>Préparation</h3>
          <div id = "tpsPrepa"></div>
        </div>
        <div class = 'tpsCuisson div-details'>
          <h3 class = 'titre-detail'>Cuisson</h3>
          <div id = "tpsCuisson"></div>
        </div>

      </div>
      <div id="info-recette">
        <div class="materiel">
          <div class = 'ingredients'>
            <h3>Ingrédients </h3>
            <div id = "ingredients"></div>
          </div>
          <div class = 'ustensiles'>
            <h3>Ustensiles </h3>
            <div id = "ustensiles"></div>
          </div>
        </div>
        <div class = 'etapes'>
          <h3>Préparation </h3>
          <div id = "etapes"></div>
        </div>
      </div>

        <div id = "pseudo">

        </div>
     </div>

    <div class="modifierLaRecette">
      <input id="modifierRecette" type="button" name="modifierRecette" value="Modifier ma recette">
      <div class="recipe_selected">
        <h1>Assaisonne ta recette</h1>
        <form class="formulaire_recette">
          <select id="modification" class="element" name="element">
            <option value="intitule">Intitulé</option>
            <option value="resume">Description</option>
            <option value="nbPersonne">Nombre de personne</option>
            <option value="tpsPreparation">Temps de préparation</option>
            <option value="tpsCuisson">Temps de cuisson</option>
            <option value="difficulte">Difficule</option>
            <option value="typeCout">Coût</option>
            <option value="date">Date</option>
          </select>

          <div id="intitule_container" class="field up">
            <label for="intitule">Nom de la recette :</label>
            <input id="intitule" class="button" type="text" name="intitule">
            <input class="bouton_modifier" type="button" name="modfier" value="modifier">
          </div>

          <div id="resume_container" class="field">
            <label for="description">Description de la recette :</label>
            <input id="description" class="button" type="text" name="resume">
            <input class="bouton_modifier" type="button" name="modfier" value="modifier">
          </div>

          <div id="nbPersonne_container" class="field">
            <label for="nbPersonne">Pour combien de personne finalement ? :</label>
            <input id="nbPersonne" class="button" type="text" name="nbPersonne">
            <input class="bouton_modifier" type="button" name="modfier" value="modifier">
          </div>

          <div id="tpsPrep_container" class="field">
            <label for="tpsPrep">Ça se fait en combien de temps ? :</label>
            <input id="tpsPrep" class="button" type="text" name="tpsPrep">
            <input class="bouton_modifier" type="button" name="modfier" value="modifier">
          </div>

          <div id="tpsCuisson_container" class="field">
            <label for="tpsCuisson">Quel est le temps de cuisson ? (on a cramé la quiche déjà) :</label>
            <input id="tpsCuisson" class="button" type="text" name="tpsCuisson">
            <input class="bouton_modifier" type="button" name="modfier" value="modifier">
          </div>

          <div id="difficulte_container" class="field">
            <label for="difficulte">Difficulté ? J'aurais dit Etchebest</label>
            <input id="difficulte" class="button" type="text" name="difficulte">
            <input class="bouton_modifier" type="button" name="modfier" value="modifier">
          </div>

          <div id="typeCout_container" class="field">
            <label for="typeCout">Ça va coûter cher ?</label>
            <input id="typeCout" class="button" type="text" name="typeCout">
            <input class="bouton_modifier" type="button" name="modfier" value="modifier">
          </div>

          <div id="date_container" class="field">
            <label for="date">Mis à jour le :</label>
            <input id="date" class="button" type="date" name="date">
            <input class="bouton_modifier" type="button" name="modfier" value="modifier">
          </div>

        </form>
      </div>
    </div>

    </div>
    <div id="section_recette"></div>
    <div class="uploadImage">
      <h1>T'as fait cette recette ? Alors ajoute ton image</h1>
      <form class="formulaire_upload" method="POST" enctype="multipart/form-data">
        <input type="file" name="image">
        <input type="submit" name="envoyer" value="Ajouter mon image">
      </form>
    </div>
  </body>
  <script type="text/javascript" src="../js/modifierRecette.js"></script>
  <script type="text/javascript" src="../js/liste_recette.js"></script>
  <script type="text/javascript" src="../js/pageRecette.js"></script>
</html>
