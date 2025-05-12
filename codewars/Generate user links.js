function generateLink(user) {
return `http://www.codewars.com/users/${encodeURIComponent(user)}`
}

console.log(generateLink('m att c'))
console.log(generateLink('g964'))