<!DOCTYPE html>
<html lang="fr" dir="ltr">
  <head>
    <meta charset="utf-8">
    <link rel="stylesheet" href="../css/recette.css">
    <link rel="stylesheet" href="../css/requetes.css">
    <link href="https://fonts.googleapis.com/css2?family=Quicksand&display=swap" rel="stylesheet">
    <title>Mes recettes</title>
    <?php include_once '../api/upload.php'; ?>
  </head>
  <body> 
    <h1 id = "titre"></h1>
    <h2 id = "type"></h2>
    
    <div id="section_recette">
      <!-- <div id = photo class="image-recette"></div> -->       
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
      <div id="photos">
        <img id="photoRecette">
      </div>
      <div id="info-recette">
        <div class="materiel">
          <div class = 'ingredients'>
            <h3 class="titre-paragraphe">Ingrédients </h3>
            <div id = "ingredients"></div>  
          </div>
          <div class = 'ustensiles'>
            <h3 class="titre-paragraphe">Ustensiles </h3>
            <div id = "ustensiles"></div>  
          </div>
        </div>
        <div id="barre-separation"></div>
        <div class = 'etapes'>
          <h3 class="titre-paragraphe">Préparation </h3>
          <div id = "etapes"></div>  
        </div> 
      </div>   
        <div id=auteur>
          <!-- <h3>Recette publiée par </h3> -->
          <i><div id = "pseudo">Recette publiée par </div></i>
        
          
        </div>
     </div>
      <div id="section_recette"></div>
      <div class="formulaire-ajout-image">
        <h1 id="choix-img">Ajoute ton image</h1>
        <form class="formulaire_upload" method="POST" enctype="multipart/form-data">
          <!-- <label for="file" class="label-file">Choisir une image</label> -->         
          <input type="file" class="input-file" name="image">
          <input id="input-submit" type="submit" name="envoyer" value="Ajouter mon image">
        </form>
      </div>
  </body>
  <script type="text/javascript" src="../js/pageRecette.js"></script>
</html>
