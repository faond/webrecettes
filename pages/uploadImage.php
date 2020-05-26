<!DOCTYPE html>
<html lang="fr" dir="ltr">
  <head>
    <meta charset="utf-8">
    <title>Upload ton image</title>
    <link rel="stylesheet" href="../css/styles.css">
  </head>
  <body>
    <?php include_once '../api/upload.php'; ?>
    <h1>Choisis ta recette et ajoute une image</h1>
    <form class="formulaire_upload" method="POST" enctype="multipart/form-data">
      <input type="file" name="image">
      <input type="submit" name="envoyer" value="Ajouter mon image">
    </form>
  </body>
  <script type="text/javascript" src="../js/liste_recette_upload_image.js"></script>
</html>
