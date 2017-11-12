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

	$user = $_SESSION["email"];

	
	$sql = "SELECT * FROM restaurante where email = '$user'";
	$result = $conn->query($sql);
	$i = 0;
	$arr = array();
	while ($row = $result->fetch_assoc()) {
		$arr["datos"][$i]["nombre"] = $row["nombre"];
		$arr["datos"][$i]["tomateT"] = $row["tomateT"];
		$arr["datos"][$i]["cebollaT"] = $row["cebollaT"];
		$arr["datos"][$i]["aguacateT"] = $row["aguacateT"];
		$arr["datos"][$i]["cilantroT"] = $row["cilantroT"];
		$arr["datos"][$i]["pinaT"] = $row["pinaT"];
		$arr["datos"][$i]["lechugaT"] = $row["lechugaT"];
		$arr["datos"][$i]["papasT"] = $row["papasT"];
		$arr["datos"][$i]["chileT"] = $row["chileT"];
		$arr["datos"][$i]["apioT"] = $row["apioT"];
		$arr["datos"][$i]["zanahoriaT"] = $row["zanahoriaT"];
		
		$i++;

	}
	echo json_encode($arr);

?>