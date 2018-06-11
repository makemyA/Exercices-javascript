var jourDeLaSemaine= function() {
	var today = new Date();
	var jour = today.getUTCDay();

	switch (jour) {
		case 0: alert ("Bonjour nous sommes dimanche");
		break;
		case 1: alert ("Bonjour nous sommes lundi");
		break;
		case 2: alert ("Bonjour nous sommes mardi");
		break;
		case 3: alert ("Bonjour nous sommes mercredi");
		break;
		case 4: alert ("Bonjour nous sommes jeudi");
		break;
		case 5: alert ("Bonjour nous sommes vendredi");
		break;
		case 6: alert ("Bonjour nous sommes samedi");
		break;
		default: alert ("Le site semble inacessible");
	}
}