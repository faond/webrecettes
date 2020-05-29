<?php

include_once "connexion.php";
// include_once "liste_recette.php";

/*$title = strtolower($_GET['title']);
$date = $_GET['date'];
$director = strtolower($_GET['director']*/

header('Content-Type: application/json; charset=UTF-8');
header('HTTP/1.1 200 OK');

$method=strtolower($_SERVER['REQUEST_METHOD']); //On recupère la méthode

if ($method == 'get') { //on regarde si la méthode est bien en GET
  // $liste_recettes = $test; 
  //vu qu'on est en GET de ses morts on récupère les éléments dans l'URL
  $type = $_GET['type'];
  $nomRecette = $_GET['nomRecette'];
  $budget = $_GET['budget'];

  $requete_liste_recettes = "SELECT intitule FROM projets2_recette";
  $resultats_liste  = $connexion->query($requete_liste_recettes);
  //var_dump($resultats_liste);
  //$res_liste = $resultats_liste->fetchAll(PDO::FETCH_ASSOC);
  $resultats_liste->closeCursor(); //sortir de la connexion*/
  //$liste_recettes = json_encode($res_liste);

 
  // strcmp($nomRecette, $resultat[i]);
// On récupère directement le body
//$json = file_get_contents('php://input');

// Conversion en un tableau associatif (le TRUE à la fin)
//$data = json_decode($json, TRUE);


//$type = $data['type'];
//var_dump($data);

$sql = "SELECT projets2_recette.intitule,
        projets2_recette.nbPersonne, projets2_recette.tpsPreparation, projets2_recette.tpsCuisson, projets2_recette.difficulte,
        projets2_recette.typeCout, projets2_type.typeRecette, projets2_recette.resume, projets2_recette.pseudo, 
        projets2_recette.typeCout, projets2_etape.description,  projets2_etape.numEtape, projets2_photo.cheminPhoto
FROM projets2_recette JOIN projets2_type ON projets2_recette.id_type = projets2_type.id_type 
                      JOIN projets2_etape ON projets2_etape.id_recette = projets2_recette.id_recette
                      JOIN projets2_photo ON projets2_photo.id_recette = projets2_recette.id_recette
                      WHERE projets2_type.typeRecette LIKE :type
                      AND projets2_recette.typeCout LIKE :budget
                      AND projets2_recette.intitule LIKE :nomRecette"; 

$response[':type']='%'; 
$response[':nomRecette']='%'; 
$response[':budget']='%'; 

if($type != NULL){
  $response[':type'] = $type; 
}

if($budget != NULL){
  $response[':budget'] = $budget;    
}

if($nomRecette != NULL){
  $response[':nomRecette'] = $nomRecette;
}

$resultats  = $connexion->prepare($sql);
$resultats->execute($response);

$res=$resultats->fetchAll(PDO::FETCH_ASSOC);

$resultats->closeCursor(); //sortir de la connexion*/

$response = json_encode($res);

echo $response;

}
else {
  http_response_code(404);
}

 ?>
