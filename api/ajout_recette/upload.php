<?php

  include_once 'connexion.php';

  if(!empty($_FILES)){

    var_dump($_FILES);
    $file_name = $_FILES['image']['name'];
    $file_extension = strrchr($file_name, ".");
    $file_tmp_name = $_FILES['image']['tmp_name']; //répertoires temporaire contenant le fichier
    $file_dest = '../api/images/imagesUploaded/'.$file_name;
    $extensions_autorisees = array('.png', '.PNG', '.jpeg', '.JPEG', '.jpg', '.JPG');

    if(in_array($file_extension, $extensions_autorisees)){ //on check l'extension
          if(move_uploaded_file($file_tmp_name,$file_dest)){
            //création de la requete sql
            $sql = "INSERT INTO projets2_photo(cheminPhoto, id_recette) VALUES (?,?)";
            $resultats  = $connexion->prepare($sql);
            $resultats->execute(array($file_name, 'id_recette'));
            echo "votre fichier a bien été envoyé";
          }
        }
     else{
      echo ("L'extension de votre fichier image n'est pas valide, notre site accepte les images png ou jpg");
    }

  }



 ?>
