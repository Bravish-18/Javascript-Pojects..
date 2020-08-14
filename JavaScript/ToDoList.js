function tdl() {
  let v = document.getElementById("val").value;
  let t = document.createTextNode(v);
  let li = document.createElement("li");
  li.setAttribute("id", "c2");
  li.appendChild(t);
  let list = document.getElementById("mylist");
  list.appendChild(li);
}
let button = document.getElementById("resetButton");

button.onclick = () => {
  let l1 = document.getElementById("mylist");
  l1.removeChild(l1.childNodes[0]);
};
