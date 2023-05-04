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
  if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);}


    $id = $_POST['id'];
    $year = $_POST['date1'];
    $month= $_POST['date2'];
    $day= $_POST['date3'];
    $email= $_POST['email'];
    $date=$_POST['date'];

  $sql = "SELECT id,Year,Month,Day,email,reg_date FROM dailylogin WHERE id= '$id' and Year = '$year' and Month = '$month' and Day ='$day' and reg_date = '$date'";
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

