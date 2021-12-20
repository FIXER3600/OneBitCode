//Classes
class Spaceship {
	constructor(name, type) {
		this.name = name;
		this.type = type;
	}
}
let milano = new Spaceship('Milano', 'Batalha');
console.log(milano)
//Métodos
class Rocketship {
	constructor(name, velocity) {
		this.name = name;
		this.velocity = velocity;
	}
	speedUp(acceleration) {
		this.velocity += acceleration
	}
}
let artemis = new Rocketship('Ártemis', 100)
artemis.speedUp(50);
console.log(artemis)
//Associação de Classes
class Captain {
	constructor(name, age, flightHours) {
		this.name = name;
		this.age = age;
		this.flightHours = flightHours;
	}
}
class Milano {
	constructor(name, crewQuantity, captainName, captainAge, captainFlightHours) {
		this.name = name;
		this.crewQuantity = crewQuantity;
		this.captain = new Captain(captainName, captainAge, captainFlightHours)
	}
}
let spaceship = new Milano('Milano', 7, 'Peter Quill', 30, 100000)
console.log(spaceship)
//Herança
class Ship {
	constructor(name, maxCrew, maxRecommendedVelocity) {
		this.name = name;
		this.maxCrew = maxCrew;
		this.maxRecommendedVelocity = maxRecommendedVelocity;
		this.currentVelocity = 0;
	}
	speedUp(acceleration) {
		this.currentVelocity += acceleration;
		if (this.currentVelocity > this.maxRecommendedVelocity) {
			alert('VELOCIDADE MÁXIMA ULTRAPASSADA \nDiminua ou poderá provocar danos à Nave');
		}
	}
}
class BattleShip extends Ship {
	stop() {
		this.currentVelocity = 0;
		alert('Recolhendo armas e parando a nave de batalha');
	}
}
class DiscoveryShip extends Ship {
	stop() {
		this.currentVelocity = 0;
		alert('Recolhendo equipamento de amostra e parando a nave de exploração');
	}
}
let darwin = new DiscoveryShip('Darwin', 10, 200)
let fenix = new BattleShip('Fênix', 8, 240)
darwin.speedUp(210)
fenix.speedUp(230)
darwin.stop()
fenix.stop()
console.log(darwin)
console.log(fenix)
//Sobrescrita de Métodos
class TransportShip extends Ship {
	//Reimplementando o método speedUp
	speedUp() {
		this.currentVelocity += 1;
		alert('Naves de transporte somente aceleram em 1 km/s');
	}
}
let transportSpaceship = new TransportShip('Transportadora', 4, 100);
transportSpaceship.speedUp();
console.log(transportSpaceship)
//Método Super
class Transport2 extends Ship {
	constructor(name, maxCrew, maxRecommendedVelocity, maxLoadWeight) {
		super(name, maxCrew, maxRecommendedVelocity)
		this.maxLoadWeight = maxLoadWeight;
	}
	speedUp(acceleration) {
		this.acceleration = acceleration /= 2;
		alert('Incrementando velocidade em: ' + acceleration + ' km/s');
		super.speedUp(acceleration)
	}
}
let transport = new Transport2('Transportadora2', 4, 100, 400)
console.log(transport);
transport.speedUp(210)
//SET
class Carro {
	constructor(name, currentVelocity) {
		this.name = name;
		this.currentVelocity = currentVelocity;
	}
	set velocity(newVelocity) {
		if (newVelocity > 120) {
			this.currentVelocity = 120
		} else {
			this.currentVelocity = newVelocity;
		}
	}
}
let Ferrari = new Carro('Ferrari');
Ferrari.velocity = 140;
console.log(Ferrari)
//GET
class ResourceProcessedLoad {
	constructor(name, monthlyProcessedLoad) {
		this.name = name;
		this.monthlyProcessedLoad = monthlyProcessedLoad;
	}
	get weelyProcessedLoad() {
		return this.monthlyProcessedLoad / 4;
	}
}
let resourceProcessedLoad = new ResourceProcessedLoad("Gaia", 500);
console.log(resourceProcessedLoad.weelyProcessedLoad);
//Método estático
class ResourceProcessedLoad2 {
	constructor(name, monthlyProcessedLoad) {
		this.name = name;
		this.monthlyProcessedLoad = monthlyProcessedLoad;
	}
	static calculateProcessInHours(monthlyProcessedLoad, hours) {
		return monthlyProcessedLoad / 720 * hours;
	}
}
let totalProcess = ResourceProcessedLoad2.calculateProcessInHours(500, 6);
console.log(totalProcess)
//Variável Estática
class Spaceship2 {
	static get decelerationRated() {
		return 0.15;
	}
	constructor(name) {
		this.name = name;
		this.currentVelocity = 0;
	} speedUp2(acceleration) {
		this.currentVelocity += (acceleration * (1 - Spaceship2.decelerationRated));
	}
}
let apollo = new Spaceship2("Apollo");
apollo.speedUp2(100)
console.log(apollo)