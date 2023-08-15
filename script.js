////////Creating Random Number
let randomNumber = Math.floor(Math.random() * 20) + 1;
console.log(randomNumber);
///////Check button handling
let highscore = 0;
let score = 10;

const setMessage = function (elem, message) {
  document.querySelector(`.${elem}`).textContent = message;
};

document.querySelector(".check").addEventListener("click", function () {
  let input = Number(document.querySelector(".guess").value);
  if (input) {
    if (score > 1) {
      if (input !== randomNumber) {
        setMessage(
          "message",
          input < randomNumber ? "too low  🔽" : "too high 🔼"
        );
        score--;
        setMessage("score", score);
      } else {
        document.querySelector("body").style.backgroundColor = "#35ea38";
        setMessage("number", input);
        setMessage("message", "Winner ✌✔🎉🎉🎉🎯");
        console.log(score, "score");
        console.log(highscore, "highscore");
        if (Number(score) > Number(highscore)) {
          highscore = score;
          setMessage("highscore", score);
        }
      }
    } else {
      setMessage("message", "You Lost The Game 🤦‍♂️");
      score--;
      setMessage("score", 0);
    }
  } else {
    setMessage("message", "No Number 🧩");
  }
});

//////Again button handling
document.querySelector(".again").addEventListener("click", function () {
  score = 10;
  setMessage("message", "Start guessing...");
  setMessage("number", "?");
  setMessage("score", score);
  document.querySelector(".guess").value = "";
  randomNumber = Math.floor(Math.random() * 20);
  document.querySelector("body").style.backgroundColor = "#222";
  console.log(randomNumber);
});
