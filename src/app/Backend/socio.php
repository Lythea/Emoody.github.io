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

  $id = $_POST['id'];
  $date = $_POST['date'];
  $sq1 = $_POST['sq1'];
  $sq2 = $_POST['sq2'];
  $sq3 = $_POST['sq3'];
  $sq4 = $_POST['sq4'];
  $sq5 = $_POST['sq5'];
  $sq6 = $_POST['sq6'];
  $sq7 = $_POST['sq7'];
  $sq8 = $_POST['sq8'];
  $sq9 = $_POST['sq9'];
  $sq10 = $_POST['sq10'];
  $sq11 = $_POST['sq11'];

  $sql = "INSERT into socio (id,date,sq1,sq2,sq3,sq4,sq5,sq6,sq7,sq8,sq9,sq10,sq11)
  VALUES ('$id','$date','$sq1','$sq2','$sq3','$sq4','$sq5','$sq6','$sq7','$sq8','$sq9','$sq10','$sq11')";
  $result = $conn->query($sql);
    if($result===TRUE){
      echo json_encode(['data' => 'Data Registered']);
    }else
      echo json_encode(['data' => 'Error']);
$conn->close();
exit();
?>

