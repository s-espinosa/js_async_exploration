let currentStatus = "I'm hungry."
console.log(currentStatus)

currentStatus = eatMeal()
console.log(currentStatus)

console.log("I'm not hungry anymore.")

function eatMeal() {
  return "I'm eating.";
}


