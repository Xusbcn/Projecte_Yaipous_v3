<!DOCTYPE html>
<html>
<head>
	<title>Ranking</title>
	<script type="text/javascript" defer src="imagendelreves.js"></script>

</head>
<body style='background: url(backgroundpuntuacion.png);'>
	
	<h1 align='center' style='color: #5d4c50'> Ranking </h1>
	<table width=70% style='background: white; margin: 15px; padding: 15px; border: black 5px solid'>
		
	<?php

	$nombreganador = $_POST['nombre'];
	$intentosdelganador = $_POST['intentosganador'];


	$file = fopen("ranking.txt", "a");

	fwrite($file, "\n" . $intentosdelganador . ":" . $nombreganador);

	fclose($file);



		$array_puntuacion = array();

		$fp = fopen("ranking.txt", "r"); //obrim el arxiu amb les puntuacions

		while (!feof($fp)) {

		    $linea = fgets($fp);
		   	$punts_split = explode(":", $linea);
		   	array_push(($array_puntuacion),$punts_split);
		}

		// Función de comparación
		function cmp($a, $b) {
				  if ($a == $b) {
		        return 0;
		    }
		    return ($a < $b) ? -1 : 1;
		}

	
		usort($array_puntuacion, 'cmp'); //ordenamos el array
		

		echo "<tr align='center' style='background:#b9a8ac'><td>Nom</td><td>Intents</td></tr>";

		//print_r($array_puntuacion);
		//uasort($array_puntuacion, 'cmp');
		//uasort($array_puntuacion, 'cmp');


		/*uasort($array_puntuacion, function($i1, $i2) {
		return array_shift($i1) - array_shift($i2); });

		print_r($array_puntuacion);*/

	

		for ($i=0;$i<count($array_puntuacion);$i++) {
			echo"<tr style='background: #ede5e7;'><td align='center' width=20%>";
			print_r ($array_puntuacion[$i][1]);
			echo "</td><td align='center' width=10%>";
			print_r ($array_puntuacion[$i][0]);
			echo "</td></tr>" ;		}

	?>

	</table>

</body>
</html>