<?php

  $user = "root";
  $pass = "";
  //$pass = "root";

  try{
    $connexion = new PDO('mysql:host=localhost;dbname=_projets2_bdd;port=3306', $user, $pass, array(PDO::MYSQL_ATTR_INIT_COMMAND => "SET NAMES utf8"));
    //mysql:host --> serveur sur lequel tu héberges ta base de données, pour nous c'est localhost
    //dbname : nom de la BdD
    // user
    // mot de passe
    //var_dump($connexion);
  }
  catch(PDOExeption $e){
    echo "Error : .$e";
  }

?>
