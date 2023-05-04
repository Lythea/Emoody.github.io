<?php

header ('Access-Control-Allow-Origin: *');
header ('Access-Control-Allow-Headers: *');
header ('Access-Control-Allow-Methods: POST, GET, OPTIONS, DELETE, PUT');

$servername = "localhost";
$username = "root";
$password = "";
$company = $_POST['company'];
// Connect with the database.
$conn= new mysqli($servername, $username, $password,$company);
if ($conn->connect_error) {
  die("Connection failed: " . $conn->connect_error);
  }

  $year = $_POST['date1'];
  $month = $_POST['date2'];
  $day = $_POST['date3'];

  $sql = "SELECT count(id) as TOTAL FROM dailylogin WHERE Year='$year' and Month ='$month' and Day ='$day'";
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

