const hitchedSpaceships = [
	['Fenix',8,true],
	['Golias',10,true],
	['Helmet',5,false],
	['Elemental',3,true],
	['Darwin',15,false]
]
let moreThanNine= hitchedSpaceships.filter(Element => Element[1]>9).map(spaceship => spaceship[0])

let upCased = hitchedSpaceships.map(spaceship => spaceship[0].toUpperCase())

let hitchPendant = hitchedSpaceships.findIndex(spaceship=>spaceship[2]==false)

let message = "Espaçonaves com mais de 9 tripulantes: " + moreThanNine.join(", ")
message += "\nPlataform com processo de engate: " + (hitchPendant + 1)
message += "\nEspaçonaves destacadas: " + upCased.join(", ")

alert(message);