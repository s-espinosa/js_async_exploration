let currentStatus = "I'm hungry."
console.log(currentStatus)

setTimeout(() => {
  currentStatus = eatMeal()
  console.log(currentStatus)
}, 1000)

console.log("I'm not hungry anymore.")

function eatMeal() {
  return "I'm eating.";
}


