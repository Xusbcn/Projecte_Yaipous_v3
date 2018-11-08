var giradas = 0; 
var ganador = '';
var audio = new Audio('sonido.mp3');
var cartanog = 0;
var nogiradas = 0;
var preguntes = 0;
var disabled = false;
var gira = true;
var sec;
var compt;


//DIFICULTAD
document.getElementById("clickVery").style.display="none";
document.getElementById("clickEasy").style.display="none";
document.getElementById("clickNormal").style.display="none";


var jsvarResposta= document.getElementsByClassName('respostes');
var jsvarCombo = document.getElementsByClassName('combos'),innerHTML;
var jsvarLineasimagenes=document.getElementById('lineasimagenes');

//console.log(jsvarResposta);


function girar(card){
		console.log(card);
	if (card.className == 'flip-card'){
		console.log("hola");
		audio.play();
		card.classList.toggle('is-flipped');
		card.setAttribute('name', 'girada');
		contador_giradas();
			}
}


function girarTodas(texto){
	var vgirar=document.getElementById(texto);
	vgirar.classList.toggle('is-flipped');
	vgirar.setAttribute('name', 'girada');
}
function contador_giradas() {
	nogiradas += 1;
	giradas+=1; //cada cop que una carta es gira suma 1 al contador
	if (giradas==15) { //com son 16 cartes, quan arribem a la 15 parem i comparem cartes
		comparar_cartas();
	}

}


function comparar_cartas() {
	//console.log("entra");
	document.getElementById("intentosganador").value = preguntes;
	var formuintents = document.getElementById("formuintentos");
	var ultima_carta = document.getElementsByName("cara"); //agafem la unica carta que te com a name cara
	var carta_servidor = document.getElementById('escollida'); //agafem la carta del servidor que te id escollida
	if (ultima_carta[0].id==carta_servidor.getAttribute('escollida')) {
		//comparem el id de la ultima carta, que es el nom de la carta, amb l'atribut escollida de la carta del servidor, que tambe es el nom de la carta
		//audio_victoria.play();
		alert("¡HAS GANADO! ¡FELICIDADES!");
		formuintents.submit();
	}
	else {
		//audio_fracaso.play();
		alert ("HAS PERDIDO :(");
		var statusConfirm = confirm("¿Desea iniciar una nueva partida?");
	if (statusConfirm == true) {
		location.href="redirigir.php";
		//location.reload();
		}

	}
}


function cartanogirada(){
	cartanog += 1;
}

function toggle_gira() {
	gira = false;
}

function temps_restant() {
	document.getElementById("segons").innerHTML = sec;
	if (sec > 0) { 
	sec = sec-1;
	}
	else if(sec == 0) {
		clearInterval(compt);
	} }

function runVeryeasy(){
	
	cartanogirada();
	sec = 20;
	gira = true;	
	setTimeout(toggle_gira,20000);
	clearInterval(compt);
	compt = setInterval(temps_restant,1000);

	var seleccionada=document.getElementById('select').value;

	var num=0;

	
	//comprobar los select
	var ok1 = false;
	var ok2	= false;
	
	
	if(seleccionada!="0"){

		ok1=true;
		ok2=true;
		num=1;


		if(num>10000000){
			alert("Has de escoger una pregunta");
		}

		else if(cartanog > (nogiradas + 1)){
			//alert("Segur que vols realitzar una altra pregunta sense girar cap carta?");
			cartanog = 0;
			nogiradas = 50000000;
		}
		else{

			preguntes+=1;
			mostrar_preguntes();
			if(disabled == false) {
				document.getElementById("easy").disabled = true;
				document.getElementById("easy").style.backgroundColor = "#999966";
				document.getElementById("easy").style.opacity = 0.7;
				disabled = true;
			}

			if(ok1){

				for(var i=0;i<jsvarResposta.length;i++){

					
					var jsvarComparar2 = document.getElementById('resposta['+i+']').innerHTML.trim();
					
					var jsvarSoloCaracteristicas = document.getElementById('solo_caracteristicas['+i+']').innerHTML.trim();
					//console.log(jsvarComparar2);
					//alert(jsvarComparar);
					
					var jsvarcabello=jsvarSoloCaracteristicas+" "+seleccionada;

					//console.log(jsvarcabello);
					
					if (seleccionada+" si"==jsvarComparar2){
						document.getElementById("mensaje").style.color ="green";
						document.getElementById("texto").innerHTML = "SI";
						document.getElementById("mensaje").innerHTML="*";
						ok2=false;

					
						
					} 
					else if(seleccionada+" no"==jsvarComparar2){
						document.getElementById("mensaje").style.color ="red";
						document.getElementById("texto").innerHTML = "NO";
						document.getElementById("mensaje").innerHTML="X";
						//alert(jsvarComparar2);
						ok2=false;
						
					}

					else if(jsvarcabello==jsvarComparar2){
						document.getElementById("mensaje").style.color ="green";
						document.getElementById("texto").innerHTML = "SI";
						document.getElementById("mensaje").innerHTML="*";
						//alert(jsvarComparar2);
						ok2=false;
						
						
						
					}
					
					if(ok2){
						document.getElementById("mensaje").style.color ="red";
						document.getElementById("texto").innerHTML = "NO";
						document.getElementById("mensaje").innerHTML="X";
						texto=document.getElementById('solonombres['+i+']').innerHTML.trim();
						girarTodas(texto);

					}
					
				}
			}
	}	
	}
	for(var n=0;n<jsvarCombo.length;n++){
		var jsvarOcultar=document.getElementById('seleccionada['+n+']').innerHTML.trim();
		if(seleccionada==jsvarOcultar){
			document.getElementById('seleccionada['+n+']').style.display = "none";
		}

	}
	document.getElementById('select').value="0";
}

