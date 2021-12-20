let piloto = prompt('Quem está pilotando?')
let shipVelocity = 0;
let newVelocity = prompt('Qual velocidade deseja acelerar?')
let confirmVelocity = confirm('Velocidade indo de ' + shipVelocity + ' para ' + newVelocity + ' km/s');
if (confirmVelocity == true) {
	shipVelocity = newVelocity;
}
if (shipVelocity < 0) {
	alert('Nave está parada. Considere partir e aumentar a velocidade')
} else if (shipVelocity < 40) {
	alert('Você está devagar, podemos aumentar mais')
} else if (shipVelocity >= 40 && shipVelocity < 80) {
	alert('Parece uma boa velocidade para manter');
} else if (shipVelocity >= 80 && shipVelocity < 100) {
	alert('Velocidade alta, considere diminuir');
} else {
	
	alert('Velocidade perigosa. Controle automático forçado.');
}
alert(piloto + ' está pilotando a nave com velocidade de ' + shipVelocity + ' km/s')

