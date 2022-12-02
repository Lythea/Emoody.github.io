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
  $user = $_POST['email'];
  $pass = $_POST['pass'];
  $sql = "INSERT INTO suggestions(id,user,pass) VALUES ('$id','$user','$pass')";
  $result = $conn->query($sql);
      echo json_encode(['data' => 'Success!']);

$conn->close();
exit();
?>

