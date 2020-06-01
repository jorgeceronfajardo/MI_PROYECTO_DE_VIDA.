/*
 */

var punto;
var numeroAnterior;
var numeroActual;
var ultimaTecla;
var operacion;

function Acerca()
{
 alert("Calculadora (v1.1) en Html y JavaScript\n"
	+"UMG");
}

function Borrar()
{
 punto=0;
 numeroActual="";
 document.teclado.resultado.value="0.";
}

function Inicio()
{
 numeroAnterior=0;
 ultimaTecla="num";
 operacion="igu";
 Borrar();
}

function Numero(valor)
{
 if (ultimaTecla!="num"){
	Borrar();
	ultimaTecla="num";
 }
 if (valor || numeroActual!=""){
	numeroActual+=valor;
	document.teclado.resultado.value=numeroActual;
	if (!punto) document.teclado.resultado.value+=".";
 }
}

function Punto()
{
alert("AHORA SE COLOCARÁ UN PUNTO");

 if (ultimaTecla!="num"){
	Borrar();
	ultimaTecla="num";
 }
 if (!punto)
  if (!numeroActual)
	numeroActual="0.";
  else
	numeroActual+='.';
 punto=1;
}

function Exponente()
{
 alert("Esta versión no\nadmite esta función");
}
function Boton(bot)
{
 if (operacion=="sum")
	numeroAnterior+=parseFloat(numeroActual);
 if (operacion=="res")
	numeroAnterior-=parseFloat(numeroActual);
 if (operacion=="mul")
	numeroAnterior*=parseFloat(numeroActual);
 if (operacion=="div")
	numeroAnterior/=parseFloat(numeroActual);
 if (operacion!="igu" || ultimaTecla=="igu"){
	document.teclado.resultado.value=numeroAnterior;
	if (parseFloat(numeroAnterior)==
		parseInt(numeroAnterior))
		document.teclado.resultado.value+=".";
 }
 else{
	numeroAnterior=parseFloat(numeroActual);
 }
 ultimaTecla=bot;
 window.status=numeroAnterior;
 if (bot=="sum") window.status=numeroAnterior+" + ..."; 
 if (bot=="res") window.status=numeroAnterior+" - ..."; 
 if (bot=="mul") window.status=numeroAnterior+" * ..."; 
 if (bot=="div") window.status=numeroAnterior+" / ..."; 
 operacion=bot;
}