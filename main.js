const btn = document.querySelector("#btn");
btn.addEventListener("click", function() {
  let result = weight.value / Math.pow(height.value, 2);
  let outcome = document.querySelector("#result");

  outcome.innerHTML = result.toFixed(2);
  outcome.style.display = "block";
  if (result >= 30) {
    outcome.style.backgroundColor = "#D12124";
  } else if (result >= 25) {
    outcome.style.backgroundColor = "#EF930A";
  } else if (result >= 18.5) {
    outcome.style.backgroundColor = "#4DA93E";
  } else {
    outcome.style.backgroundColor = "#36A5DD";
  }
});
