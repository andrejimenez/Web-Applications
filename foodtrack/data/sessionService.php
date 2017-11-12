<?php
	header('Content-type: application/json');

	session_start();
	if (isset($_SESSION["email"]))
	{
		echo json_encode(array("nombre" => $_SESSION["nombre"],"email" => $_SESSION["email"]));
	}
	else
	{
		header('HTTP/1.1 406 Session has expired.');
		die("Your session has expired you will be redirected to the index.");
	}

?>