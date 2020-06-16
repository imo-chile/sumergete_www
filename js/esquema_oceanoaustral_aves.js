// Vemos los elementos a modificar, dependiendo del nivel del barómetro.

var titulo = document.getElementById("titulo");
var imagen = document.getElementById("imagen");
var texto = document.getElementById("texto");
var barra = document.getElementById("barra");
var ola = document.getElementById("ola");
var elementAnterior = document.getElementById("numero-1");

// 4 niveles solamente.
document.getElementById("numero-1").style.left = "13%";
document.getElementById("numero-2").style.left = "26%";
document.getElementById("numero-3").style.left = "39%";
document.getElementById("numero-4").style.left = "52%";

function hover(element) {
  if(element.getAttribute("id").valueOf() != elementAnterior.getAttribute("id").valueOf()) {
    element.style.color = "red";
  }
  
}
function unhover(element) {
  if(element.getAttribute("id").valueOf() != elementAnterior.getAttribute("id").valueOf()) {
    element.style.color = "white";
  }
}

// Elementos iniciales, es decir de barómetro nivel 1.
  titulo.innerHTML = "¿Existen aves voladoras en el Océano Austral?";
  imagen.children[0].setAttribute('src', '/../imagenes/sala_oceanoaustral/esquemas/04_01.jpg');
  texto.innerHTML = "Los pingüinos, aves no voladoras, son el grupo de aves antárticas más populares. Pero existe un gran número de especies de aves voladoras que habitan en el Continente Blanco, algunas de ellas son skúas, gaviotines, petreles y albatros. Las skúas son aves predadoras y oportunistas, que se caracterizan por su gran tamaño y agresividad (ej. Catharacta antarctica). Los gaviotines, como Sterna vittata, se alimentan de pequeños peces e invertebrados intermareales. Existen también diferentes especies de petreles, uno de ellos, el petrel gigante antártico, Macronectes giganteus, mide hasta 2 metros, y se alimenta de cadáveres y ocasionalmente de peces o cefalópodos. Existen además diferentes especie de albatros, siendo el albatros errante (Diomedea exulans) el ave pelágica más grande del Océano Austral, mide hasta 3,5 metros, y se alimenta de peces y cefalópodos.";
  barra.style.width = barometroVars[0]["barra"];
  ola.style.left = barometroVars[0]["ola"];
  elementAnterior.style.color = "red";

