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
          <input id="description" class="button" type="text" name="description">
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
  </body>
  <script type="text/javascript" src="../js/liste_recette.js"></script>
</html>
