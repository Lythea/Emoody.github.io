<?php
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Headers: Content-Type: application/json, X-Auth-Token, Authorization, Origin');
header ('Access-Control-Allow-Methods: POST, GET, OPTIONS, DELETE, PUT');
header('Content-Type: application/json');
$servername = "preast.iad1-mysql-e2-17b.dreamhost.com";
$port = "3306";
$username = "pph_moody";
$password = "PPH_Student@2023";
$db="moody";
// Create connection
$conn = new mysqli($servername, $username, $password,$db,$port);
  if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);}

    $id = $_POST['id'];
    $user = $_POST['email'];
    $pass = $_POST['pass'];
    $companyname = $_POST['company'];
    $sql = "INSERT INTO suggestions(id,companyname,user,pass) VALUES ('$id','$companyname','$user','$pass')";
    $result = $conn->query($sql);
    if($result===TRUE){
      echo json_encode(['data' => 'Success']);
    }else{
      echo json_encode(['data' => 'Error']);
    }
    $conn->close();
    exit();

?>

