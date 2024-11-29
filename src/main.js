// const url = 'https://free.currencyconverterapi.com/api/v5/currencies';


// `https://gist.github.com/ibrahimhajjaj/a0e39e7330aebf0feb49912f1bf9062f.js`

var apiKey = '0YIyK94BA3GuoZyEq61HGBssDYDdyJg6fGHcsHly'

const url = `https://api.freecurrencyapi.com/v1/currencies?apikey=${apiKey}`;

const flags = `<script src="https://gist.github.com/ibrahimhajjaj/a0e39e7330aebf0feb49912f1bf9062f.js"></script>`

let list_of_flags;


document.getElementById("fromAmount")
  .addEventListener("input", () => myfunction(0));

document.getElementById("toAmount")
  .addEventListener("input", () => myfunction(1));


fetch(url).then(response => response.json()).then(currencyData => {

  // fetch(`https://raw.githubusercontent.com/ibrahimhajjaj/currencies-with-flags/refs/heads/main/sample-flag-svg-output.json`)
  fetch(`https://gist.githubusercontent.com/ibrahimhajjaj/a0e39e7330aebf0feb49912f1bf9062f/raw/d160e7d3b0e11ea3912e97a1b3b25b359746c86a/currencies-with-flags.json`)

    .then(response => response.json())
    .then(flags => {
      list_of_flags = flags;

      currencyOption(currencyData.data);
    }
    )
    .catch((err) => {
      console.log(err)
    })

  // console.log(data.data)
});

let newfromcurrency;
let newtocurrency;

let newfromsymbol;
let newtosymbol;

let fromcurrency = document.getElementById('countries');
let tocurrency = document.getElementById('countries2');
let tosymbol;
let fromsymbol;

const setCurrency = (data, id) => {
  // return (
  // console.log(id)


  let flag_data = JSON.parse(decodeURIComponent(data))


  if (id == 'curr_list_1') {

    // fromcurrency.innerText = flag_data.code;

    newfromcurrency = flag_data.code;

    newfromsymbol = flag_data.symbol_native;

    myfunction(0);

  } else {

    // tocurrency.innerText = flag_data.code;

    newtocurrency = flag_data.code;

    newtosymbol = flag_data.symbol_native;

    myfunction(1);
  }



  return (

    id == 'curr_list_1' ?
      document.getElementById('currency-button').innerHTML = `<div><img src='${list_of_flags.find(flag => flag.code === flag_data.code).flag}' /></div> <div>${flag_data.code}</div>` :

      document.getElementById('currency-button-2').innerHTML = `<div><img src='${list_of_flags.find(flag => flag.code === flag_data.code).flag}' /></div> <div>${flag_data.code}</div>`
    // console.log('e.target.innerText')
    // )
  )
}

const mapList = (data, button_name) => {

  // let button_name = name;

  // console.log(data)

  let un_list = Object.values(data).map((flag_data, i) => {

    // console.log(button_name)

    let { code, name, symbol_native } = flag_data

    let flag;

    if (i == 0) {
      document.getElementById('currency-button').innerHTML = `<div><img src='${list_of_flags.find(flag => flag.code === code).flag}' /></div> <div>${code}</div> <div>V</div>`;
      document.getElementById('currency-button-2').innerHTML = `<div><img src='${list_of_flags.find(flag => flag.code === code).flag}' /></div> <div>${code}</div> <div>V</div>`;

      newfromcurrency = code;
      newfromsymbol = symbol_native;
      newtocurrency = code;
      newtosymbol = symbol_native;
    }

    flag = list_of_flags && list_of_flags.find(flag => flag.code === code).flag



    let en_flag_data = encodeURIComponent(JSON.stringify(flag_data))
    return (

      // `<li id='curr_list' key=${code}><img src = 'https://raw.githubusercontent.com/ibrahimhajjaj/currencies-with-flags/refs/heads/main${flag}' alt="My Happy SVG"/> ${code}</li>`
      `<li id=${button_name} value=${code} key=${code} class="flex items-center w-44 h-[37px] py-2 px-4" onclick="setCurrency('${en_flag_data}', this.id)"><div class="w-[19.6px]"><img src = '${flag}' alt=${code} onclick = 'null'/></div><div class="w-[30px] pl-4 text-sm font-normal text-gray-900">${code}</div></li>`
    )
  }).join('');
  return un_list;
}


