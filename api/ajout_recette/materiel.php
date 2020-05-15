<?php

include_once "../connexion.php";
header('Content-Type: application/json; charset=UTF-8');
header('HTTP/1.1 200 OK');

$method=strtolower($_SERVER['REQUEST_METHOD']);

if ($method == 'get') {

  $matos = "SELECT libelle FROM projets2_ustensile";

  $resultats = $connexion->query($matos);
  $res = $resultats->fetchAll(PDO::FETCH_ASSOC);
  $resultats->closeCursor();
  $response = json_encode($res);
  echo $response;

}
else {
  http_response_code(404);
}

?>
