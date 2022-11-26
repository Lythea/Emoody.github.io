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
  $q1 = $_POST['q1'];
  $q2 = $_POST['q2'];
  $q3r1 = $_POST['q3r1'];
  $q3r2 = $_POST['q3r1'];
  $q3r3 = $_POST['q3r1'];
  $q3r4 = $_POST['q3r1'];
  $q3r5 = $_POST['q3r1'];
  $q4 = $_POST['q4'];
  $q5 = $_POST['q5'];
  $q6 = $_POST['q6'];
  $q7r1 = $_POST['q7r1'];
  $q7r2 = $_POST['q7r2'];
  $q7r3 = $_POST['q7r3'];
  $q7r4 = $_POST['q7r4'];
  $q7r5 = $_POST['q7r5'];
  $q8 = $_POST['q8'];
  $q9r1 = $_POST['q9r1'];
  $q9r2 = $_POST['q9r2'];
  $q10 = $_POST['q10'];

  $sql = "INSERT into healthindex (id,q1,q2,q3r1,q3r2,q3r3,q3r4,q3r5,q4,q5,q6,q7r1,q7r2,q7r3,q7r4,q7r5,q8,q9r1,q9r2,q10)
  VALUES ('$id','$q1','$q2','$q3r1','$q3r2','$q3r3','$q3r4','$q3r5','$q4','$q5','$q6','$q7r1','$q7r2','$q7r3','$q7r4','$q7r5','$q8','$q9r1','$q9r2','$q10')";
  $result = $conn->query($sql);
    if($result===TRUE){
      echo json_encode(['data' => 'Data Registered']);
    }else
      echo json_encode(['data' => 'Error']);
$conn->close();
exit();
?>

