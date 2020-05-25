<?php

include_once "../connexion.php";
header('Content-Type: application/json; charset=UTF-8');
header('HTTP/1.1 200 OK');


$method=strtolower($_SERVER['REQUEST_METHOD']);

if ($method == 'post') {
  $json = file_get_contents('php://input');
  $data = json_decode($json, TRUE);




  $nom = $data['region'];


  $poster_region= "INSERT INTO projets2_region (nom) VALUES (:nom)";

  $response1[':nom']=$nom;

  $resultats1  = $connexion->prepare($poster_region);
  $resultats1->execute($response1);

  $resultats1->closeCursor();

  $envoie = json_encode($nom);
  echo $envoie;


}
else {
  http_response_code(404);
}


?>
