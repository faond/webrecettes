<?php

include_once "../../connexion.php";
header('Content-Type: application/json; charset=UTF-8');
header('HTTP/1.1 200 OK');


$method=strtolower($_SERVER['REQUEST_METHOD']);

if ($method == 'post') {
  $json = file_get_contents('php://input');
  $data = json_decode($json, TRUE);

  if($data['diff_ajout']=='Facile'){
    $diff = '1';
  }
  else if($data['diff_ajout']=='Moyen'){
    $diff = '2';
  }
  else if($data['diff_ajout']=='Difficile'){
    $diff = '2';
  }
  $pseudo = $data['pseudo_ajout'];
  $nom = $data['nom_ajout'];
  $resume = $data['resume_ajout'];
  $nbPers = $data['nb_ajout'];
  $tpsPrep = $data['tpsPrep_ajout'];
  $tpsCui = $data['tpsCui_ajout'];
  $cout = $data['cout_ajout'];
  $date = $data['date_ajout'];
  $type = $data['type_ajout'];
  $region = $data['region_ajout'];


  $sql_recette = "INSERT INTO projets2_recette (intitule, resume, nbPersonne, tpsPreparation, tpsCuisson, difficulte, typeCout, date_recette, id_type, id_region, pseudo)
  VALUES (:nom, :resume, :nbPers, :tpsPrep, :tpsCui, :diff, :cout, :date_ajout, :type, :region, :pseudo)";

  $rempliRecette[':nom']=$nom;
  $rempliRecette[':resume']=$resume;
  $rempliRecette[':nbPers']=$nbPers;
  $rempliRecette[':tpsPrep']=$tpsPrep;
  $rempliRecette[':tpsCui']=$tpsCui;
  $rempliRecette[':diff']=$diff;
  $rempliRecette[':cout']=$cout;
  $rempliRecette[':date_ajout']=$date;
  $rempliRecette[':type']=$type;
  $rempliRecette[':region']=$region;
  $rempliRecette[':pseudo']=$pseudo;
  $requeteRecette = $connexion->prepare($sql_recette);
  $requeteRecette->execute($rempliRecette);

  $envoie = json_encode($rempliRecette);
  echo $envoie;

  $requeteRecette->closeCursor();

}
else {
  http_response_code(404);
}


?>
