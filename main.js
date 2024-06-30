// const url = 'https://free.currencyconverterapi.com/api/v5/currencies';

var apiKey = '0YIyK94BA3GuoZyEq61HGBssDYDdyJg6fGHcsHly'

const url = `https://api.freecurrencyapi.com/v1/currencies?apikey=${apiKey}`;


fetch(url).then(response => response.json()).then(data => {
  currencyOption(data.data);
  console.log(data.data)
});

// console.log()

function currencyOption(data) {

  let fromcurrency = document.getElementById('countries');
  let tocurrency = document.getElementById('countries2');


  for (let currency of Object.keys(data).sort()) {
    let { name, code } = data[currency];


    let optionFrom = document.createElement('option');
    optionFrom.innerText = `${currency} (${name})`;
    optionFrom.value = `${code}`;

    let optionTo = document.createElement('option');
    optionTo.innerText = `${currency} (${name})`;
    optionTo.value = `${code}`;

    fromcurrency.appendChild(optionFrom);

    tocurrency.appendChild(optionTo);

  }
}

if ('serviceWorker' in navigator) {
  window.addEventListener('load', function () {
    navigator.serviceWorker.register('/sw.js').then(function (registration) {
      // Registration was successful
      console.log('ServiceWorker registration successful with scope: ', registration.scope);
    }, function (err) {
      // registration failed :(
      console.log('ServiceWorker registration failed: ', err);
    });
  });
}
