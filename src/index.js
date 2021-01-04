const btn = document.querySelector(".btn");
const inp = document.querySelector("input");
const box = document.querySelector(".box");
const cht = document.querySelector(".cht");
const lengthInp = document.querySelector(".length");
const upperInp = document.querySelector(".upper");
const lowerInp = document.querySelector(".lower");
const numInp = document.querySelector(".num");
const symInp = document.querySelector(".sym");

lengthInp.value = 12;

function addPassword(password) {
  inp.value = password;
}

const fetchPassw = () => {
  const qs = new URLSearchParams({
    length: lengthInp.value || 12,
    upper: upperInp.checked,
    lower: lowerInp.checked,
    numbers: numInp.checked,
    symbols: symInp.checked,
  });
  fetch(`http://localhost:3000/?${qs}`)
    .then((r) => r.text())
    .then((pwd) => addPassword(pwd));
};

btn.addEventListener("click", (e) => {
  fetchPassw();
});

fetchPassw();