function currencyOption(data) {


  // onclick='setCurrency(${flag_data})

  document.getElementById('dropdown-currency').innerHTML = mapList(data, 'curr_list_1');
  document.getElementById('dropdown-currency-2').innerHTML = mapList(data, 'curr_list_2');



  fetch(`https://api.freecurrencyapi.com/v1/latest?apikey=${apiKey}&currencies=${newtocurrency}&base_currency=${newfromcurrency}`)
    .then(response => response.json())
    .then(rates => {
      for (let rate in rates) {

        let exRate = rates[rate][newtocurrency];


        document.getElementById("rate_from").innerHTML = `${newfromsymbol} 1.00 ${newfromcurrency} = `;
        document.getElementById("rate_to").innerHTML = `${newtosymbol} ${exRate} ${newtocurrency}`;
        // console.log(exRate)


        dbPromise.then(db => {
          const ty = db.transaction('rates', 'readwrite');
          const ratestore = ty.objectStore('rates');

          ratestore.put({
            rate: calc,
            id: `${fromcurrency}_${tocurrency}`
          });
          return ty.complete;
        });
        return rate_value;
      }
    })

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
}


function getComboA() {

  // console.log(tocurrency.value, newfromcurrency)
  fetch(`https://api.freecurrencyapi.com/v1/latest?apikey=${apiKey}&currencies=${newtocurrency}&base_currency=${newfromcurrency}`)
    .then(response => response.json())
    .then(rates => {
      for (let rate in rates) {


        // console.log(tosymbol,fromsymbol)

        let exRate = rates[rate][newtocurrency];

        document.getElementById("rate_from").innerHTML = `${newfromsymbol} 1.00 ${newfromcurrency} = `;
        document.getElementById("rate_to").innerHTML = `${newtosymbol} ${exRate} ${newtocurrency}`;
        // console.log(exRate)


        dbPromise.then(db => {
          const ty = db.transaction('rates', 'readwrite');
          const ratestore = ty.objectStore('rates');

          ratestore.put({
            rate: calc,
            id: `${fromcurrency}_${tocurrency}`
          });
          return ty.complete;
        });
        return rate_value;
      }
    })
}

function myfunction(action) {
  let fromAmount = document.getElementById("fromAmount").value;
  let toAmount = document.getElementById("toAmount").value;
  // let fromAmount = document.getElementById("toAmount").value;

  // console.log(from)

  // var apiKey = '0YIyK94BA3GuoZyEq61HGBssDYDdyJg6fGHcsHly'

  fetch(`https://api.freecurrencyapi.com/v1/latest?apikey=${apiKey}&currencies=${newtocurrency}&base_currency=${newfromcurrency}`)
      .then(response => response.json())
      .then(rates => {

          let exRate = rates.data[newtocurrency];
          exRate = parseFloat(exRate).toFixed(2);

          let result = (action == 0) ? (exRate * fromAmount) : (toAmount / exRate); //calculation
          result = parseFloat(result).toFixed(2);


          if (action == 0) {
              document.getElementById("toAmount").value = (fromAmount == '') ? document.getElementById("fromAmount").value = '' : Math.round(result);
              document.getElementById("rate_from").innerHTML = `${newfromsymbol} ${fromAmount == '' ? 1 : fromAmount} ${newfromcurrency} =`;
              document.getElementById("rate_to").innerHTML = `${newtosymbol} ${fromAmount == '' ? exRate : result} ${newtocurrency}`;
          } else if (action = 1) {
              document.getElementById("fromAmount").value = (toAmount == '') ? document.getElementById("toAmount").value = '' : Math.round(result);;
              document.getElementById("rate_from").innerHTML = `${newfromsymbol} ${toAmount == '' ? 1 : result} ${newfromcurrency} =`;
              document.getElementById("rate_to").innerHTML = `${newtosymbol} ${toAmount == '' ? exRate : toAmount} ${newtocurrency}`;
          }

          // console.log(typeof(toAmount)); 
          // toAmount.value = total;
          
          console.log(exRate)

          // dbPromise.then(db => {
          //     const ty = db.transaction('rates', 'readwrite');
          //     const ratestore = ty.objectStore('rates');

          //     ratestore.put({
          //         rate: calc,
          //         id: `${from}_${to}`
          //     });
          //     return ty.complete;
          // });
          return rate_value;

      })


  // let fetchdata = {
  //     method: 'GET',
  //     // body: data,
  //     headers: new Headers()
  // }

  // fetch(url).then(response => response.json()).then(data => currencyOption(data.results));

}