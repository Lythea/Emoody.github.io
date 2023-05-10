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
  $companyname = $_POST['company'];
  $data['result1'] = array();
  for ($i = 1; $i < 11; $i++) {
    $sql1 = "SELECT (SELECT COUNT(id) FROM `moodtrack` WHERE emoji = 'Happy' AND scale = '$i' AND date = '$date' and companyname ='$companyname'  ) AS Happy$i";
    $result1 = $conn->query($sql1);

    // Process the results as needed
    if ($result1->num_rows > 0) {
      while($row = mysqli_fetch_assoc($result1)) {
        $data['result1'][$i] = $row["Happy$i"];;
      }
    } else {
        echo "No results found.";
    }
}
$data['result2'] = array();
for ($i = 1; $i < 11; $i++) {
  $sql2 = "SELECT (SELECT COUNT(id) FROM `moodtrack` WHERE emoji = 'Sad' AND scale = '$i' AND date = '$date' and companyname ='$companyname'  ) AS Sad$i";
  $result2 = $conn->query($sql2);

  // Process the results as needed
  if ($result2->num_rows > 0) {
    while($row = mysqli_fetch_assoc($result2)) {
      $data['result2'][$i] = $row["Sad$i"];;
    }
  } else {
      echo "No results found.";
  }
}
$data['result3'] = array();
for ($i = 1; $i < 11; $i++) {
  $sql3 = "SELECT (SELECT COUNT(id) FROM `moodtrack` WHERE emoji = 'Angry' AND scale = '$i' AND date = '$date' and companyname ='$companyname'  ) AS Angry$i";
  $result3 = $conn->query($sql3);

  // Process the results as needed
  if ($result3->num_rows > 0) {
    while($row = mysqli_fetch_assoc($result3)) {
      $data['result3'][$i] = $row["Angry$i"];;
    }
  } else {
      echo "No results found.";
  }
}
$data['result4'] = array();
for ($i = 1; $i < 11; $i++) {
  $sql4 = "SELECT (SELECT COUNT(id) FROM `moodtrack` WHERE emoji = 'Afraid' AND scale = '$i' AND date = '$date' and companyname ='$companyname'  ) AS Afraid$i";
  $result4 = $conn->query($sql4);

  // Process the results as needed
  if ($result4->num_rows > 0) {
    while($row = mysqli_fetch_assoc($result4)) {
      $data['result4'][$i] = $row["Afraid$i"];;
    }
  } else {
      echo "No results found.";
  }
}
$data['result5'] = array();
for ($i = 1; $i < 11; $i++) {
  $sql5 = "SELECT (SELECT COUNT(id) FROM `moodtrack` WHERE emoji = 'Disgusted' AND scale = '$i' AND date = '$date' and companyname ='$companyname'  ) AS Disgusted$i";
  $result5 = $conn->query($sql5);
  // Process the results as needed
  if ($result5->num_rows > 0) {
    while($row = mysqli_fetch_assoc($result5)) {
      $data['result5'][$i] = $row["Disgusted$i"];;
    }
  } else {
      echo "No results found.";
  }
}
echo json_encode($data);
$conn->close();
exit();
?>

