<?php

include_once "../connexion.php";
header('Content-Type: application/json; charset=UTF-8');
header('HTTP/1.1 200 OK');


$method=strtolower($_SERVER['REQUEST_METHOD']);

if ($method == 'post') {
  $json = file_get_contents('php://input');
  $data = json_decode($json, TRUE);

  $pseudo = $data['pseudo_ajout'];
  $sql = "INSERT INTO projets2_auteur VALUES (:pseudo)";
  $response[':pseudo']=$pseudo;
  $resultats  = $connexion->prepare($sql);
  $resultats->execute($response);


  if ($resultats){
    $response = json_encode("Le pseudo a été ajouté");
    echo $response;
  }

		else{
      $response = json_encode("erreur");
      echo $response;
    }
    $resultats->closeCursor();

}
else {
  http_response_code(404);
}

// faire des fonctions qui permettent d'appeler pluseiurs fichiers php

?>
