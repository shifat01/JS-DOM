let count = 0;
const counter = document.getElementById("counter");

document.getElementById("inc").onclick = () => {
  count++;
  counter.innerText = count;
};

document.getElementById("dec").onclick = () => {
  count--;
  counter.innerText = count;
};