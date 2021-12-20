let nome = prompt('Digite o nome da nave')

let velocity = 0

let chosenOption;

function acelerar() {
	velocity+=5
	alert(nome+' acelerando 5 km/s...');
	return velocity;
}
function desacelerar() {
	if(velocity>0){
		velocity-=5
		alert(nome+' desacelerando 5 km/s...');
	}else{
		alert('Nave '+nome+' está parada');
	}
	return velocity
}
function printDates() {
	alert('Nome da Nave: '+nome+'\nVelocidade atual: '+velocity+ ' km/s');
}

function exibeMenu() {
	do{
		chosenOption = prompt('Escolha entre as opções para exibir informações sobre a nave: \n1- Acelerar a nave em 5 km/s\n2- Desacelerar a nave 5 km/s\n3- Imprimir dados de bordo\n4- Sair do programa')
	switch (chosenOption) {
		case '1':
			acelerar();
			break;
		case '2':
			desacelerar();
			break;
		case '3':
			printDates();
			break;
		case '4':
			alert('Fim do programa')
			break;
		default:
			alert('Opção indisponível');
			break;
	}
	}while (chosenOption !== '4') 
	
}
exibeMenu()