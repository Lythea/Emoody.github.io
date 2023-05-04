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
if ($company == 'BSU'){
  $conn= new mysqli($servername, $username, $password,$company);
  if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);}

    $id = $_POST['id'];
    $user = $_POST['email'];
    $pass = $_POST['pass'];
    $sql = "INSERT INTO suggestions(id,user,pass) VALUES ('$id','$user','$pass')";
    $result = $conn->query($sql);
    if($result===TRUE){
      echo json_encode(['data' => 'Success']);
    }else{
      echo json_encode(['data' => 'Error']);
    }
    $conn->close();
    exit();

?>

