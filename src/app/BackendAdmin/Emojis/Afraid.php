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
  $sql = "SELECT (SELECT COUNT(id) FROM `dataset1` WHERE emoji='Afraid' AND scale = '1' AND date='$date') as Afraid1,
  (SELECT COUNT(id) FROM `dataset1` WHERE emoji='Afraid' AND scale = '2' AND date='$date') as Afraid2,
  (SELECT COUNT(id) FROM `dataset1` WHERE emoji='Afraid' AND scale = '3' AND date='$date') as Afraid3,
  (SELECT COUNT(id) FROM `dataset1` WHERE emoji='Afraid' AND scale = '4' AND date='$date') as Afraid4,
  (SELECT COUNT(id) FROM `dataset1` WHERE emoji='Afraid' AND scale = '5' AND date='$date') as Afraid5,
  (SELECT COUNT(id) FROM `dataset1` WHERE emoji='Afraid' AND scale = '6' AND date='$date') as Afraid6,
  (SELECT COUNT(id) FROM `dataset1` WHERE emoji='Afraid' AND scale = '7' AND date='$date') as Afraid7,
  (SELECT COUNT(id) FROM `dataset1` WHERE emoji='Afraid' AND scale = '8' AND date='$date') as Afraid8,
  (SELECT COUNT(id) FROM `dataset1` WHERE emoji='Afraid' AND scale = '9' AND date='$date') as Afraid9,
  (SELECT COUNT(id) FROM `dataset1` WHERE emoji='Afraid' AND scale = '10' AND date='$date') as Afraid10
  ;";

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

