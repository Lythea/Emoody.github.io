<?php
header ('Access-Control-Allow-Origin: *');
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
    $date = $_POST['date'];
    $companyname = $_POST['company'];
    $sql = "SELECT id,companyname,Year,Month,Day,q2,q3r1,q3r2,q3r3,q3r4,q3r5,q4,q5,q6,q7r1,q7r2,q7r3,q7r4,q7r5,q8,q9r1,q9r2,q10,date FROM healthindex WHERE and companyname ='$companyname' id= '$id' and date = '$date'";
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

