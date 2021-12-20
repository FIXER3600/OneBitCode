function doubleVelocity(velocity, printer) {
	console.log('Entrei em double velocity')
	let newVelocity = velocity * 2;
	printer(newVelocity);
	return newVelocity;
}
let printVelocity = velocity => {
	console.log('Nova velocidade: ' + velocity + ' km/s')
}
let newVelocity = doubleVelocity(60, printVelocity)
console.log(newVelocity)

let anotherVelocity = doubleVelocity(50,velocity=>console.log('Outra velocidade: ' + velocity + ' km/s'))