function runEasy(){
	
	cartanogirada();
	sec = 20;
	gira = true;	
	setTimeout(toggle_gira,20000);
	clearInterval(compt);
	compt = setInterval(temps_restant,1000);

	var seleccionada=document.getElementById('select').value;

	var num=0;

	
	//comprobar los select
	var ok1 = false;
	var ok2	= false;
	
	
	if(seleccionada!="0"){

		ok1=true;
		ok2=true;
		num=1;


		if(num<1){
			alert("Has de escoger una pregunta");
		}

		else if(cartanog > (nogiradas + 1)){
			alert("Segur que vols realitzar una altra pregunta sense girar cap carta?");
			cartanog = 0;
			nogiradas = 50000000;
		}
		else{

			preguntes+=1;
			mostrar_preguntes();
			if(disabled == false) {
				document.getElementById("easy").disabled = true;
				document.getElementById("easy").style.backgroundColor = "#999966";
				document.getElementById("easy").style.opacity = 0.7;
				disabled = true;
			}

			if(ok1){

				for(var i=0;i<jsvarResposta.length;i++){

					
					var jsvarComparar2 = document.getElementById('resposta['+i+']').innerHTML.trim();
					
					var jsvarSoloCaracteristicas = document.getElementById('solo_caracteristicas['+i+']').innerHTML.trim();
					//console.log(jsvarComparar2);
					//alert(jsvarComparar);
					
					var jsvarcabello=jsvarSoloCaracteristicas+" "+seleccionada;

					//console.log(jsvarcabello);
					
					if (seleccionada+" si"==jsvarComparar2){
						document.getElementById("mensaje").style.color ="green";
						document.getElementById("texto").innerHTML = "SI";
						document.getElementById("mensaje").innerHTML="*";
						ok2=false;

					
						
					} 
					else if(seleccionada+" no"==jsvarComparar2){
						document.getElementById("mensaje").style.color ="red";
						document.getElementById("texto").innerHTML = "NO";
						document.getElementById("mensaje").innerHTML="X";
						//alert(jsvarComparar2);
						ok2=false;
						
					}

					else if(jsvarcabello==jsvarComparar2){
						document.getElementById("mensaje").style.color ="green";
						document.getElementById("texto").innerHTML = "SI";
						document.getElementById("mensaje").innerHTML="*";
						//alert(jsvarComparar2);
						ok2=false;
						
						
						
					}
					
					if(ok2){
						document.getElementById("mensaje").style.color ="red";
						document.getElementById("texto").innerHTML = "NO";
						document.getElementById("mensaje").innerHTML="X";
						texto=document.getElementById('solonombres['+i+']').innerHTML.trim();
						girarTodas(texto);
					

					}
					
				}
			}
	}	
	}/*
	for(var n=0;n<jsvarCombo.length;n++){
		var jsvarOcultar=document.getElementById('seleccionada['+n+']').innerHTML.trim();
		if(seleccionada==jsvarOcultar){
			document.getElementById('seleccionada['+n+']').style.display = "none";
		}

	}
	*/
	document.getElementById('select').value="0";
}

