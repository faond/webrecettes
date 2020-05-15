<?php

include_once "connexion.php";

header('Content-Type: application/json; charset=UTF-8');
header('HTTP/1.1 200 OK');

$method=strtolower($_SERVER['REQUEST_METHOD']); //On recupère la méthode

if ($method == 'get') { //on regarde si la méthode est bien en GET

$sql = "SELECT intitule FROM projets2_recette";

$resultats  = $connexion->query($sql);

$res = $resultats->fetchAll(PDO::FETCH_ASSOC);

$resultats->closeCursor(); //sortir de la connexion*/

$response = json_encode($res);

echo $response;

}
else {
  http_response_code(404);
}

 ?>
