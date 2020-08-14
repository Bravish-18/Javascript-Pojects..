let buttonDb = document.getElementsByTagName("button");

let actuallColor = [];
for (let i = 0; i < buttonDb.length; i++) {
  actuallColor.push(buttonDb[i]);
}

let ActClassList = [];
for (let i = 0; i < actuallColor.length; i++) {
  ActClassList.push(actuallColor[i].classList[1]);
}

function buttonChange(thing) {
  if (thing.value == "Random") {
    randomColor();
  } else if (thing.value == "Red") {
    redColor();
  } else if (thing.value == "Blue") {
    blueColor();
  } else if (thing.value == "Reset") {
    alert("Please Wait your Request is in PROCESS");
    Reset();
  }
}

function redColor() {
  for (let i = 0; i < buttonDb.length; i++) {
    buttonDb[i].classList.remove(buttonDb[i].classList[1]);
    buttonDb[i].classList.add("btn-danger");
  }
}

function Reset() {
  for (let i = 0; i < buttonDb.length; i++) {
    buttonDb[i].classList.remove(buttonDb[i].classList[1]);
    buttonDb[i].classList.add(ActClassList[i]);
  }
}

let x = ["btn-primary", "btn-success", "btn-danger", "btn-warning"];

function randomNum() {
  return Math.floor(Math.random() * 4);
}

function randomColor() {
  for (let i = 0; i < buttonDb.length; i++) {
    let y = randomNum();
    buttonDb[i].classList.remove(buttonDb[i].classList[1]);
    buttonDb[i].classList.add(x[y]);
  }
}

function blueColor() {
  for (let i = 0; i < buttonDb.length; i++) {
    buttonDb[i].classList.remove(buttonDb[i].classList[1]);
    buttonDb[i].classList.add("btn-primary");
  }
}
