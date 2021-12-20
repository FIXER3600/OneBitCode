let shipName = prompt('Digite o nome da Nave')

let warp= prompt('Deseja entrar em dobra espacial?\n1- Sim\n2- Não')

let i=0;

while (warp=='1') {
	warp= prompt('Deseja realizar a próxima dobra?\n1- Sim\n2- Não')
	i++
}
if(warp=='2'){
	alert('Nave '+shipName+'\nDobras feitas: '+i);
	}
