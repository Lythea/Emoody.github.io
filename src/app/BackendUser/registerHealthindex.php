<?php

header ('Access-Control-Allow-Origin: *');
header ('Access-Control-Allow-Headers: *');
header ('Access-Control-Allow-Methods: POST, GET, OPTIONS, DELETE, PUT');
$servername = "localhost";
$username = "root";
$password = "";

// Connect with the database.
$company = $_POST['company'];


  $conn= new mysqli($servername, $username, $password,$company);
  if ($conn->connect_error) {die("Connection failed: " . $conn->connect_error);}

  $id = $_POST['id'];
  $date1 = $_POST['date1'];
  $date2 = $_POST['date2'];
  $date3 = $_POST['date3'];
  $q2 = $_POST['dataDD1'];
  $q3r1 = $_POST['dataRadio1'];
  $q3r2 = $_POST['dataRadio2'];
  $q3r3 = $_POST['dataRadio3'];
  $q3r4 = $_POST['dataRadio4'];
  $q3r5 = $_POST['dataRadio5'];
  $q4 = $_POST['dataDD2'];
  $q5 = $_POST['dataDD3'];
  $q6 = $_POST['dataDD4'];
  $q7r1 = $_POST['dataRadio6'];
  $q7r2 = $_POST['dataRadio7'];
  $q7r3 = $_POST['dataRadio8'];
  $q7r4 = $_POST['dataRadio9'];
  $q7r5 = $_POST['dataRadio10'];
  $q8 = $_POST['dataDD5'];
  $q9r1 = $_POST['dataRadio11'];
  $q9r2 = $_POST['dataRadio12'];
  $q10 = $_POST['dataDD6'];
  $date = $_POST['date'];

  $sql = "INSERT into healthindex (id,Year,Month,Day,q2,q3r1,q3r2,q3r3,q3r4,q3r5,q4,q5,q6,q7r1,q7r2,q7r3,q7r4,q7r5,q8,q9r1,q9r2,q10,date)
  VALUES ('$id','$date1','$date2','$date3','$q2','$q3r1','$q3r2','$q3r3','$q3r4','$q3r5','$q4','$q5','$q6','$q7r1','$q7r2','$q7r3','$q7r4','$q7r5','$q8','$q9r1','$q9r2','$q10','$date')";
  $result = $conn->query($sql);
    if($result===TRUE){
      echo json_encode(['data' => 'Data Registered']);
    }else{
      echo json_encode(['data' => 'Error']);
    }
    $conn->close();
    exit();

?>

