<?php

include_once "../connexion.php";
header('Content-Type: application/json; charset=UTF-8');
header('HTTP/1.1 200 OK');


$method=strtolower($_SERVER['REQUEST_METHOD']);

if ($method == 'post') {
  $json = file_get_contents('php://input');
  $data = json_decode($json, TRUE);



  $id = $data['id_recette'];
  $description = $data['description'];
  $num = $data['etape'];


  $poster_etapes= "INSERT INTO projets2_etape VALUES (:num_etape, :description, :id_recette)";

  $response[':num_etape']=$num;
  $response[':description']=$description;
  $response[':id_recette']=$id;

  $resultats  = $connexion->prepare($poster_etapes);
  $resultats->execute($response);




  $resultats->closeCursor();

  $envoie = json_encode("ok");
  echo $envoie;

}
else {
  http_response_code(404);
}


?>
