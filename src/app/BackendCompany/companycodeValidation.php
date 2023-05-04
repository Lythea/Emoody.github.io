<?php
header ('Access-Control-Allow-Origin: *');
header ('Access-Control-Allow-Headers: *');
header ('Access-Control-Allow-Methods: POST, GET, OPTIONS, DELETE, PUT');

$servername = "localhost";
$username = "root";
$password = "";
$db ="developers";
// Create connection
$conn = new mysqli($servername, $username, $password,$db);

// Check connection
if ($conn->connect_error) {
  die("Connection failed: " . $conn->connect_error);
}

$companyname = $_POST['rawCompany'];
$position = $_POST['rawPosition'];


$sql = "SELECT(SELECT $position FROM companies WHERE company ='$companyname') AS position";
  $result = $conn->query($sql);
  if ($result->num_rows > 0) {
    $data = $result->fetch_all(MYSQLI_ASSOC);
    echo json_encode(['data' => $data]);
  } else {
    echo json_encode(['data'=> 'Not Found!']);
}


$conn->close();
?>
