<!DOCTYPE html>
<html>
<head>
</head>
<body>

<?php
session_start();
session_destroy();
header("Location: reves2.php");

?>

</body>
</html>