const currensyFirstEl = document.getElementById("currency-first");
const wortFirstEl = document.getElementById("wortFirst");

const currensySecondEl = document.getElementById("currency-second");
const wortSecondEl = document.getElementById("wortSecond");

const exchangeRateEl = document.getElementById("exchange");

updateRate();


function updateRate(){
	fetch(`https://v6.exchangerate-api.com/v6/d5f74ccb3ac10354a89c8f70/latest/${currensyFirstEl.value}`)
	.then((res) => res.json())
	.then((data) => { const rate = data.conversion_rates[currensySecondEl.value];
		console.log(rate);
		exchangeRateEl.innerText = `1 ${currensyFirstEl.value} = ${rate + " " + currensySecondEl.value}`;
		wortSecondEl.value = (wortFirstEl.value * rate).toFixed(2);
	});
}

currensyFirstEl.addEventListener("change", updateRate);
currensySecondEl.addEventListener("change", updateRate);
wortFirstEl.addEventListener("input", updateRate);