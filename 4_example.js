let hungry = "very";
console.log(hungry);

setTimeout(function() {
  hungry = "a little";
  console.log(`async hungry is ${hungry}`);
}, 1000);

setTimeout(function() {
  hungry = "stuffed";
  console.log(`async hungry is ${hungry}`);
}, 5000);

console.log(hungry);



