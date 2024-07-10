window.onload = function() {
  let who = [
    "The dog",
    "My grandma",
    "My bird",
    "Pablo Escobar",
    "Indiana Jones",
    "Robin Hot",
    "Babe, the Hot Piglet",
    "Maduro"
  ];
  let action = [
    "ate",
    "peed",
    "crushed",
    "broke",
    "Stumble",
    "Sneeze",
    "Slip",
    "following"
  ];
  let what = ["my homework", "my phone", "the car", "my neighbor"];
  let when = [
    "before the class",
    "when I was sleeping",
    "while I was exercising",
    "during my lunch",
    "while I was praying",
    "while I ate"
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
  document.getElementById("btn-color").addEventListener("click", () => {
    var randomWord =
      randomMessage(who) +
      randomMessage(action) +
      randomMessage(what) +
      randomMessage(when);
    document.getElementById("excuse").innerHTML = randomWord;
  });
};
function btnChanger() {
  let x_bg = Math.floor(Math.random() * 256);
  let y_bg = Math.floor(Math.random() * 256);
  let z_bg = Math.floor(Math.random() * 256);
  let x_btnColor = Math.floor(Math.random() * 256);
  let y_btnColor = Math.floor(Math.random() * 256);
  let z_btnColor = Math.floor(Math.random() * 256);

  let bgColor = `rgb(${x_bg}, ${y_bg}, ${z_bg})`;

  let btnColor =
    "rgb(" + x_btnColor + "," + y_btnColor + "," + z_btnColor + ")";

  let btn_change_bg = document.querySelector(".changeBG");
  let changeBG = (btn_change_bg.style.background = bgColor);

  let x = (document.getElementById("btn-color").style.background = btnColor);

  let btn_text_colors = ["black", "white"];
  let random = Math.floor(Math.random() * btn_text_colors.length);
  let y = (document.getElementById("btn-color").style.color =
    btn_text_colors[random]);
}
