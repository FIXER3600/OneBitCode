let shipVelocity = 150;

function desacelera(velocity, printer) {
	while (velocity > 0) {
		printer(velocity);
		velocity -= 20;
	}
	alert('A nave está parada e as comportas podem ser abertas!');
}
desacelera(shipVelocity, velocity => alert('Velocidade da nave atual: ' + velocity))


























































/*function slowDown(velocity,printer) {
	let deceleration = 20;
	while (velocity>0) {
		printer(velocity)
		velocity-=deceleration;
	}
	alert('Nave parada. As comportas podem se abrir.');
}
slowDown(shipVelocity,velocity=>alert('Velocidade atual: '+velocity+" km/s"))*/