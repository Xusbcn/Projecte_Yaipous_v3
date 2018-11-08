<!DOCTYPE html>
<html>
<head>
	<title></title>
</head>
<body>
	<h1>HOTLA</h1>

	<?php
	$arrayTest = array("arnau" => array("ulleres","ros","mascle", "humana"), "grelda" => array("noulleres","castany","femella", "nohuma"));

	function escollir($arrayTest) {

		return $arrayTest[array_rand($arrayTest)];

	}

	$escollida = escollir($arrayTest);

	print_r($escollida);
	?>

</body>
</html>