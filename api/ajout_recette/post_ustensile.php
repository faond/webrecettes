<?php

include_once "../connexion.php";
header('Content-Type: application/json; charset=UTF-8');
header('HTTP/1.1 200 OK');


$method=strtolower($_SERVER['REQUEST_METHOD']);

if ($method == 'post') {
  $json = file_get_contents('php://input');
  $data = json_decode($json, TRUE);




  $nom = $data;


  $poster_matos= "INSERT INTO projets2_ustensile (libelle) VALUES (:nom)";

  $response1[':nom']=$nom;

  $resultats1  = $connexion->prepare($poster_matos);
  $resultats1->execute($response1);

  $resultats1->closeCursor();

  $envoie = json_encode($nom);
  echo $envoie;


}
else {
  http_response_code(404);
}


?>
