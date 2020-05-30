<?php

include_once "../../connexion.php";
header('Content-Type: application/json; charset=UTF-8');
header('HTTP/1.1 200 OK');


$method=strtolower($_SERVER['REQUEST_METHOD']);

if ($method == 'post') {
  $json = file_get_contents('php://input');
  $data = json_decode($json, TRUE);




  $recette = $data["id_recette"];
  $ustensile = $data["id_ustensile"];


  $poster_requiert= "INSERT INTO projets2_requiert VALUES (:id_recette, :id_ustensile, '1')";

  $response1[':id_recette']=$recette;
  $response1[':id_ustensile']=$ustensile;

  $resultats1  = $connexion->prepare($poster_requiert);
  $resultats1->execute($response1);

  $resultats1->closeCursor();

  $envoie = json_encode($response1);
  echo $envoie;


}
else {
  http_response_code(404);
}


?>
