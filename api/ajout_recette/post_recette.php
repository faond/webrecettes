<?php

include_once "../connexion.php";
header('Content-Type: application/json; charset=UTF-8');
header('HTTP/1.1 200 OK');

$method=strtolower($_SERVER['REQUEST_METHOD']);

if ($method == 'post') {
  $json = file_get_contents('php://input');
  $data = json_decode($json, TRUE);


  /*$types = "INSERT INTO typeRecette FROM projets2_type";

  $resultats = $connexion->query($types);
  $res = $resultats->fetchAll(PDO::FETCH_ASSOC);
  $resultats->closeCursor();*/

  /*if(!isset($data['nom_ajout'] || $data['type_ajout'] || $data['nb_ajout'])){
    $res = "champs pas tous remplis";
  }
  else{
    $res = array("nom" => $data['nom_ajout'], "type" => $data['type_ajout'], "nb" => $data['nb_ajout']);
  }*/

  $res = array("nom" => $data['nom_ajout'], "type" => $data['type_ajout'], "nb" => $data['nb_ajout']);
  $response = json_encode($res);
  echo $response;

}
else {
  http_response_code(404);
}

?>
