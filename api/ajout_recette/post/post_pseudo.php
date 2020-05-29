<?php

include_once "../../connexion.php";
header('Content-Type: application/json; charset=UTF-8');
header('HTTP/1.1 200 OK');


$method=strtolower($_SERVER['REQUEST_METHOD']);

if ($method == 'post') {
  $json = file_get_contents('php://input');
  $data = json_decode($json, TRUE);


  $pseudo = $data['pseudo_ajout'];

  $sql_pseudo = "INSERT INTO projets2_auteur VALUES (:pseudo)";
  $rempliPseudo[':pseudo']=$pseudo;
  $requetePseudo = $connexion->prepare($sql_pseudo);
  $requetePseudo->execute($rempliPseudo);


  $requetePseudo->closeCursor();


  $envoie = json_encode($pseudo);
  echo $envoie;

}
else {
  http_response_code(404);
}


?>
