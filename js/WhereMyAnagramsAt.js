//* KATA 5 Where my anagrams at?
/*
What is an anagram? Well, two words are anagrams of each other if they both contain the same letters. For example:

'abba' & 'baab' == true

'abba' & 'bbaa' == true

'abba' & 'abbba' == false

'abba' & 'abca' == false
Write a function that will find all the anagrams of a word from a list. You will be given two inputs a word and an array with words. You should return an array of all the anagrams or an empty array if there are none. For example:

anagrams('abba', ['aabb', 'abcd', 'bbaa', 'dada']) => ['aabb', 'bbaa']

anagrams('racer', ['crazer', 'carer', 'racar', 'caers', 'racer']) => ['carer', 'racer']

anagrams('laser', ['lazing', 'lazy',  'lacer']) => []
*/

//? MY SOLUTION

function anagrams(word, words) {
	let result = []
	words.forEach((w, index) => {
		if (
			w
				.split('')
				.sort()
				.join('') === [...word].sort().join('')
		) {
			result.push(words[index])
		}
	})
	return result
}

console.log(anagrams('racer', ['crazer', 'carer', 'racar', 'caers', 'racer']))

//? CLEVER (Modificada)

String.prototype.sortM = function() {
	return this.split('')
		.sort()
		.join('')
}

function anagrams2(word, words) {
	return words.filter((w) => w.sortM() === word.sortM())
}

console.log(anagrams2('racer', ['crazer', 'carer', 'racar', 'caers', 'racer']))
