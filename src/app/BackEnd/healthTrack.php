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
  $date = $_POST['date'];

  $sql = "SELECT id,Year,Month,Day,q2,q3r1,q3r2,q3r3,q3r4,q3r5,q4,q5,q6,q7r1,q7r2,q7r3,q7r4,q7r5,q8,q9r1,q9r2,q10,date FROM healthindex WHERE id= '$id' and date = '$date'";
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

