<?php

include_once "connexion.php";

header('Content-Type: application/json; charset=UTF-8');
header('HTTP/1.1 200 OK');

$method=strtolower($_SERVER['REQUEST_METHOD']); //On recupère la méthode

if ($method == 'get') {

$type = $_GET['type'];

$sql = "SELECT projets2_photo.cheminPhoto
FROM projets2_photo JOIN projets2_recette
ON projets2_recette.id_recette = projets2_photo.id_recette
WHERE projets2_recette.id_type LIKE :id_type";


if($type == 'Entrées'){
  $response[':id_type']='1';
}
else if($type == 'Plats'){
  $response[':id_type']='2';
}
else if($type == 'Desserts'){
  $response[':id_type']='3';
}
else if($type == 'Boissons'){
  $response[':id_type']='4';
}
else if($type == 'Tout voir'){
  $response[':id_type']='%';
}



$resultats  = $connexion->prepare($sql);
$resultats->execute($response);

$res = $resultats->fetchAll(PDO::FETCH_ASSOC);

$resultats->closeCursor(); //sortir de la connexion*/

$response = json_encode($res);
echo $response;

}
else {
  http_response_code(404);
}


 ?>
