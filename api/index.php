<?php

$url = $_GET['url'];
$url_parts = explode("/", $url);

$controllerName = $url_parts[0]."Controller";

require "$controllerName.php";

$controller = new $controllerName();

$method = $url_parts[1];

echo json_encode($controller->$method());