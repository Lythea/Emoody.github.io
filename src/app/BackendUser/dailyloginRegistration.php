<?php

header ('Access-Control-Allow-Origin: *');
header ('Access-Control-Allow-Headers: *');
header ('Access-Control-Allow-Methods: POST, GET, OPTIONS, DELETE, PUT');

$servername = "localhost";
$username = "root";
$password = "";
$db = $_POST['company'];
// Connect with the database.


  $conn= new mysqli($servername, $username, $password,$db);
  if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);}

$id = $_POST['id'];
$year = $_POST['date1'];
$month= $_POST['date2'];
$day= $_POST['date3'];
$email= $_POST['email'];
$date=$_POST['date'];

$sql = "INSERT into dailylogin (id,Year,Month,Day,email,reg_date) VALUES ('$id','$year','$month','$day','$email','$date')";
$result = $conn->query($sql);
  if($result===TRUE){
    echo json_encode(['data' => 'Data registered']);
  }else{
    echo json_encode(['data' => 'Error']);
  }

$conn->close();
exit();
?>


