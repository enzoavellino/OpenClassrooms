function countVowel(sentence) {
	var nbVowel = 0;
	var vowelList = 'aeiouyAEIOUY';

	for (i = 0; i < sentence.length; i++) {
		if (vowelList.indexOf(sentence[i]) !== -1) {
			nbVowel++;
		}
	}
	return nbVowel;
}

function countConsonant(sentence) {
	var nbConsonant = 0;
	var consonantList = 'bcdfghjklmnpqrstvwxzBCDFGHJKLMNPQRSTVWXZ';

	for (i = 0; i < sentence.length; i++) {
		if (consonantList.indexOf(sentence[i]) !== -1) {
			nbConsonant++;
		}
	}
	return nbConsonant;
}

var motSaisi = prompt("Entrez votre mot: ");

console.log("Ce mot a " + motSaisi.length + " caractères.");
console.log("Voici ce mot en minuscule " + motSaisi.toLowerCase());
console.log("Voici ce mot en majuscule " + motSaisi.toUpperCase());
console.log("Dans ce mot, il y a " + countVowel(motSaisi) + " voyelles et " + countConsonant(motSaisi) + " consonnes.");