<?php 
session_start(); //Iniciem una sessió
?>

<?php error_reporting(0);?>
<!DOCTYPE html>
<html>
<head>
	<title>Qui es Qui Harry Potter</title>
	<script type="text/javascript" defer src="imagendelreves.js"></script>
	<link rel = "stylesheet" href = "stylequiesqui.css">

	<?php
	$fp = fopen("imatges.txt", "r");
	$array_lineas_imagenes=array();//obtenemos un array con todas las lineas del fichero imagenes.
	$array_solosnombres=array();// Contiene los nombres de las cartas
	$array_soloatributos=array();
	$array_atributos_sin_comas=array();
while (!feof($fp)){
    $linea = fgets($fp);
    $linea_split = explode(":", $linea);
    array_push(($array_lineas_imagenes),$linea_split);
}
	//obtencion de los nombres de las cartas.
    for($i=0;$i<count($array_lineas_imagenes);$i++){
    	array_push(($array_solosnombres), $array_lineas_imagenes[$i][0]);
    }
    for($a=0;$a<count($array_lineas_imagenes);$a++){
    	array_push(($array_soloatributos), $array_lineas_imagenes[$a][1]);
    }
    for($b=0;$b<count($array_soloatributos);$b++){
    	$atributos_split=explode(",",$array_soloatributos[$b]);
    	array_push(($array_atributos_sin_comas), $atributos_split);
    	
    }
    

$cp = fopen("config.txt", "r");
	$array_lineas_config=array();//obtenemos un array con todas las lineas del fichero imagenes.
	$array_solocaracteristicas=array();// Contiene los nombres de las cartas
	$array_respuestas_caracteristicas=array();
	$array_atributos_sin_espacios=array();
while (!feof($cp)){
    $lineac = fgets($cp);
    $lineac_split = explode(":", $lineac);
    array_push(($array_lineas_config),$lineac_split);

}
	//obtencion de los nombres de las caractaeristicas.
    for($i=0;$i<count($array_lineas_config);$i++){
    	array_push(($array_solocaracteristicas), ($array_lineas_config[$i][0]));
    }

    for($a=0;$a<count($array_lineas_config);$a++){
    	array_push(($array_respuestas_caracteristicas), $array_lineas_config[$a][1]);
    }

    for($b=0;$b<count($array_respuestas_caracteristicas);$b++){
    	$atributos_split=explode(" ",$array_respuestas_caracteristicas[$b]);
    	array_push(($array_atributos_sin_espacios), $atributos_split);
    	//print_r($atributos_split);
    }

echo '<br>';
fclose($fp);
fclose($cp);


$array_controlar_pregunta=array();
$array_controlar_pregunta2=array();
$array_controlar_pregunta3=array();
$array_controlar_pregunta4=array();

for($i=0;$i<count($array_solocaracteristicas);$i++){
	for($j=0;$j<=count($array_solocaracteristicas);$j++){
		if(trim($array_atributos_sin_espacios[$i][$j])=="si"){
			$var_unica=$array_solocaracteristicas[$i];
			array_push(($array_controlar_pregunta),$var_unica);
		}
		else{
			if($array_atributos_sin_espacios[$i][$j]!="" && trim($array_atributos_sin_espacios[$i][$j])!="no"){
				$var_unica2=$array_atributos_sin_espacios[$i][$j];
				array_push(($array_controlar_pregunta2),$var_unica2);
			}
			
		}
	}
		
}
$array_comobopregunta=array();
$array_comobopregunta=array_merge($array_controlar_pregunta2,$array_controlar_pregunta);

?>

</head>
<body>
<body id="bodyprincipal" onload="mostrar_preguntes()">
	<h2 style='color:white'>Qui es Qui - Versió Harry Potter</h2>

<?php
$array_lineas = array(); //aray con las lineas del txt
$array_nombres = array(); //aray con los nombres de las fotos
//codigo para sacar el nombre de las fotos:
$fp = fopen("imatges.txt", "r");
while (!feof($fp)){
    $linea = fgets($fp);
    $linea_split = explode(":", $linea);
    array_push(($array_lineas),$linea_split);
}
for ($i=0;$i<count($array_lineas);$i++) {
	$nom_imatge = $array_lineas[$i][0];
	array_push(($array_nombres),$nom_imatge);
}
$numeroimagenes=count($array_lineas);
//print_r($numeroimagenes);
fclose($fp);
if (isset($_SESSION["escogida"])) {
	$escogida = $_SESSION["escogida"];
	$escogido = $_SESSION["escogido"];
	$array_nombres = $_SESSION["array_nombres"];
	}
else {
	$x = rand(0,15);
	$escogida = $array_nombres[$x];
	$escogido = $array_lineas[$x];
	$_SESSION["escogido"] = $escogido;
	$_SESSION["escogida"] = $escogida;
	shuffle($array_nombres); //mezcla el array
	$_SESSION["array_nombres"]=$array_nombres; 

}

