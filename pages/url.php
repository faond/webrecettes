<?php

header('Content-Type: application/json; charset=UTF-8');
header('HTTP/1.1 200 OK');

$method=strtolower($_SERVER['REQUEST_METHOD']); //On recupère la méthode

if ($method == 'get') {
  $id = $_GET['id'];
  $response = json_encode(array('nom' => $id));
  echo $response;
 // var_dump($response);
}

else {
  http_response_code(404);
}
header('Location : pageRecette.php');
 ?>