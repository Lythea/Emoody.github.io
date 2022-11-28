<?php

header ('Access-Control-Allow-Origin: *');
header ('Access-Control-Allow-Headers: *');
header ('Access-Control-Allow-Methods: POST, GET, OPTIONS, DELETE, PUT');

$servername = "localhost";
$username = "root";
$password = "";
$database = "dataStorage";
// Connect with the database.
$conn= new mysqli($servername, $username, $password,$database);
if ($conn->connect_error) {
  die("Connection failed: " . $conn->connect_error);
  }

  $date = $_POST['dateToday'];
  $sql = "SELECT count(id) as TOTAL FROM datalogin WHERE profile='user'";
  $result = $conn->query($sql);
    if ($result->num_rows > 0) {
      $data = $result->fetch_all(MYSQLI_ASSOC);
      echo json_encode(['data' => $data]);
    } else {
      echo json_encode(['data'=> 'Not Found!']);
  }
$conn->close();
exit();
?>

