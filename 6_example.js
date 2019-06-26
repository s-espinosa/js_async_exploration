const fetch = require('node-fetch');

let repos = [];
console.log("FIRST")
console.log(repos);

let returnedRepos = fetch("https://api.github.com/users/turingschool/repos")
  .then(response => response.json())
  .then(allRepos => {
    repos = allRepos[0]
    console.log("INSIDE")
    console.log(repos);
  })

console.log("LAST")
console.log(returnedRepos)

