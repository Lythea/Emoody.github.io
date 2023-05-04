
<?php
header ('Access-Control-Allow-Origin: *');
header ('Access-Control-Allow-Headers: *');
header ('Access-Control-Allow-Methods: POST, GET, OPTIONS, DELETE, PUT');

$servername = "localhost";
$username = "root";
$password = "";

// Connect with the database.
$db = "developers";


$data = array();
$domain =array();
  $conn= new mysqli($servername, $username, $password,$db);
  if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);}

    $sql1 = "SELECT domain,company FROM companies";
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

