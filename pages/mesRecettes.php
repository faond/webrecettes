<!DOCTYPE html>
<html lang="fr" dir="ltr">
  <head>
    <meta charset="utf-8">
    <link rel="stylesheet" href="../css/styles.css">
    <title>Mes recettes</title>
  </head>
  <body>
    <h1>Mes recettes</h1>
    <div id="recipe_container" class="recipe_container"></div>
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

        <input id="resume" class="button" type="text" name="description">
      </form>
    </div>
  </body>
  <script type="text/javascript" src="../js/liste_recette.js"></script>
</html>
