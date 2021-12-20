let distance = prompt('Qual a distância em Anos-Luz?')

let choseOption = prompt('Escolha entre as opções a conversão que deseja realizar: \n1- Parsec (pc)\n2- Unidade Astronônima (AU)\n3- Quilômetros (km)')

let unity;
let conv;
switch (choseOption) {
	case '1':
		unity = 'Parsec (pc)';
		conv = distance*0.306601
		alert('Distância em anos-luz: '+distance+"\nEm "+unity+": "+conv+" PC") 
		break;
	case '2':
		unity='Unidade Astronônima (AU)'
		conv =  distance*63241.1
		alert('Distância em anos-luz: '+distance+"\nEm "+unity+": "+conv+" AU") 
		break;
	case '3':
		unity='Quilômetros (km)';
		conv = distance*(9.5*Math.pow(10,12))
		alert('Distância em anos-luz: '+distance+"\nEm "+unity+": "+conv+" Km");
		break;
	default:
		alert('Distância em anos-luz: '+distance+"\nUnidade não identificada: Conversão fora do escopo");

	}