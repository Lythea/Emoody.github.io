<?php
header ('Access-Control-Allow-Origin: *');
header ('Access-Control-Allow-Headers: *');
header ('Access-Control-Allow-Methods: POST, GET, OPTIONS, DELETE, PUT');

$servername = "localhost";
$username = "root";
$password = "";
$bsu = "bsu";
$ub = "ub";
$lpu = "lpu";
// Connect with the database.
$company = $_POST['company'];
if ($company == 'BSU'){
  $conn= new mysqli($servername, $username, $password,$bsu);
  if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);}
    $id = $_POST['id'];
    $date = $_POST['date'];

    $sql = "DELETE FROM dailysurvey1 WHERE id= '$id' and date = '$date'";
    $result = $conn->query($sql);
    if ($result=== TRUE) {
      echo json_encode(['data' => 'Deleted Successfully!']);
  } else {
      echo json_encode(['data' => 'Error deleting record: ']);
  }
  $conn->close();
  exit();

}else if($company == 'UB'){

  $conn= new mysqli($servername, $username, $password,$ub);
  if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);}
    $id = $_POST['id'];
    $date = $_POST['date'];

    $sql = "DELETE FROM dailysurvey1 WHERE id= '$id' and date = '$date'";
    $result = $conn->query($sql);
    if ($result=== TRUE) {
      echo json_encode(['data' => 'Deleted Successfully!']);
  } else {
      echo json_encode(['data' => 'Error deleting record: ']);
  }
  $conn->close();
  exit();
}else if($company == 'LPU'){

  $conn= new mysqli($servername, $username, $password,$lpu);
  if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);}

    $id = $_POST['id'];
    $date = $_POST['date'];

    $sql = "DELETE FROM dailysurvey1 WHERE id= '$id' and date = '$date'";
    $result = $conn->query($sql);
      if ($result=== TRUE) {
        echo json_encode(['data' => 'Deleted Successfully!']);
    } else {
        echo json_encode(['data' => 'Error deleting record: ']);
    }
    $conn->close();
    exit();
}



?>

