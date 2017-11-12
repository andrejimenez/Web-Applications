<?php
	$servername = "localhost";
	$username = "root";
	$password = "root";
	$dbname = "foodtrack";

	// Create connection
	$conn = mysqli_connect($servername, $username, $password, $dbname);

	// Check connection
	if (!$conn) {
	    die("Connection failed: " . mysqli_connect_error());
	}
	//echo "Connected successfully";

	session_start();

	$user = $_POST["userSearch"];
	
	$sql = "SELECT * FROM restaurante WHERE nombre = '$user' OR email = '$user'";
	$result = $conn->query($sql);
	$i = 0;
	$arr = array();
	while ($row = $result->fetch_assoc()) {
		$arr["datos"][$i]["nombre"] = $row["nombre"];
		$arr["datos"][$i]["email"] = $row["email"];
		$i++;

	}
	echo json_encode($arr);

?>