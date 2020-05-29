<?php

include_once "../../connexion.php";
header('Content-Type: application/json; charset=UTF-8');
header('HTTP/1.1 200 OK');


$method=strtolower($_SERVER['REQUEST_METHOD']);

if ($method == 'post') {
  $json = file_get_contents('php://input');
  $data = json_decode($json, TRUE);


  $pseudo = $data['pseudo_ajout'];
  $nom = $data['nom_ajout'];
  $resume = $data['resume_ajout'];
  $nbPers = $data['nb_ajout'];
  $tpsPrep = $data['tpsPrep_ajout'];
  $tpsCui = $data['tpsCui_ajout'];
  $diff = $data['diff_ajout'];
  $cout = $data['cout_ajout'];
  $date = $data['date_ajout'];
  $type = $data['type_ajout'];
  $region = $data['region_ajout'];

  $sql_pseudo = "INSERT INTO projets2_auteur VALUES (:pseudo)";
  $rempliPseudo[':pseudo']=$pseudo;
  $requetePseudo = $connexion->prepare($sql_pseudo);
  $requetePseudo->execute($rempliPseudo);


  // $recup_id= "SELECT id_type FROM projets2_type WHERE typeRecette = :type_id ";
  // $response[':type_id']=$type;
  // $resultats  = $connexion->prepare($recup_id);
  // $resultats->execute($response);
  // $type_id=$resultats->fetch()[0];


  $sql_recette = "INSERT INTO projets2_recette VALUES ('40', :nom, :resume, :nbPers, :tpsPrep, :tpsCui, :diff, :cout, :date_ajout, :type, :region, :pseudo)";

  $rempliRecette[':nom']=$nom;
  $rempliRecette[':resume']=$resume;
  $rempliRecette[':nbPers']=$nbPers;
  $rempliRecette[':tpsPrep']=$tpsPrep;
  $rempliRecette[':tpsCui']=$tpsCui;
  $rempliRecette[':diff']=$diff;
  $rempliRecette[':cout']=$cout;
  $rempliRecette[':date_ajout']=$date;
  $rempliRecette[':type']='3';
  $rempliRecette[':region']='2';
  $rempliRecette[':pseudo']=$pseudo;
  $requeteRecette = $connexion->prepare($sql_recette);
  $requeteRecette->execute($rempliRecette);

  $requetePseudo->closeCursor();
  $requeteRecette->closeCursor();

  //$resultats->closeCursor();

  $envoie = json_encode("euh");
  echo $envoie;

}
else {
  http_response_code(404);
}

// faire des fonctions qui permettent d'appeler pluseiurs fichiers php

?>
