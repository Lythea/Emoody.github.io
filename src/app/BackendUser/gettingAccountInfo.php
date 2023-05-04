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
  if ($conn->connect_error) {die("Connection failed: " . $conn->connect_error);}

    $user = $_POST['email'];
    $pass = $_POST['pass'];

    $sql = "SELECT id,email,password,position,company  FROM accounts WHERE email ='$user' and password = '$pass'";
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

