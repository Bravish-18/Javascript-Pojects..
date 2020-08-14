let d;

function allowDrop(ev) {
  ev.preventDefault();
}

function dragstart(ev) {
  d = ev.target.id;
}

function drop(ev) {
  ev.target.append(document.getElementById(d));
}
