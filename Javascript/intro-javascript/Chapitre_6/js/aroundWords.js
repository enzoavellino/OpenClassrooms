var countVowel = function(sentence) {
	var nbVowel = 0;
	var vowelList = 'aeiouyAEIOUYÀÁÂÆÈÉÊËÌÍÎÏÒÓÔŒÙÚÛÜÝŸàáâæèéêëìíîïòóôœùúûüýÿ';

	for (i = 0; i < sentence.length; i++) {
		if (vowelList.indexOf(sentence[i]) !== -1) {
			nbVowel++;
		}
	}
	return nbVowel;
}

var countConsonant = function(sentence) {
	var nbConsonant = 0;
	var consonantList = 'bcdfghjklmnpqrstvwxzBCDFGHJKLMNPQRSTVWXZÇÑçñ';

	for (i = 0; i < sentence.length; i++) {
		if (consonantList.indexOf(sentence[i]) !== -1) {
			nbConsonant++;
		}
	}
	return nbConsonant;
}

var inverserWord = function(sentence) {
	var inverseSentence = "";

	for (i = (sentence.length) -1; i >= 0; i--) {
		inverseSentence = inverseSentence + sentence[i];
	}

	return inverseSentence;
}

var palindrome = function(sentence) {
	if (inverserWord(sentence).toLowerCase() === sentence.toLowerCase()) {
		console.log("C'est un palindrome");
	} else {
		console.log("Ce n'est pas un palindrome");
	}
}

var findLetterSimpleLeet = function(lettre) {
	var letterSimpleLeet = lettre;

	switch (lettre) {
		case 'a':
		case 'A':
			letterSimpleLeet = 4;
			break;
		case 'b':
		case 'B':
			letterSimpleLeet = 8;
			break;
		case 'e':
		case 'E':
			letterSimpleLeet = 3;
			break;
		case 'l':
		case 'L':
			letterSimpleLeet = 1;
			break;
		case 'o':
		case 'O':
			letterSimpleLeet = 0;
			break;
		case 's':
		case 'S':
			letterSimpleLeet = 5;
			break;	
		case 't':
		case 'T':
			letterSimpleLeet = 7;
			break;
	}

	return letterSimpleLeet;
}

var convertInSimpleLeetSpeak = function(sentence) {
	var wordLeet = "";

	for (i = 0; i < sentence.length; i++) {
		wordLeet = wordLeet + findLetterSimpleLeet(sentence[i]);
	}

	return wordLeet;
}

var motSaisi = prompt("Entrez votre mot avec ou sans accent: ");

console.log("Ce mot a " + motSaisi.length + " caractères.");
console.log("Voici ce mot en minuscule " + motSaisi.toLowerCase());
console.log("Voici ce mot en majuscule " + motSaisi.toUpperCase());
console.log("Dans ce mot, il y a " + countVowel(motSaisi) + " voyelles et " + countConsonant(motSaisi) + " consonnes.");
console.log("Ce mot en inversé donne " + inverserWord(motSaisi));
palindrome(motSaisi);
console.log("Ce mot s'écrit en leet speak simplifié " + convertInSimpleLeetSpeak(motSaisi));

