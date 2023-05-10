<?php
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Headers: Content-Type: application/json, X-Auth-Token, Authorization, Origin');
header('Access-Control-Allow-Methods: POST, GET, OPTIONS, DELETE, PUT');
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

    $sql1 = "SELECT domain,companyname FROM companies";
    $result1 = $conn->query($sql1);
    $data['result1'] = array();
    if (mysqli_num_rows($result1) > 0) {
      // output data of each row
    while($row = mysqli_fetch_assoc($result1)) {
        $data['result1'][] = $row;
      }
 }
$sql2 = "SELECT COUNT(domain) as count FROM companies";
$result2 = $conn->query($sql2);
$data['result2'] = array();
if (mysqli_num_rows($result2) > 0) {
  while($row = mysqli_fetch_assoc($result2)) {
    $data['result2'][] = $row;
  }
}

    echo json_encode ($data);

?>

