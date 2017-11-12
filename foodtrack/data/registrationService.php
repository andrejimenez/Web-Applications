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
		
		$sql = "SELECT email FROM restaurante WHERE email = '$userEmail'";
		$result = $conn->query($sql);

		if ($result->num_rows > 0)
		{
			header('HTTP/1.1 409 Conflict, Username already in use please select another one');
		    die("Email already in use.");
		}
		else
		{
			$userName = $_POST['userName'];
			$userPassword= $_POST['userPassword'];
			
			$sql = "INSERT INTO restaurante (nombre, email, pass) VALUES ('$userName', '$userEmail', '$userPassword')";
	    	
	    	if (mysqli_query($conn, $sql)) 
	    	{
	    		// Abrir y guardar datos en la sesion
				session_start();

				$_SESSION["nombre"] = $userName;
				$_SESSION["email"] = $userEmail;
			    echo json_encode("New record created successfully");
			} 
			else 
			{
				header('HTTP/1.1 500 Bad connection, something went wrong while saving your data, please try again later');
			    die("Error: " . $sql . "\n" . mysqli_error($conn));
			}
		}
	} 

?>
