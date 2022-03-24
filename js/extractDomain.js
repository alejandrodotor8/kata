//* KATA
/*
Write a function that when given a URL as a string, parses out just the domain name and returns it as a string. For example:

domainName("http://github.com/carbonfive/raygun") == "github"
domainName("http://www.zombie-bites.com") == "zombie-bites"
domainName("https://www.google.com") == "google"
domainName("www.hello.ur") == "hello"
*/

//? MY SOLUTION
function domainName(url) {
	var domain

	if (url.indexOf('//') > -1) {
		domain = url.split('/')[2]
	} else {
		domain = url.split('/')[0]
	}

	return domain.replace('www.', '').split('.')[0]
}

console.log(domainName('http://github.com/carbonfive/raygun'))
//? CLEVER.

function domainName2(url) {
	return url.replace(/.+\/\/|www.|\..+/g, '')
}
console.log(domainName2('http://github.com/carbonfive/raygun'))