function runNormal(){
	
	cartanogirada();
	sec = 20;
	gira = true;	
	setTimeout(toggle_gira,20000);
	clearInterval(compt);
	compt = setInterval(temps_restant,1000);

	var seleccionada=document.getElementById('select').value;

	var num=0;

	
	//comprobar los select
	var ok1 = false;
	var ok2	= false;
	
	
	if(seleccionada!="0"){

		ok1=true;
		ok2=true;
		num=1;


		if(num<1){
			alert("Has de escoger una pregunta");
		}

		else if(cartanog > (nogiradas + 1)){
			alert("Segur que vols realitzar una altra pregunta sense girar cap carta?");
			cartanog = 0;
			nogiradas = 50000000;
		}
		else{

			preguntes+=1;
			mostrar_preguntes();
			if(disabled == false) {
				document.getElementById("easy").disabled = true;
				document.getElementById("easy").style.backgroundColor = "#999966";
				document.getElementById("easy").style.opacity = 0.7;
				disabled = true;
			}

			if(ok1){

				for(var i=0;i<jsvarResposta.length;i++){

					
					var jsvarComparar2 = document.getElementById('resposta['+i+']').innerHTML.trim();
					
					var jsvarSoloCaracteristicas = document.getElementById('solo_caracteristicas['+i+']').innerHTML.trim();
					//console.log(jsvarComparar2);
					//alert(jsvarComparar);
					
					var jsvarcabello=jsvarSoloCaracteristicas+" "+seleccionada;

					//console.log(jsvarcabello);
					
					if (seleccionada+" si"==jsvarComparar2){
						document.getElementById("mensaje").style.color ="green";
						document.getElementById("texto").innerHTML = "SI";
						document.getElementById("mensaje").innerHTML="*";
						ok2=false;

					
						
					} 
					else if(seleccionada+" no"==jsvarComparar2){
						document.getElementById("mensaje").style.color ="red";
						document.getElementById("texto").innerHTML = "NO";
						document.getElementById("mensaje").innerHTML="X";
						//alert(jsvarComparar2);
						ok2=false;
						
					}

					else if(jsvarcabello==jsvarComparar2){
						document.getElementById("mensaje").style.color ="green";
						document.getElementById("texto").innerHTML = "SI";
						document.getElementById("mensaje").innerHTML="*";
						//alert(jsvarComparar2);
						ok2=false;
						
						
						
					}
					
					if(ok2){
						document.getElementById("mensaje").style.color ="red";
						document.getElementById("texto").innerHTML = "NO";
						document.getElementById("mensaje").innerHTML="X";
						
					

					}
					
				}
			}
		}	
	}
	
	document.getElementById('select').value="0";
}



function deshab_easy() {
	if(disabled == false) {
		document.getElementById("easy").disabled = true;
		document.getElementById("easy").style.backgroundColor = "#999966";
		document.getElementById("easy").style.opacity = 0.7;
		disabled = true;
	}
}

function dificultat() {
	var prueba=document.getElementById("easy").value;
	console.log( prueba);
	if (prueba == "1") {
		console.log('1');
		document.getElementById("clickVery").style.display="block";
		//activar_VeryEasy();
	}
	
	else  if (prueba == "2") {
		console.log('2');
		document.getElementById("clickEasy").style.display="block";
		//activar_easy();
	}
	
	else if(prueba == "3"){
		console.log('3');
		document.getElementById("clickNormal").style.display="block";
		//activar_normal();
	}
}

function deshab_VeryEasy() {
	if(disabled == false) {
		document.getElementById("easy").disabled = true;
		document.getElementById("easy").style.backgroundColor = "#999966";
		document.getElementById("easy").style.opacity = 0.7;
		disabled = true;
	}
}
function activar_VeryEasy() {
	document.getElementById("easy").disabled = true;
	if(disabled == false) {
		document.getElementById("easy").style.backgroundColor = "#b38f00";
		document.getElementById("easy").style.fontWeight = "bold";
		document.getElementById("easy").style.borderColor = "#ff0000";
		document.getElementById("easy").style.borderWidth = "6px";
		disabled = true;
	}
	runVeryeasy();
}

function activar_easy() {
	document.getElementById("easy").disabled = true;
	if(disabled == false) {
		document.getElementById("easy").style.backgroundColor = "#b38f00";
		document.getElementById("easy").style.fontWeight = "bold";
		document.getElementById("easy").style.borderColor = "#ff0000";
		document.getElementById("easy").style.borderWidth = "6px";
		disabled = true;

		}
	runEasy();
	
}