$varEscogida=$array_atributos_sin_comas[0];
echo "<img id='escollida' onclick=never() style='left; padding-left: 40px float: left; border:5px solid white;'  escollida='" . trim($escogida) . "' width='150' height='190' src='./img/" . trim($escogida) . "'>";
echo "<table id='cartas' align='center'>";
echo "<tr>";
echo "<div class='timer' style= 'float: right'>
		<p id='segons'></p>
		</div>";

for ($i=0;$i<count($array_nombres);$i++) {
	if ($i%4==0) {
		echo "</tr>";
		echo "<br>";
		echo "<tr>";
	}
	echo "<td>";
	echo '<div class="flip-card" name="cara" onclick="girar(this)" id="' . trim($array_nombres[$i]) . '">';

	echo "<div class='front-face caracarta'>";
	echo "<img style='border:5px solid white' name=" . trim($array_nombres[$i]) . " width='150' height='190' src='./img/" . trim($array_nombres[$i]) . "'>";
	echo "</div>";
	echo "<div class='back-face' style='border:5px solid white'></div>";
	echo "</div>";
	echo "</td>";
}
echo "</tr> </table>";

?>
<?php
//print_r($varEscogida);
for($i=0;$i<count($varEscogida);$i++){
echo "<p style='display:none' class='respostes'>" . $varEscogida[$i]. "</p>";
echo "<p style='display:none' id='resposta[".$i."]'>" . $varEscogida[$i]. "</p>";//caracteriticas de la carta elegida.
echo "<p style='display:none' id='compara_respuesta[".$i."]'>" . $array_atributos_sin_comas[$i][$i]. "</p>";
echo "<p style='display:none' id='comparar[".$i."]'>" .trim($array_solocaracteristicas[$i]) . "</p>";
echo "<p style='display:none' id='comparar_pelo[".$i."]'>" .$array_controlar_pregunta2[$i] . "</p>";
echo "<p style='display:none' id='solo_caracteristicas[".$i."]'>" .$array_solocaracteristicas[$i] . "</p>";
//echo "<p style='display:none' id='cartasescogida'>" .$cartaEscogida . "</p>";
echo "<p style='display:none' id='cartasTablero[".$i."]'>" .$array_nombres[$i]. "</p>";
echo "<p style='display:none' id='lineasimagenes'>" .$numeroimagenes . "</p>";

}
/*
for($i=0;$i<$numeroimagenes;$i++){
	$escogido1[$i]= $array_atributos_sin_comas[$i];
	echo "<p style='display:none' id='todoslosatributos[".$i."]'>" .$escogido1[$i]. "</p>";//array con cada linea de atributos
}
*/

for($i=0;$i<$numeroimagenes;$i++){
	
	echo "<p style='display:none' id='solonombres[".$i."]'>" .$array_solosnombres[$i]. "</p>";
	//echo "<p style='display:none' id='todoslosatributos[".$i."]'>" .$cartasEntablero. "</p>";//array con cada linea de atributos
}
for($i=0;$i<count($array_comobopregunta);$i++){
echo "<p style='display:none' class='combos'>".$array_comobopregunta[$i] . "</p>";

}

?>


<div class="cartas">
	<select name="pruebas" id="select">
		<?php
		echo '<option selected value="0"> </option>';	
		for($i=0;$i<count($array_comobopregunta);$i++){
		echo '<option id="seleccionada['.$i.']" value='.trim($array_comobopregunta[$i]).'>'.trim($array_comobopregunta[$i]).'</option>';

		}	
	?>
	</select>
	</div>

<div class="boton_pregunta">
    <input type="submit" name="submit_easy" id="clickEasy" onclick="activar_easy()" value="Fes la pregunta"/>
    <input type="submit" name="submit_very" id="clickVery" onclick="activar_VeryEasy()" value="Fes la pregunta"/>
    <input type="submit" name="submit_normal" id="clickNormal" onclick="runNormal()" value="Fes la pregunta"/>
  </div>

<div id = "comptador">
	<label id = "preguntes">PREGUNTES</label>
	<textarea id = "ta" rows="1" cols="5" readonly></textarea>
</div>
<div class = "easy">	
	<select id = "easy">
		<option value = "0"></option>
		<option value = "1">Very Easy</option>
		<option value = "2">Easy</option>
		<option value = "3">Normal</option>
	</select>
	<button id = "activar_easy" onclick="dificultat()">DIFICULTAD</button>
</div>
<!--<button onclick="activar_easy()" id = "easy">EASY</button>-->
<br>

<div class="mensaje">
	<p id="texto"></p>
	<p id="mensaje" class="parpadea"></p>
	
</div>

<form id='formuintentos' method="post" action="ganador.php">
	<p> <input type="hidden" id="intentosganador" name="intentosganador"></p>
</form>

</body>
</html>