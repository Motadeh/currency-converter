const url = 'https://free.currencyconverterapi.com/api/v5/currencies';
fetch(url).then(response => response.json()).then(data => currencyOption(data.results));

function currencyOption(data){

  let fromcurrency = document.getElementById('countries');
  let tocurrency = document.getElementById('countries2');


  for (let currency of Object.keys(data).sort()){
    let {currencyName, id} = data[currency];

        
    let optionFrom = document.createElement('option');
    optionFrom.innerText = `${currency} (${currencyName})`;
    optionFrom.value = `${currency}`;

    let optionTo = document.createElement('option');
    optionTo.innerText = `${currency} (${currencyName})`;
    optionTo.value = `${currency}`;

    fromcurrency.appendChild(optionFrom);

    tocurrency.appendChild(optionTo);

  }
}

 if ('serviceWorker' in navigator) {
    window.addEventListener('load', function() {
      navigator.serviceWorker.register('/sw.js').then(function(registration) {
        // Registration was successful
        console.log('ServiceWorker registration successful with scope: ', registration.scope);
      }, function(err) {
        // registration failed :(
        console.log('ServiceWorker registration failed: ', err);
      });
    });
  }
  