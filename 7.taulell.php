<!DOCTYPE html>
<html>
<head>
	<title></title>
</head>
<body>
	<h1>TAULELL</h1>

	<?php

	$arrayTest = array("arnau","grelda","farengar","gerald","kendal","morwen","khelissar","matilda","lucretia","leon","rogvir","ellen");
	echo '<br>';
	
	$files = 3;
	$columnes = 4;
	$x = array(0,1,2,3,4,5,6,7,8,9,10,11);
	$y = array_rand($x);

	echo '<table>';

	for($i=1;$i<=$files;$i++){ 
		echo '<tr>';
		for($j=0;$j<$columnes;$j++){
			echo '<td>' . $arrayTest[$y] . '</td>';
			unset($x[array_search($y, $x)]);
			//fer que no foti l'ultim random quan s'acabin els numeros de $x.
			$y = array_rand($x);	
		}}

		


	echo '</table>';


	?>

</body>
</html>