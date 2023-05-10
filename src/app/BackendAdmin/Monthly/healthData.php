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

  $date1 = $_POST['date1'];
  $date2 = $_POST['date2'];
  $valq2 = array("","Excellent","Very Good","Good","Fair","Poor","Dont know or Not Sure");
  $valq3 = array("","Diagnosed","Taking Medicine For");
  $valq4q5= array("","Never","Rarely","Half of the time","Often","Always");
  $valq6= array("","Every day","Some days","Not at all");
  $valq7= array("","None","Mild","Moderate","Severe","Extreme");
  $valq8= array("","No difficulty","Mild difficulty","Moderate difficulty","Severe difficulty","So much difficulty that I cant sleep");
  $valq9= array("","6 hours or less","About 7 hours","About 8 hours","About 9 hours","About 10 hours or more");
  $valq10= array("","Very Good","Fairly Good","Fairly Poor","Very Poor");

$companyname = $_POST['company'];
  $data['result1']=array();
  for ($i = 1; $i < 7; $i++) {
    $sql = "SELECT ";
    $sql = "SELECT (SELECT COUNT(id) FROM `healthindex` WHERE q2 = '$valq2[$i]' AND Year = '$date1' AND Month = '$date2' and companyname ='$companyname' ) AS q2val$i";
    $sql = rtrim($sql, ", ");
    $sql .= ";";

    $result = $conn->query($sql);
    // Process the results as needed
    if ($result->num_rows > 0) {
      while($row = mysqli_fetch_assoc($result)) {
        $data['result1'][$i] = $row["q2val$i"];;
      }
    }
  }

  $data['result2']=array();
  for ($i = 1; $i < 3; $i++) {
    $sql1 = "SELECT ";
    $sql1 = "SELECT (SELECT COUNT(id) FROM `healthindex` WHERE q3r1 = '$valq3[$i]' AND Year = '$date1' AND Month = '$date2' and companyname ='$companyname' ) AS q3r1val$i";
    $sql1 = rtrim($sql1, ", ");
    $sql1.= ";";

    $result1 = $conn->query($sql1);
    // Process the results as needed
    if ($result1->num_rows > 0) {
      while($row = mysqli_fetch_assoc($result1)) {
        $data['result2'][$i] = $row["q3r1val$i"];;
      }
    }
  }

  $data['result3']=array();
  for ($i = 1; $i < 3; $i++) {
    $sql3 = "SELECT ";
    $sql3 = "SELECT (SELECT COUNT(id) FROM `healthindex` WHERE q3r2 = '$valq3[$i]' AND Year = '$date1' AND Month = '$date2'  AND companyname ='$companyname' ) AS q3r2val$i";
    $sql3 = rtrim($sql3, ", ");
    $sql3 .= ";";

    $result3 = $conn->query($sql3);
    // Process the results as needed
    if ($result3->num_rows > 0) {
      while($row = mysqli_fetch_assoc($result3)) {
        $data['result3'][$i] = $row["q3r2val$i"];;
      }
    }
  }

  $data['result4']=array();
  for ($i = 1; $i < 3; $i++) {
    $sql3= "SELECT ";
    $sql3 = "SELECT (SELECT COUNT(id) FROM `healthindex` WHERE q3r3 = '$valq3[$i]' AND Year = '$date1' AND Month = '$date2'  AND companyname ='$companyname' ) AS q3r3val$i";
    $sql3 = rtrim($sql3, ", ");
    $sql3 .= ";";
    $result3 = $conn->query($sql3);
    // Process the results as needed
    if ($result3->num_rows > 0) {
      while($row = mysqli_fetch_assoc($result3)) {
        $data['result4'][$i] = $row["q3r3val$i"];;
      }
    }
  }

  $data['result5']=array();
  for ($i = 1; $i < 3; $i++) {
    $sql4 = "SELECT ";
    $sql4 = "SELECT (SELECT COUNT(id) FROM `healthindex` WHERE q3r4 = '$valq3[$i]' AND Year = '$date1' AND Month = '$date2'  AND companyname ='$companyname' ) AS q3r4val$i";
    $sql4 = rtrim($sql4, ", ");
    $sql4 .= ";";
    $result4 = $conn->query($sql4);
    // Process the results as needed
    if ($result4->num_rows > 0) {
      while($row = mysqli_fetch_assoc($result4)) {
        $data['result5'][$i] = $row["q3r4val$i"];;
      }
    }
  }

  $data['result6']=array();
  for ($i = 1; $i < 3; $i++) {
    $sql5 = "SELECT ";
    $sql5 = "SELECT (SELECT COUNT(id) FROM `healthindex` WHERE q3r5 = '$valq3[$i]' AND Year = '$date1' AND Month = '$date2'  AND companyname ='$companyname' ) AS q3r5val$i";
    $sql5 = rtrim($sql5, ", ");
    $sql5 .= ";";
    $result5 = $conn->query($sql5);
    // Process the results as needed
    if ($result5->num_rows > 0) {
      while($row = mysqli_fetch_assoc($result5)) {
        $data['result6'][$i] = $row["q3r5val$i"];;
      }
    }
  }

  $data['result7']=array();
  for ($i = 1; $i < 6; $i++) {
    $sql6 = "SELECT ";
    $sql6 = "SELECT (SELECT COUNT(id) FROM `healthindex` WHERE q4 = '$valq4q5[$i]' AND Year = '$date1' AND Month = '$date2' AND companyname ='$companyname' ) AS q4val$i";
    $sql6 = rtrim($sql6, ", ");
    $sql6 .= ";";
    $result6 = $conn->query($sql6);
    // Process the results as needed
    if ($result5->num_rows > 0) {
      while($row = mysqli_fetch_assoc($result6)) {
        $data['result7'][$i] = $row["q4val$i"];;
      }
    }
  }

  $data['result8']=array();
  for ($i = 1; $i < 6; $i++) {
    $sql7 = "SELECT ";
    $sql7 = "SELECT (SELECT COUNT(id) FROM `healthindex` WHERE q5 = '$valq4q5[$i]' AND Year = '$date1' AND Month = '$date2' AND companyname ='$companyname' ) AS q5val$i";
    $sql7 = rtrim($sql7, ", ");
    $sql7 .= ";";
    $result7 = $conn->query($sql7);
    // Process the results as needed
    if ($result7->num_rows > 0) {
      while($row = mysqli_fetch_assoc($result7)) {
        $data['result8'][$i] = $row["q5val$i"];;
      }
    }
  }

  $data['result9']=array();
  for ($i = 1; $i < 4; $i++) {
    $sql8 = "SELECT ";
    $sql8 = "SELECT (SELECT COUNT(id) FROM `healthindex` WHERE q6 = '$valq6[$i]' AND Year = '$date1' AND Month = '$date2' AND companyname ='$companyname' ) AS q6val$i";
    $sql8 = rtrim($sql8, ", ");
    $sql8 .= ";";
    $result8 = $conn->query($sql8);
    // Process the results as needed
    if ($result8->num_rows > 0) {
      while($row = mysqli_fetch_assoc($result8)) {
        $data['result9'][$i] = $row["q6val$i"];;
      }
    }
  }
  $data['result10']=array();
  for ($i = 1; $i < 6; $i++) {
    $sql9 = "SELECT ";
    $sql9 = "SELECT (SELECT COUNT(id) FROM `healthindex` WHERE q7r1 = '$valq7[$i]' AND Year = '$date1' AND Month = '$date2' AND companyname ='$companyname' ) AS q7r1val$i";
    $sql9 = rtrim($sql9, ", ");
    $sql9.= ";";
    $result9 = $conn->query($sql9);
    // Process the results as needed
    if ($result9->num_rows > 0) {
      while($row = mysqli_fetch_assoc($result9)) {
        $data['result10'][$i] = $row["q7r1val$i"];;
      }
    }
  }
  $data['result11']=array();
  for ($i = 1; $i < 6; $i++) {
    $sql10 = "SELECT ";
    $sql10 = "SELECT (SELECT COUNT(id) FROM `healthindex` WHERE q7r2 = '$valq7[$i]' AND Year = '$date1' AND Month = '$date2' AND companyname ='$companyname' ) AS q7r2val$i";
    $sql10 = rtrim($sql10, ", ");
    $sql10.= ";";
    $result10 = $conn->query($sql10);
    // Process the results as needed
    if ($result10->num_rows > 0) {
      while($row = mysqli_fetch_assoc($result10)) {
        $data['result11'][$i] = $row["q7r2val$i"];;
      }
    }
  }
  $data['result12']=array();
  for ($i = 1; $i < 6; $i++) {
    $sql11 = "SELECT ";
    $sql11 = "SELECT (SELECT COUNT(id) FROM `healthindex` WHERE q7r3 = '$valq7[$i]' AND Year = '$date1' AND Month = '$date2' AND companyname ='$companyname' ) AS q7r3val$i";
    $sql11 = rtrim($sql11, ", ");
    $sql11.= ";";
    $result11 = $conn->query($sql11);
    // Process the results as needed
    if ($result11->num_rows > 0) {
      while($row = mysqli_fetch_assoc($result11)) {
        $data['result12'][$i] = $row["q7r3val$i"];;
      }
    }
  }
  $data['result13']=array();
  for ($i = 1; $i < 6; $i++) {
    $sql12 = "SELECT ";
    $sql12 = "SELECT (SELECT COUNT(id) FROM `healthindex` WHERE q7r4 = '$valq7[$i]' AND Year = '$date1' AND Month = '$date2' AND companyname ='$companyname' ) AS q7r4val$i";
    $sql12 = rtrim($sql12, ", ");
    $sql12.= ";";
    $result12 = $conn->query($sql12);
    // Process the results as needed
    if ($result12->num_rows > 0) {
      while($row = mysqli_fetch_assoc($result12)) {
        $data['result13'][$i] = $row["q7r4val$i"];;
      }
    }
  }
  $data['result14']=array();
  for ($i = 1; $i < 6; $i++) {
    $sql13 = "SELECT ";
    $sql13 = "SELECT (SELECT COUNT(id) FROM `healthindex` WHERE q7r5 = '$valq7[$i]' AND Year = '$date1' AND Month = '$date2' AND companyname ='$companyname' ) AS q7r5val$i";
    $sql13 = rtrim($sql13, ", ");
    $sql13.= ";";
    $result13 = $conn->query($sql13);
    // Process the results as needed
    if ($result13->num_rows > 0) {
      while($row = mysqli_fetch_assoc($result13)) {
        $data['result14'][$i] = $row["q7r5val$i"];;
      }
    }
  }

  $data['result15']=array();
  for ($i = 1; $i < 6; $i++) {
    $sql14 = "SELECT ";
    $sql14 = "SELECT (SELECT COUNT(id) FROM `healthindex` WHERE q9r1 = '$valq9[$i]' AND Year = '$date1' AND Month = '$date2' AND companyname ='$companyname' ) AS q9r1val$i";
    $sql14 = rtrim($sql14, ", ");
    $sql14.= ";";
    $result14 = $conn->query($sql14);
    // Process the results as needed
    if ($result14->num_rows > 0) {
      while($row = mysqli_fetch_assoc($result14)) {
        $data['result15'][$i] = $row["q9r1val$i"];;
      }
    }
  }
  $data['result16']=array();
  for ($i = 1; $i < 6; $i++) {
    $sql15 = "SELECT ";
    $sql15 = "SELECT (SELECT COUNT(id) FROM `healthindex` WHERE q9r2 = '$valq9[$i]' AND Year = '$date1' AND Month = '$date2' AND companyname ='$companyname' ) AS q9r2val$i";
    $sql15 = rtrim($sql15, ", ");
    $sql15.= ";";
    $result15 = $conn->query($sql15);
    // Process the results as needed
    if ($result15->num_rows > 0) {
      while($row = mysqli_fetch_assoc($result15)) {
        $data['result16'][$i] = $row["q9r2val$i"];;
      }
    }
  }
  $data['result17']=array();
  for ($i = 1; $i < 5; $i++) {
    $sql16 = "SELECT ";
    $sql16 = "SELECT (SELECT COUNT(id) FROM `healthindex` WHERE q10 = '$valq10[$i]' AND Year = '$date1' AND Month = '$date2' AND companyname ='$companyname' ) AS q10val$i";
    $sql16 = rtrim($sql16, ", ");
    $sql16.= ";";
    $result16 = $conn->query($sql16);
    // Process the results as needed
    if ($result16->num_rows > 0) {
      while($row = mysqli_fetch_assoc($result16)) {
        $data['result17'][$i] = $row["q10val$i"];;
      }
    }
  }
  $data['result18']=array();
  for ($i = 1; $i < 6; $i++) {
    $sql17 = "SELECT ";
    $sql17 = "SELECT (SELECT COUNT(id) FROM `healthindex` WHERE q8 = '$valq8[$i]' AND Year = '$date1' AND Month = '$date2' AND companyname ='$companyname' ) AS q8val$i";
    $sql17 = rtrim($sql17, ", ");
    $sql17 .= ";";
    $result17 = $conn->query($sql17);
    // Process the results as needed
    if ($result17->num_rows > 0) {
      while($row = mysqli_fetch_assoc($result17)) {
        $data['result18'][$i] = $row["q8val$i"];;
      }
    }
  }
  echo json_encode($data);
$conn->close();
exit();
?>

