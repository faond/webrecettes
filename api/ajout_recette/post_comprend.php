<?php

include_once "../connexion.php";
header('Content-Type: application/json; charset=UTF-8');
header('HTTP/1.1 200 OK');


$method=strtolower($_SERVER['REQUEST_METHOD']);

if ($method == 'post') {
  $json = file_get_contents('php://input');
  $data = json_decode($json, TRUE);




  $recette = $data["id_recette"];
  $ingredient = $data["id_ingredient"];
  $qt = $data["quantite"];


  $poster_comprend= "INSERT INTO projets2_comprend VALUES (:id_recette, :id_ingredient, :quantite)";

  $response1[':id_recette']=$recette;
  $response1[':id_ingredient']=$ingredient;
  $response1[':quantite']=$qt;

  $resultats1  = $connexion->prepare($poster_comprend);
  $resultats1->execute($response1);

  $resultats1->closeCursor();

  $envoie = json_encode($response1);
  echo $envoie;


}
else {
  http_response_code(404);
}


?>