function nivelBarometro(element) {

	switch(element.getAttribute('id').valueOf()) {

		case 'numero-1':
	    titulo.innerHTML = "¿Existen aves voladoras en el Océano Austral?";
      imagen.children[0].setAttribute('src', '/../imagenes/sala_oceanoaustral/esquemas/04_01.jpg');
      texto.innerHTML = "Los pingüinos, aves no voladoras, son el grupo de aves antárticas más populares. Pero existe un gran número de especies de aves voladoras que habitan en el Continente Blanco, algunas de ellas son skúas, gaviotines, petreles y albatros. Las skúas son aves predadoras y oportunistas, que se caracterizan por su gran tamaño y agresividad (ej. Catharacta antarctica). Los gaviotines, como Sterna vittata, se alimentan de pequeños peces e invertebrados intermareales. Existen también diferentes especies de petreles, uno de ellos, el petrel gigante antártico, Macronectes giganteus, mide hasta 2 metros, y se alimenta de cadáveres y ocasionalmente de peces o cefalópodos. Existen además diferentes especie de albatros, siendo el albatros errante (Diomedea exulans) el ave pelágica más grande del Océano Austral, mide hasta 3,5 metros, y se alimenta de peces y cefalópodos.";
      barra.style.width = barometroVars[0]["barra"];
      ola.style.left = barometroVars[0]["ola"];
      elementAnterior.style.color = "red";

	    elementAnterior.style.color = "white";
	    elementAnterior = element;
	    element.style.color = "red";
    break;

  	case 'numero-2':
  		titulo.innerHTML = "¿Cuántas especies de pingüino hay en el Océano Austral?";
  		imagen.children[0].setAttribute('src', '/../imagenes/sala_oceanoaustral/esquemas/04_02.jpg');
  		texto.innerHTML = "Los pingüinos son aves de la familia Spheniscidae que viven exclusivamente en el hemisferio sur del planeta. Existen 17 especies de pingüinos distribuidas en 6 géneros. Sólo cinco (5) especies habitan en el sector antártico chileno. El Aptenodytes forsteri o pingüino emperador,  es el pingüino más grande, mide hasta 1,15 m de altura y puede sumergirse hasta 300 m de profundidad, es el único capaz de nidificar durante las bajas temperaturas invernales antárticas. El Pygoscelis adeliae o pingüino adelia, es uno de los más abundantes del Continente Blanco. Los otros pingüinos exclusivamente antárticos son el pingüino barbijo (Pygoscelis antarctica), el pingüino papúa (Pygoscelis papua) y el pingüino macaroni (Eudyptes chrysolophus).";
  		barra.style.width = barometroVars[1]["barra"];
      ola.style.left = barometroVars[1]["ola"];

      elementAnterior.style.color = "white";
      elementAnterior = element;
      element.style.color = "red";
  	break;

  	case 'numero-3':
    	titulo.innerHTML = "¿Qué pinnípedos se encuentran en el Océano Austral?";
    	imagen.children[0].setAttribute('src', '/../imagenes/sala_oceanoaustral/esquemas/04_03.jpg');
    	texto.innerHTML = "Los pinnípedos corresponden a una superfamilia de los mamíferos, adaptados a la vida acuática. El continente antártico es hogar de 6 especies de pinnípedos, 5 de los cuales corresponden a la familia de los fócidos (focas) y sólo dos especies de la familia de los otáridos (lobos marinos). Pertenecientes a las focas, se encuentran la foca de Weddell (Leptonychotes weddellii), foca cangrejera (Lobodon carcinophagus), foca de Ross (Ommatophoca rossi), elefante marino del sur (Mirounga leonina) y foca leopardo (Hydrurga leptonyx). Estas especies sólo se encuentran en la Antártica, aunque en algunos casos, como por ejemplo el elefante marino, se desplazan a zonas subantárticas para reproducirse. Del grupo de los otáridos, se puede encontrar el lobo fino antártico (Arctocephalus gazella), que además se encuentra en diferentes islas subantárticas. En general, la alimentación de todas estas especies se basa en peces, cefalópodos e invertebrados bentónicos.";
  		barra.style.width = barometroVars[2]["barra"];
      ola.style.left = barometroVars[2]["ola"];

      elementAnterior.style.color = "white";
      elementAnterior = element;
      element.style.color = "red";
  	break;

  	case 'numero-4':
      titulo.innerHTML = "¿Cuál es la importancia del Océano Austral para los grandes cetáceos?";
    	imagen.children[0].setAttribute('src', '/../imagenes/sala_oceanoaustral/esquemas/04_04.jpg');
    	texto.innerHTML = "En las aguas del Océano Austral existe una gran biomasa de krill (Euphausia superba), debido principalmente a la alta disponibilidad de alimento que implican los blooms de fitoplancton. Como resultado, el krill puede crecer en abundancia, lo que permite el traspaso de un gran aporte energético al resto de la trama trófica. Esto hace que las aguas del Océano Austral representen una importante y gran área de alimentación para diferentes especies de ballenas del suborden Mysticeti, es decir, ballenas con barbas, las cuales filtran toneladas de agua capturando grandes cantidades de krill. Especies como la ballena azul (Balaenoptera musculus), jorobada (Megaptera novaengliae), minke antártica (Balaenoptera bonaerensis), franca austral (Eubalaena australis), fin (Balaenoptera physalus) y sei (Balaenoptera borealis) recorren las frías aguas del continente en busca de este alimento.";
  		barra.style.width = barometroVars[3]["barra"];
      ola.style.left = barometroVars[3]["ola"];

      elementAnterior.style.color = "white";
      elementAnterior = element;
      element.style.color = "red";
  	break;
	}
}

document.getElementById("etiqueta-texto").innerHTML = "Aves y Mamíferos";