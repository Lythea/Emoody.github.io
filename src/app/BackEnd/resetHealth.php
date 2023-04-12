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
  $date1 = $_POST['date1'];
  $date2 = $_POST['date2'];
  $sql = "DELETE FROM healthindex WHERE id= '$id' and Year = '$date1' and Month ='$date2'";
  $result = $conn->query($sql);
    if ($result=== TRUE) {
      echo json_encode(['data' => 'Deleted Successfully!']);
  } else {
      echo json_encode(['data' => 'Error deleting record: ']);
  }


$conn->close();
exit();
?>

