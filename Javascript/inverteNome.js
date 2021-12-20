let spaceShip=prompt('Digite o nome da espaço-nave')

let invertedName= "";

for (let i = spaceShip.length -1; i >=0; i--) {
	if (spaceShip[i] == 'e') {
		break
	}
	invertedName += spaceShip[i]
}
alert('Nome original da nave: '+spaceShip+'\nNome invertido: '+invertedName);
