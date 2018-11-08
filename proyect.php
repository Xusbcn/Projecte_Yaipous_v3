
<?php
//abrimos y leemos el config.txt.
$fp = fopen("imatges.txt", "r");
//creamos un array para incluir cada linea leida.
$arraynoms=array();
$arraycaract=array();
$arrayvalores=array();
$arraylineas=array();
$arrayLineas=array();
while(!feof($fp)){
$delimeter=array(":",","," ");
$linea = fgets($fp);
$replace= str_replace($delimeter, $delimeter[0], $linea);
$explode=explode($delimeter[0], $replace);
array_push($arraylineas, $linea);
array_push($arraynoms, $explode[0]);
array_push($arraycaract, $explode[3],$explode[7],$explode[11]);
array_push($arrayvalores, $explode[4],$explode[8],$explode[12]);
}
for($i=0;$i<count($arraylineas);$i++){
$atributs=explode(":", $arraylineas[$i]);
array_push($arrayLineas, $atributs[1]);
}
echo '<pre>';
//print_r($arraylineas);
//print_r($arrayLineas);
//print_r($arrayvalores);
print_r($arraycaract);
//print_r($arraynoms);
//print_r($explode);
echo '</pre>';

/*----------------------------------------------------------------------------
-------------------------------------------------------------------------------
------------------------------------------------------------------------------*/
$zp = fopen("configuracion.txt", "r");
//creamos un array para incluir cada linea leida.
$arraynomsc=array();
$arraycaractc=array();
$arrayvaloresc=array();
$arraylineasc=array();
$arrayLineasc=array();
$espode=array();

while(!feof($zp)){
$delimeterc=array(":"," ");
$lineac = fgets($zp);
$replacec= str_replace($delimeterc, $delimeterc[0], $lineac);
$explodec=explode($delimeterc[0], $replacec);
array_push($espode, $explodec);
array_push($arraylineasc, $lineac);
array_push($arraynomsc, $explodec[0]);
array_push($arraycaractc, $explodec[2],$explodec[3]);

}
for($c=0;$c<count($arraylineasc);$c++){
$atributsc=explode(":", $arraylineasc[$c]);
array_push($arrayLineasc, $atributsc);
}
echo '<pre>';
//print_r($arraylineasc);
//print_r($arrayLineasc);
//print_r($arraynomsc);
//print_r($arraycaractc);
//print_r($explodec);
echo '</pre>';





/*-------------------------------------------------------------------------
---------------------------------------------------------------------------
---------------------------------------------------------------------------*/

//Una mateixa imatge (nom d'arxiu) apareix dos cops a l'arxiu de configuració.


if(count($arraynoms)>count(array_unique($arraynoms))){
	echo "hay personajes repetidos";
}else{
	echo "No hay personajes repetidos";
}
echo "<br>";

//Dues imatges diferents tenen les mateixes característiques.


if(count($arrayLineas)>count(array_unique($arrayLineas))){
	echo "hay atributos repetidos";
}else{
	echo "No hay atributos repetidos";
}
echo "<br>";


//Una característica que apareix al fitxer imatges.txt no apareix al fitxer config.txt (al revés no importa)

for($v=0;$v<count($arraycaract);$v++){
	if(in_array($arraycaract[$v], $arraynomsc)){
		echo "La caracteristica existe <br>";
	}else{
		echo "la caracteristicas " . $arraycaract[$v] . " no existe";
	}
}


fclose($zp);
fclose($fp);


?>


