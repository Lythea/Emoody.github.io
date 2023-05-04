<?php

header ('Access-Control-Allow-Origin: *');
header ('Access-Control-Allow-Headers: *');
header ('Access-Control-Allow-Methods: POST, GET, OPTIONS, DELETE, PUT');
$servername = "localhost";
$username = "root";
$password = "";

// Connect with the database.
$company = $_POST['company'];
// Connect with the database.
  $conn= new mysqli($servername, $username, $password,$company);
  if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);}


  $date = $_POST['date'];
  $id = $_POST['id'];
  $emoji = $_POST['emoji'];
  $range = $_POST['range'];

  $sql = "INSERT into moodtrack (id,date,emoji,scale) VALUES ('$id','$date','$emoji','$range')";
  $result = $conn->query($sql);
    if($result===TRUE){
      echo json_encode(['data' => 'Data registered']);
    }else{
      echo json_encode(['data' => 'Error']);
    }
    $conn->close();
    exit();

?>

