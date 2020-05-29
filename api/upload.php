<?php

  include_once 'connexion.php';

  /*************************Récupération de l'id grâce au nom de la recette dans l'URL******************************/
  $id = $_GET['id']; // on récupère l'objet id de l'url
  $sql_id_recette = "SELECT id_recette FROM projets2_recette WHERE intitule = :nom_recette";
  $response[':nom_recette'] = $id;
  $res  = $connexion->prepare($sql_id_recette);
  $res->execute($response);
  foreach ($res as $ligne) {
    $id_recette = $ligne['id_recette'];
  }
  $res->closeCursor(); //sortir de la connexion*/

  if(!empty($_FILES)){
    $file_name = $_FILES['image']['name'];
    $file_extension = strrchr($file_name, ".");
    $file_tmp_name = $_FILES['image']['tmp_name']; //répertoires temporaire contenant le fichier
    $file_dest = '../api/images/'.$file_name;
    $extensions_autorisees = array('.png', '.PNG', '.jpeg', '.JPEG', '.jpg', '.JPG');

    if(in_array($file_extension, $extensions_autorisees)){ //on check l'extension
      /********************************on va parcourir la liste des images pour voir s'il n'y a pas de doublons******************/
          if(move_uploaded_file($file_tmp_name,$file_dest)){
            //création de la requete sql
            $sql = "INSERT INTO projets2_photo(cheminPhoto, id_recette) VALUES (?,?)";
            $resultats = $connexion->prepare($sql);
            $resultats->execute(array($file_name, $id_recette));
            echo('<script type="text/javascript">alert(\'votre fichier a bien été envoyé\');</script> ');
            //$resultats->closeCursor(); //sortir de la connexion*/
          }
        }
     else{
       echo('<script type="text/javascript">alert(\'Extension invalide ! Vérifiez extension PNG ou JPG\');</script> ');
    }

}



 ?>
