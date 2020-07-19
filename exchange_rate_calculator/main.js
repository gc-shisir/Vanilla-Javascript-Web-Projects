const currency_one = document.querySelector("#currency-one");
const amount_one = document.querySelector("#amount-one");
const currency_two = document.querySelector("#currency-two");
const amount_two = document.querySelector("#amount-two");
const rateElement = document.querySelector("#rate");
const swap = document.querySelector("#swap");

function calculate() {
  const currency_one_value = currency_one.value;
  const currency_two_value = currency_two.value;
  fetch(`https://api.exchangerate-api.com/v4/latest/${currency_one_value}`)
    .then((res) => res.json())
    .then((data) => {
      const rate = data.rates[currency_two_value];
      rateElement.innerText = `1 ${currency_one_value} = ${
        rate + " " + currency_two_value
      }`;
      amount_two.value = (amount_one.value * rate).toFixed(3);
      // console.log(rate);
    });
}

currency_one.addEventListener("change", calculate);
currency_two.addEventListener("change", calculate);
amount_one.addEventListener("input", calculate);
amount_two.addEventListener("input", calculate);
swap.addEventListener("click", () => {
  const temp = currency_one.value;
  currency_one.value = currency_two.value;
  currency_two.value = temp;
  calculate();
});

calculate();
