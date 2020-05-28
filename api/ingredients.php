<?php

include_once "connexion.php";

header('Content-Type: application/json; charset=UTF-8');
header('HTTP/1.1 200 OK');

$method=strtolower($_SERVER['REQUEST_METHOD']);

if ($method == 'get') { 
    $nomRecette = $_GET['nomRecette'];

    $sql = "SELECT projets2_ingredient.libelle, projets2_comprend.quantite, projets2_ingredient.unite
    FROM projets2_ingredient JOIN projets2_comprend on projets2_ingredient.id_ingredient = projets2_comprend.id_ingredient
    JOIN projets2_recette ON projets2_recette.id_recette = projets2_comprend.id_recette
    WHERE projets2_recette.intitule LIKE 'Houmous'"; 

$response[':intitule']=$nomRecette; 

$resultats  = $connexion->prepare($sql);
$resultats->execute($response);

$res=$resultats->fetchAll(PDO::FETCH_ASSOC);

$resultats->closeCursor(); /*sortir de la connexion*/

$response = json_encode($res);

echo $response;

}
else {
  http_response_code(404);
}

 ?>
