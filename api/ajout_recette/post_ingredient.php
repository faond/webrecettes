<?php

include_once "../connexion.php";
header('Content-Type: application/json; charset=UTF-8');
header('HTTP/1.1 200 OK');


$method=strtolower($_SERVER['REQUEST_METHOD']);

if ($method == 'post') {
  $json = file_get_contents('php://input');
  $data = json_decode($json, TRUE);

  $libelle = $data[0];
  $unite= $data[1];

  $poster_ingredient= "INSERT INTO projets2_ingredient (libelle, unite, type) VALUES (:nom, :unite, '')";

  $response[':nom']=$libelle;
  $response[':unite']=$unite;

  $resultats  = $connexion->prepare($poster_ingredient);
  $resultats->execute($response);

  $resultats->closeCursor();


  $envoie = json_encode($response[':nom']);
  echo $envoie;


}
else {
  http_response_code(404);
}


?>
