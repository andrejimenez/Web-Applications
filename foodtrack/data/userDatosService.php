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

	$user = $_POST["userEmail"];
	
	$sql = "SELECT * FROM comida WHERE emailRestaurante = '$user' ORDER BY id DESC";
	$result = $conn->query($sql);
	$i = 0;
	$arr = array();
	while ($row = $result->fetch_assoc()) {
		$arr["datos"][$i]["nombre"] = $row["nombreRestaurante"];
		$arr["datos"][$i]["fecha"] = $row["dateT"];
		$arr["datos"][$i]["tomate"] = $row["tomate"];
		$arr["datos"][$i]["cebolla"] = $row["cebolla"];
		$arr["datos"][$i]["aguacate"] = $row["aguacate"];
		$arr["datos"][$i]["cilantro"] = $row["cilantro"];
		$arr["datos"][$i]["pina"] = $row["pina"];
		$arr["datos"][$i]["lechuga"] = $row["lechuga"];
		$arr["datos"][$i]["papas"] = $row["papa"];
		$arr["datos"][$i]["chile"] = $row["chile"];
		$arr["datos"][$i]["apio"] = $row["apio"];
		$arr["datos"][$i]["zanahoria"] = $row["zanahoria"];
		$arr["datos"][$i]["comentarios"] = $row["comentarios"];
		$i++;

	}
	echo json_encode($arr);

?>