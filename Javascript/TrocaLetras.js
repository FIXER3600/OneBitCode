let rocketShip = prompt('Digite o nome da espaço-nave')

let caracter = prompt('Digite o caracter que deseja substituir')

let newCaracter = prompt('Deseja substituir o caracter '+caracter+' por qual caracter?')

let newRocketShip = '';

for (let i = 0; i < rocketShip.length; i++) {
	rocketShip[i]==caracter ? newRocketShip += newCaracter : newRocketShip += rocketShip[i]
}
alert('O novo nome da nave é: '+newRocketShip);