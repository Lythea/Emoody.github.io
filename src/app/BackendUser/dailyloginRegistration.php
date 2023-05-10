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
$year = $_POST['date1'];
$month= $_POST['date2'];
$day= $_POST['date3'];
$email= $_POST['email'];
$date=$_POST['date'];
$companyname = $_POST['company'];
$sql = "INSERT into dailylogin (id,companyname,Year,Month,Day,email,date) VALUES ('$id','$companyname','$year','$month','$day','$email','$date')";
$result = $conn->query($sql);
  if($result===TRUE){
    echo json_encode(['data' => 'Data registered']);
  }else{
    echo json_encode(['data' => 'Error']);
  }

$conn->close();
exit();
?>


