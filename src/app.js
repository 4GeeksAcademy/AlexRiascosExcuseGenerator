window.onload = function() {
  let who = ["The dog", "My grandma", "The mailman", "My bird"];
  let action = ["ate", "peed", "crushed", "broke"];
  let what = ["my homework", "my phone", "the car"];
  let when = [
    "before the class",
    "when I was sleeping",
    "while I was exercising",
    "during my lunch",
    "while I was praying"
  ]; //Create a function that returns a vector element randomly
  function randomMessage(lista) {
    // Generate a random number
    let randomNumber = Math.floor(Math.random() * lista.length);
    return lista[randomNumber] + " ";
  }

  // Call the function and save the result in a variable
  var randomWord =
    randomMessage(who) +
    randomMessage(action) +
    randomMessage(what) +
    randomMessage(when);
  // Show the message when refreshing the page
  document.querySelector("#excuse").innerHTML = randomWord;

  // Show the message when you click the button
  document.getElementById("btn").addEventListener("click", () => {
    var randomWord =
      randomMessage(who) +
      randomMessage(action) +
      randomMessage(what) +
      randomMessage(when);
    document.getElementById("excuse").innerHTML = randomWord;
  });
};
