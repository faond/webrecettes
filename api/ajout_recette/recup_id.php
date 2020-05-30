<?php

include_once "../connexion.php";
header('Content-Type: application/json; charset=UTF-8');
header('HTTP/1.1 200 OK');


$method=strtolower($_SERVER['REQUEST_METHOD']);

if ($method == 'post') {
  $json = file_get_contents('php://input');
  $data = json_decode($json, TRUE);

 //   if($data[4]=="exist"){
 //     $formulaire = $data[0];
 //     $table = $data[1];
 //     $nom = $data[2];
 //     $id = $data[3];
 // }
  // else{
    $formulaire = $data['formulaire'];
    $table = $data['table'];
    $nom = $data['nom'];
    $id = $data['id'];
  //}


  $recup_id= "SELECT $id FROM $table WHERE $nom = :formulaire";

  $response[':formulaire']=$formulaire;
  $resultats  = $connexion->prepare($recup_id);
  $resultats->execute($response);
  $id_return=$resultats->fetchAll();

  $resultats->closeCursor();

  $envoie = json_encode($id_return);
  echo $envoie;

}
else {
  http_response_code(404);
}


?>
