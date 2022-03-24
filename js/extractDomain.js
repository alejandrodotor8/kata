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
	if (url.indexOf('http')) {
		if (url.indexOf('www.')) {
			return url.substring(url.indexOf('www.') + 4, url.lastIndexOf('.'))
		}
	} else {
	}
}

console.log(domainName('http://github.com/carbonfive/raygun'))
//? CLEVER.
