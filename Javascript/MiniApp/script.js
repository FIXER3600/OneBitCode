let departureDateEntry = prompt('Digite a data de partida (formato DD/MM/YYYY)')

let departureDate = moment(departureDateEntry, 'DD/MM/YYYY')

let today = moment()

let dateDiff = today - departureDate

let choseOption = prompt('Escolha como gostaria de exibir o tempo de partida: \n1- Segundos\n2- Minutos\n3- Horas\n4- Dias')

switch (choseOption) {
	case '1':
		let secondsOfDeparture = Math.round(dateDiff / 1000)
		alert('Tempo de vôo: ' + secondsOfDeparture + ' segundos');
		break;
	case '2':
		let minutesOfDeparture = Math.round(dateDiff / 1000/60)
		alert('Tempo de vôo: ' + minutesOfDeparture + ' minutos');
		break;
	case '3':
		let hoursOfDeparture = Math.round(dateDiff / 1000/3600)
		alert('Tempo de vôo: ' + hoursOfDeparture + ' horas');
		break;
	case '4':
		let daysOfDeparture = Math.round(dateDiff / 1000/3600/24)
		alert('Tempo de vôo: ' + daysOfDeparture + ' dias');
		break;
	default:
		alert('Escolha indiponível');
		break;
}