function activar_normal() {
	
	document.getElementById("easy").disabled = true;
	if(disabled == false) {
		document.getElementById("easy").style.backgroundColor = "#b38f00";
		document.getElementById("easy").style.fontWeight = "bold";
		document.getElementById("easy").style.borderColor = "#ff0000";
		document.getElementById("easy").style.borderWidth = "6px";
		disabled = true;

		}
	runNormal();
	
}


function mostrar_preguntes() {
	document.getElementById("ta").value = preguntes;
	//document.getElementById("intentosganador").value=preguntes;
}



function fuegos() {
	let canvas, width, height, ctx;
	let fireworks = [];
	let particles = [];

	function setup() {
		canvas = document.getElementById("canvas");
		setSize(canvas);
		ctx = canvas.getContext("2d");
		ctx.fillStyle = "#000000";
		ctx.fillRect(0, 0, width, height);
		fireworks.push(new Firework(Math.random()*(width-200)+100));
		window.addEventListener("resize",windowResized);
		document.addEventListener("click",onClick);
	}

	setTimeout(setup,1);

	function loop(){
		ctx.globalAlpha = 0.1;
		ctx.fillStyle = "#000000";
		ctx.fillRect(0, 0, width, height);
		ctx.globalAlpha = 1;

		for(let i=0; i<fireworks.length; i++){
			let done = fireworks[i].update();
			fireworks[i].draw();
			if(done) fireworks.splice(i, 1);
		}

		for(let i=0; i<particles.length; i++){
			particles[i].update();
			particles[i].draw();
			if(particles[i].lifetime>80) particles.splice(i,1);
		}

		if(Math.random()<1/60) fireworks.push(new Firework(Math.random()*(width-200)+100));
	}
	setInterval(loop, 1/60);
	class Particle{
		constructor(x, y, col){
			this.x = x;
			this.y = y;
			this.col = col;
			this.vel = randomVec(2);
			this.lifetime = 0;
		}

		update(){
			this.x += this.vel.x;
			this.y += this.vel.y;
			this.vel.y += 0.02;
			this.vel.x *= 0.99;
			this.vel.y *= 0.99;
			this.lifetime++;
		}

		draw(){
			ctx.globalAlpha = Math.max(1-this.lifetime/80, 0);
			ctx.fillStyle = this.col;
			ctx.fillRect(this.x, this.y, 2, 2);
		}
	}

	class Firework{
		constructor(x){
			this.x = x;
			this.y = height;
			this.isBlown = false;
			this.col = randomCol();
		}

		update(){
			this.y -= 3;
			if(this.y < 350-Math.sqrt(Math.random()*500)*40){
				this.isBlown = true;
				for(let i=0; i<60; i++){
					particles.push(new Particle(this.x, this.y, this.col))
				}
			}
			return this.isBlown;
		}

		draw(){
			ctx.globalAlpha = 1;
			ctx.fillStyle = this.col;
			ctx.fillRect(this.x, this.y, 2, 2);
		}
	}

	function randomCol(){
		var letter = '0123456789ABCDEF';
		var nums = [];

		for(var i=0; i<3; i++){
			nums[i] = Math.floor(Math.random()*256);
		}

		let brightest = 0;
		for(var i=0; i<3; i++){
			if(brightest<nums[i]) brightest = nums[i];
		}

		brightest /=255;
		for(var i=0; i<3; i++){
			nums[i] /= brightest;
		}

		let color = "#";
		for(var i=0; i<3; i++){
			color += letter[Math.floor(nums[i]/16)];
			color += letter[Math.floor(nums[i]%16)];
		}
		return color;
	}

	function randomVec(max){
		let dir = Math.random()*Math.PI*2;
		let spd = Math.random()*max;
		return{x: Math.cos(dir)*spd, y: Math.sin(dir)*spd};
	}

	function setSize(canv){
		canv.style.width = (innerWidth) + "px";
		canv.style.height = (innerHeight) + "px";
		width = innerWidth;
		height = innerHeight;

		canv.width = innerWidth*window.devicePixelRatio;
		canv.height = innerHeight*window.devicePixelRatio;
		canvas.getContext("2d").scale(window.devicePixelRatio, window.devicePixelRatio);
	}

	function onClick(e){
		fireworks.push(new Firework(e.clientX));
	}

	function windowResized(){
		setSize(canvas);
		ctx.fillStyle = "#000000";
		ctx.fillRect(0, 0, width, height);
	}
}