<?php

header ('Access-Control-Allow-Origin: *');
header ('Access-Control-Max-Age: "1000"');
header ('Access-Control-Allow-Headers: "X-Requested-With, Content-Type, Origin, Authorization, Accept, Client-Security-Token, Accept-Encoding"');
header ('Access-Control-Allow-Methods: "POST, GET, OPTIONS, DELETE, PUT"');
require 'connect.php';
$id = '1';
    $sql = "SELECT id, gmail, pass, profile FROM datalogin WHERE id ='$id'";
    $result = $conn->query($sql);

    if ($result->num_rows > 0) {
      $data = $result->fetch_all(MYSQLI_ASSOC);
      echo json_encode($data);
    } else {
      echo json_encode(['error' => 'Results empty.']);
  }
$conn->close();
exit();

?>

