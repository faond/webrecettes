<!DOCTYPE html>
<html lang="fr" dir="ltr">
  <head>
    <meta charset="utf-8">
    <link rel="stylesheet" href="css/styles.css">
    <link rel="stylesheet" href="css/requetes.css">
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
              <a id="entree" href="#" class="a_menu"><li>Nos entrées</li></a>
              <a id="plat" href="#" class="a_menu"><li>Nos plats</li></a>
              <a id= "dessert" href="#" class="a_menu"><li>Nos desserts</li></a>
              <a id="boisson" href="#" class="a_menu"><li>Nos boissons</li></a>
              <a id="mesRecettes" href="pages/mesRecettes.php" class="a_menu"><li>Nos recettes en résumé</li></a>
              <a id="galerieImage" href="pages/galerie.php" class="a_menu"><li>La galerie</li></a>
            </ul>
          </nav>
          </div>
        <h1>Recette de Luxe</h1>
        <form class="formulaire">
        <label for="recettes" id="questions-form">Une recette en tête ? : </label>
        <input id="nomRecette" type="text" name="nomRecette" placeholder="Nom d'une recette">
        </br></br>

        <div class="invisible">
          <label for="recettes" id="questions-form">Quel type de recette voulez vous ? : </label>
          <select id="type" class="liste-choix" name="element">
            <option value=""></option>
            <option value="Entrée">Entrée</option>
            <option value="Plat">Plat</option>
            <option value="Dessert">Dessert</option>
            <option value="Boisson">Boisson</option>
          </select>

          <label for="recettes" id="questions-form">Quel budget avez-vous ? : </label>
          <select id="budget" class="liste-choix" name="element">
            <option value=""></option>
            <option value="Faible">Faible</option>
            <option value="Moyen">Moyen</option>
            <option value="Elevé">Elevé</option>
          </select>

          <input id="bouton_recette"  type="button" name="type_recette" value="Voir les recettes">
          </br></br>
          <label for="recettes" id="questions-form">Ajoute ta recette ! </label>
          <a href="pages/formulaire.php"><input class="ajout_recette"  id= "plus" type="button" name="ajout_recette" value="+"></a>
        </div>
     </form>

        </div>


    </header>
    <nav id="menu" class="styles_menu">
            <ul>
              <a id="entree" href="#"><li>Nos entrées</li></a>
              <a id="plat" href="#"><li>Nos plats</li></a>
              <a id= "dessert" href="#"><li>Nos desserts</li></a>
              <a id="boisson" href="#"><li>Nos boissons</li></a>
              <a id="mesRecettes" href="pages/mesRecettes.php"><li>Mes recettes</li></a>
            </ul>
          </nav>
    <div class="main_container">
      <div id="slider" class="slider"></div>
      <?php
        include_once "api/connexion.php";
       ?>


      <div id="section_recette"></div>
       </div>



    </div>
  </body>

  <script type="text/javascript" src="./js/function_mep.js"></script>
  <script type="text/javascript" src="./js/requetes.js"></script>
  <script type="text/javascript" src="./js/script.js"></script>

</html>
