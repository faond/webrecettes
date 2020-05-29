<!DOCTYPE html>
<html lang="fr" dir="ltr">
  <head>
    <meta charset="utf-8">
    <link rel="stylesheet" href="../css/recette.css">
    <link rel="stylesheet" href="../css/requetes.css">
    <title>Mes recettes</title>
    <?php include_once '../api/upload.php'; ?>
  </head>
  <body>
      <div id="section_recette"></div>
      <h1>Choisis ta recette et ajoute une image</h1>
      <form class="formulaire_upload" method="POST" enctype="multipart/form-data">
        <input type="file" name="image">
        <input type="submit" name="envoyer" value="Ajouter mon image">
      </form>
  </body>
  <script type="text/javascript" src="../js/pageRecette.js"></script>
</html>
