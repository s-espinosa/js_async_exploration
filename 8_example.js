const fetch = require('node-fetch');

let moreRepos = fetch("https://api.github.com/users/turingschool/repos")
  .then(response => response.json())
  .then(allRepos => {
    console.log("INSIDE")
  })
  .catch(function() {
    console.log("error")
  });


console.log(moreRepos)
setTimeout(() => {
  console.log("-----------5 seconds is up!---------")
  console.log(moreRepos)
}, 5000)


