<?php
	header('Accept: application/json');
	header('Content-type: application/json');

	$servername = "localhost";
	$username = "root";
	$password = "root";
	$dbname = "foodtrack";

	// Create connection
	$conn = new mysqli($servername, $username, $password, $dbname);
	
	// Check connection
	if ($conn->connect_error) 
	{
	    header('HTTP/1.1 500 Bad connection to Database');
	    die("The server is down, we couldn't establish the DB connection");
	}
	else
	{
		$userEmail = $_POST['userEmail'];
		
		$sql = "DELETE FROM restaurante WHERE email = '$userEmail'";
		$result = $conn->query($sql);
		$sql = "DELETE FROM comida WHERE emailRestaurante = '$userEmail'";
		$result = $conn->query($sql);
		echo json_encode("restaurante eliminado");
		
	} 

?>
