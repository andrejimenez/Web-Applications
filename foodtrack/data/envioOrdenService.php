<?php
	header('Accept: application/json');
	header('Content-type: application/json');

	$servername = "localhost";
	$username = "root";
	$password = "root";
	$dbname = "foodtrack";

	// Create connection
	$conn = new mysqli($servername, $username, $password, $dbname);
	
	date_default_timezone_set("America/Monterrey");

	// Check connection
	if ($conn->connect_error) 
	{
	    header('HTTP/1.1 500 Bad connection to Database');
	    die("The server is down, we couldn't establish the DB connection");
	}
	else
	{
			$email = $_POST['userEmail'];
			$tomate = $_POST['tomate'];
			$cebolla = $_POST['cebolla'];
			$aguacate = $_POST['aguacate'];
			$cilantro = $_POST['cilantro'];
			$pina = $_POST['pina'];
			$lechuga = $_POST['lechuga'];
			$papas = $_POST['papas'];
			$chile = $_POST['chile'];
			$apio = $_POST['apio'];
			$zanahoria = $_POST['zanahoria'];
			
			

				$sql = "SELECT tomateT FROM restaurante WHERE email = '$email'";

				$result = $conn->query($sql);
				$row = $result->fetch_assoc();
				$newTomateT = $row["tomateT"];

				$newTomateT = $newTomateT - $tomate;

				$sql = "UPDATE restaurante SET tomateT = '$newTomateT' WHERE email = '$email'";

				$result = $conn->query($sql);


				$sql = "SELECT cebollaT FROM restaurante WHERE email = '$email'";

				$result = $conn->query($sql);
				$row = $result->fetch_assoc();
				$newCebollaT = $row["cebollaT"];

				$newCebollaT = $newCebollaT - $cebolla;

				$sql = "UPDATE restaurante SET cebollaT = '$newCebollaT' WHERE email = '$email'";

				$result = $conn->query($sql);


				$sql = "SELECT aguacateT FROM restaurante WHERE email = '$email'";

				$result = $conn->query($sql);
				$row = $result->fetch_assoc();
				$newAguacateT = $row["aguacateT"];

				$newAguacateT = $newAguacateT - $aguacate;

				$sql = "UPDATE restaurante SET aguacateT = '$newAguacateT' WHERE email = '$email'";

				$result = $conn->query($sql);


				$sql = "SELECT cilantroT FROM restaurante WHERE email = '$email'";

				$result = $conn->query($sql);
				$row = $result->fetch_assoc();
				$newCilantroT = $row["cilantroT"];

				$newCilantroT = $newCilantroT - $cilantro;

				$sql = "UPDATE restaurante SET cilantroT = '$newCilantroT' WHERE email = '$email'";

				$result = $conn->query($sql);


				$sql = "SELECT pinaT FROM restaurante WHERE email = '$email'";

				$result = $conn->query($sql);
				$row = $result->fetch_assoc();
				$newPinaT = $row["pinaT"];

				$newPinaT = $newPinaT - $pina;

				$sql = "UPDATE restaurante SET pinaT = '$newPinaT' WHERE email = '$email'";

				$result = $conn->query($sql);



				$sql = "SELECT lechugaT FROM restaurante WHERE email = '$email'";

				$result = $conn->query($sql);
				$row = $result->fetch_assoc();
				$newLechugaT = $row["lechugaT"];

				$newLechugaT = $newLechugaT - $lechuga;

				$sql = "UPDATE restaurante SET lechugaT = '$newLechugaT' WHERE email = '$email'";

				$result = $conn->query($sql);


				$sql = "SELECT papasT FROM restaurante WHERE email = '$email'";

				$result = $conn->query($sql);
				$row = $result->fetch_assoc();
				$newPapasT = $row["papasT"];

				$newPapasT = $newPapasT - $papas;

				$sql = "UPDATE restaurante SET papasT = '$newPapasT' WHERE email = '$email'";

				$result = $conn->query($sql);

				$sql = "SELECT chileT FROM restaurante WHERE email = '$email'";

				$result = $conn->query($sql);
				$row = $result->fetch_assoc();
				$newChileT = $row["chileT"];

				$newChileT = $newChileT - $chile;

				$sql = "UPDATE restaurante SET chileT = '$newChileT' WHERE email = '$email'";

				$result = $conn->query($sql);


				$sql = "SELECT apioT FROM restaurante WHERE email = '$email'";

				$result = $conn->query($sql);
				$row = $result->fetch_assoc();
				$newApioT = $row["apioT"];

				$newApioT = $newApioT - $apio;

				$sql = "UPDATE restaurante SET apioT = '$newApioT' WHERE email = '$email'";

				$result = $conn->query($sql);


				$sql = "SELECT zanahoriaT FROM restaurante WHERE email = '$email'";

				$result = $conn->query($sql);
				$row = $result->fetch_assoc();
				$newZanahoriaT = $row["zanahoriaT"];

				$newZanahoriaT = $newZanahoriaT - $zanahoria;

				$sql = "UPDATE restaurante SET zanahoriaT = '$newZanahoriaT' WHERE email = '$email'";

				$result = $conn->query($sql);


				echo json_encode(0);
	} 

?>