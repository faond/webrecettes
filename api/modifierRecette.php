<?php

include_once "connexion.php";

  header('Content-Type: application/json; charset=UTF-8');
  header('HTTP/1.1 200 OK');

$method=strtolower($_SERVER['REQUEST_METHOD']); //On recupère la méthode

if ($method == 'put') {

  // // On récupère directement le body
   $json = file_get_contents('php://input');
  // // Conversion en un tableau associatif (le TRUE à la fin)
   $data = json_decode($json, TRUE);
   $change = $data['changement'];
   $valeur = $data['valeur'];
   $intitule = $data['intitule'];



/******************************on récupère l'id recette*********************************/
$sql_id_recette = "SELECT id_recette FROM projets2_recette WHERE intitule = :intitule";
// $intitule[':intitule'] = $intitule;
$res_id_recette = $connexion->prepare($sql_id_recette);
$res_id_recette->execute(array(':intitule' => $intitule));
foreach ($res_id_recette as $element) {
  $id_recette = $element['id_recette'];
}

/*************************************on va modifier la table recette*******************************/
 if($change == 'intitule'){
   $sql = "UPDATE projets2_recette SET intitule = :value WHERE id_recette = :id_recette";
   $resultats = $connexion->prepare($sql);
   $resultats->execute(array(':value' => $valeur, ':id_recette' => $id_recette));
   $res = $resultats->fetchAll(PDO::FETCH_ASSOC);
 }
 else if ($change == 'resume') {
   $sql = "UPDATE projets2_recette SET resume = :value WHERE id_recette = :id_recette";
   $resultats = $connexion->prepare($sql);
   $resultats->execute(array(':value' => $valeur, ':id_recette' => $id_recette));
   $res = $resultats->fetchAll(PDO::FETCH_ASSOC);
 }

  $resultats->closeCursor(); //sortir de la connexion*/

  $response = json_encode($res);
  echo $response;

}
else {
  http_response_code(404);
}


 ?>
