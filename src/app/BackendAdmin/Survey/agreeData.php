<?php
header('Access-Control-Allow-Origin: *');
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
  die("Connection failed: " . $conn->connect_error);
  }
  $date = $_POST['date'];
  $data['result1'] = array();
  $data['result2'] = array();
  $data['result3'] = array();
  $data['result4'] = array();
$companyname = $_POST['company'];
  for ($i = 1; $i < 11; $i++) {
    $sql = "SELECT ";
    $sql .= "(SELECT COUNT(id) FROM dailysurvey2 WHERE q{$i}='SD' AND date='$date'  AND companyname ='$companyname' ) as q{$i}SD, ";
    $sql .= "(SELECT COUNT(id) FROM dailysurvey2 WHERE q{$i}='D' AND date='$date'  AND companyname ='$companyname' ) as q{$i}D, ";
    $sql .= "(SELECT COUNT(id) FROM dailysurvey2 WHERE q{$i}='SA' AND date='$date'  AND companyname ='$companyname' ) as q{$i}SA, ";
    $sql .= "(SELECT COUNT(id) FROM dailysurvey2 WHERE q{$i}='A' AND date='$date'  AND companyname ='$companyname' ) as q{$i}A, ";
    $sql = rtrim($sql, ", ");

    // add the semicolon to the end of the query
    $sql .= ";";

    // execute the query and process the results as needed
    $result = $conn->query($sql);
    if ($result->num_rows > 0) {
      while($row = mysqli_fetch_assoc($result)) {
        $data['result1'][$i] = $row["q{$i}SD"];;
        $data['result2'][$i] = $row["q{$i}D"];;
        $data['result3'][$i] = $row["q{$i}SA"];;
        $data['result4'][$i] = $row["q{$i}A"];;
      }
    } else {
      echo "No results found.";
    }
  }

echo json_encode($data);

$conn->close();
exit();
?>

