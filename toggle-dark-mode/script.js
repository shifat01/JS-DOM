document.getElementById("toggleBtn").addEventListener("click", function() {
  document.body.classList.toggle("dark");
});

document.head.insertAdjacentHTML("beforeend", `
  <style>
    .dark { background-color: black; color: white; }
  </style>
`);