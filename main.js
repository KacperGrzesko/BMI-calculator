const btn = document.querySelector("#btn");
btn.addEventListener("click", function() {
  let wynik = waga.value / Math.pow(wzrost.value, 2);
  document.querySelector("#wynik").innerHTML = wynik.toFixed(2);
  document.getElementById("wynik").style.display = "block";
  if (wynik >= 30) {
    document.getElementById("wynik").style.backgroundColor = "#D12124";
  } else if (wynik >= 25) {
    document.getElementById("wynik").style.backgroundColor = "#EF930A";
  } else if (wynik >= 18.5) {
    document.getElementById("wynik").style.backgroundColor = "#4DA93E";
  } else {
    document.getElementById("wynik").style.backgroundColor = "#36A5DD";
  }
});
