//* KATA
/*
Given an array (arr) as an argument complete the function countSmileys that should return the total number of smiling faces.

Rules for a smiling face:

Each smiley face must contain a valid pair of eyes. Eyes can be marked as : or ;
A smiley face can have a nose but it does not have to. Valid characters for a nose are - or ~
Every smiling face must have a smiling mouth that should be marked with either ) or D
No additional characters are allowed except for those mentioned.

Valid smiley face examples: :) :D ;-D :~)
Invalid smiley faces: ;( :> :} :]

Example
countSmileys([':)', ';(', ';}', ':-D']);       // should return 2;
countSmileys([';D', ':-(', ':-)', ';~)']);     // should return 3;
countSmileys([';]', ':[', ';*', ':$', ';-D']); // should return 1;
Note
In case of an empty array return 0. You will not be tested with invalid input (input will always be an array). Order of the face (eyes, nose, mouth) elements will always be the same.
*/

//? MY SOLUTION

function countSmileys(arr) {
	return arr
		.filter((face) => face.charAt(0) == ':' || face.charAt(0) == ';')
		.filter(
			(face) =>
				face.charAt(1) == ')' ||
				face.charAt(1) == 'D' ||
				(face.charAt(1) == '-' && (face.charAt(2) == ')' || face.charAt(2) == 'D')) ||
				(face.charAt(1) == '~' && (face.charAt(2) == ')' || face.charAt(2) == 'D'))
		).length
}
console.log(countSmileys([';>', ';D', ':-)', ';>', ':(', ';>', ':)']))

//? CLEVER

function countSmileys(arr) {
	return arr.filter((x) => /^[:;][-~]?[)D]$/.test(x)).length
}
//? 2
const faces = new Set()
for (let eyes of [':', ';']) {
	for (let nose of ['-', '~', '']) {
		for (let mouth of [')', 'D']) faces.add(eyes + nose + mouth)
	}
}

countSmileys = (arr) => arr.filter((x) => faces.has(x)).length
