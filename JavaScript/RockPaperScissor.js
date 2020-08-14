function randomNum() {
  return Math.floor(Math.random() * 2);
}

let botSet = ["rock", "paper", "scissor"];

function RPS(yourChoice) {
  let humanChoice, botChoice;
  humanChoice = yourChoice.id;
  console.log(humanChoice);
  botChoice = botSet[randomNum()];
  console.log(botChoice);
  result = dataSet1(humanChoice, botChoice);
  let messagee = finalMessage(result);
  console.log(messagee);
  frontView(humanChoice, botChoice, messagee);
}

function dataSet1(humanChoice, botChoice) {
  let s1 = {
    rock: { rock: 0.5, paper: 0, scissor: 1 },
    paper: { rock: 1, paper: 0.5, scissor: 0 },
    scissor: { rock: 0, paper: 1, scissor: 0.5 },
  };

  let humanScore = s1[humanChoice][botChoice];
  let botScore = s1[botChoice][humanChoice];

  return [humanScore, botScore];
}

function finalMessage([humanScore, botScore]) {
  if (humanScore == 1) {
    return { message: "You Won..!!", color: "green" };
  } else if (humanScore == 0) {
    return { message: "You Lost!!", color: "red" };
  } else if (humanScore == 0.5) {
    return { message: "Its Draw.!!!", color: "blue" };
  }
}

function frontView(humanImgChoice, botImgChoice, finalMessage) {
  var imageDB = {
    rock: document.getElementById("rock").src,
    paper: document.getElementById("paper").src,
    scissor: document.getElementById("scissor").src,
  };
  document.getElementById("rock").remove();
  document.getElementById("paper").remove();
  document.getElementById("scissor").remove();

  let humanDiv = document.createElement("div");
  let botDiv = document.createElement("div");
  let msgDiv = document.createElement("div");

  humanDiv.innerHTML =
    "<img src='" +
    imageDB[humanImgChoice] +
    "'height=150px width=150px style='box-shadow:0px 10px 50px rgba(37,50,233,1);'>";
  msgDiv.innerHTML =
    "<h2 style='color:" +
    finalMessage["color"] +
    "; font-size:30px;'>" +
    finalMessage["message"] +
    "</h2>";
  botDiv.innerHTML =
    "<img src='" +
    imageDB[botImgChoice] +
    "' height=150px width=150px style='box-shadow:0px 10px 50px rgba(243,38,24,1);'>";

  document.getElementById("all-img-div").appendChild(humanDiv);
  document.getElementById("all-img-div").appendChild(msgDiv);
  document.getElementById("all-img-div").appendChild(botDiv);
}
