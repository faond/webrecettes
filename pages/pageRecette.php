
<!DOCTYPE html>
<html lang="fr" dir="ltr">
  <head>
    <meta charset="utf-8">
    <link rel="stylesheet" href="../css/recette.css">
    <link rel="stylesheet" href="../css/requetes.css">
    <link href="https://fonts.googleapis.com/css2?family=Quicksand&display=swap" rel="stylesheet">
    <title>Mes recettes</title>
  </head>
  <body> 
    <h1 id = "titre"></h1>
    <h2 id = "type"></h2>
    <div id="section_recette">
      <div id = photo class="image-recette"></div>
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
  </body>
  <script type="text/javascript" src="../js/pageRecette.js"></script>
</html>

