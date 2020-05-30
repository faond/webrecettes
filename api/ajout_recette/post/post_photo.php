<?php

include_once "../../connexion.php";
header('Content-Type: application/json; charset=UTF-8');
header('HTTP/1.1 200 OK');


$method=strtolower($_SERVER['REQUEST_METHOD']);

if ($method == 'post') {
  $json = file_get_contents('php://input');
  $data = json_decode($json, TRUE);


  $poster= "INSERT INTO projets2_photo (id_recette) VALUES (:id_recette)";

  $response1[':id_recette']=$data;

  $resultats1  = $connexion->prepare($poster);
  $resultats1->execute($response1);

  $resultats1->closeCursor();

  $envoie = json_encode($data);
  echo $envoie;


}
else {
  http_response_code(404);
}


?>
