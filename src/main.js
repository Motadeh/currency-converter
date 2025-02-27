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

let newfromcurrencyData;
let newtocurrencyData;

let fromcurrency = document.getElementById('countries');
let tocurrency = document.getElementById('countries2');
let tosymbol;
let fromsymbol;

EU_flag = 'https://raw.githubusercontent.com/ibrahimhajjaj/currencies-with-flags/refs/heads/main/flags/eu.svg'

const setCurrency = (data, id, close = false) => {
  // return (
  // console.log(id)


  let flag_data;



  if (id == 'curr_list_1') {
    flag_data = JSON.parse(decodeURIComponent(data))


    newfromcurrencyData = flag_data

    newfromcurrency = flag_data.code;

    newfromsymbol = flag_data.symbol_native;

    myfunction(0);

    if (close) {

      document.getElementById('dropdown-currency-trigger').click();

      document.getElementById('arrow').setAttribute("d", "m8 10 4 4 4-4");

    }

    return (

      document.getElementById('currency-button').innerHTML = `<div class='w-1/3 flex cursor-pointer'><img class='w-4 h-4 rounded-md' src='${newfromcurrency == 'EUR' ? EU_flag : list_of_flags.find(flag => flag.code === flag_data.code).flag}' /></div> <div class='w-2/3'>${flag_data.code}</div>`
      // console.log('e.target.innerText')
      // )
    )

  } else if (id == 'curr_list_2') {
    flag_data = JSON.parse(decodeURIComponent(data))


    newtocurrencyData = flag_data

    newtocurrency = flag_data.code;

    newtosymbol = flag_data.symbol_native;

    myfunction(1);

    if (close) {

      document.getElementById('dropdown-currency-trigger-2').click();

      document.getElementById('arrow2').setAttribute("d", "m8 10 4 4 4-4");

    }

    return (

      document.getElementById('currency-button-2').innerHTML = `<div class='w-1/3 flex cursor-pointer'><img class='w-4 h-4 rounded-md' src='${newtocurrency == 'EUR' ? EU_flag : list_of_flags.find(flag => flag.code === flag_data.code).flag}' /></div> <div class='w-2/3'>${flag_data.code}</div>`
      // console.log('e.target.innerText')
      // )
    )

  } else {

    let switched_from = newtocurrencyData;

    let switched_to = newfromcurrencyData;


    newfromcurrency = newtocurrencyData.code;

    newfromsymbol = newtocurrencyData.symbol_native;

    newtocurrency = newfromcurrencyData.code;

    newtosymbol = newfromcurrencyData.symbol_native;



    newfromcurrencyData = switched_from;

    newtocurrencyData = switched_to;


    myfunction(2);

    return (

      document.getElementById('currency-button').innerHTML = `<div class='w-1/3 flex cursor-pointer'><img class='w-4 h-4 rounded-md' src='${newfromcurrency == 'EUR' ? EU_flag : list_of_flags.find(flag => flag.code === newfromcurrency).flag}' /></div> <div class='w-2/3'>${newfromcurrency}</div>`,

      document.getElementById('currency-button-2').innerHTML = `<div class='w-1/3 flex cursor-pointer'><img class='w-4 h-4 rounded-md' src='${newtocurrency == 'EUR' ? EU_flag : list_of_flags.find(flag => flag.code === newtocurrency).flag}' /></div> <div class='w-2/3'>${newtocurrency}</div>`
      // console.log('e.target.innerText')
    )

  }
}

const mapList = (data, button_name) => {

  // let button_name = name;

  // console.log(data)

  let un_list = Object.values(data).map((flag_data, i) => {

    // console.log(button_name)

    let { code, name, symbol_native } = flag_data

    let flag;

    flag = list_of_flags && list_of_flags.find(flag => flag.code === code).flag


    let en_flag_data = encodeURIComponent(JSON.stringify(flag_data))

    if (i == 0) {
      // document.getElementById('currency-button').innerHTML = `<div><img src='${list_of_flags.find(flag => flag.code === code).flag}' /></div> <div>${code}</div>`;
      // document.getElementById('currency-button-2').innerHTML = `<div><img src='${list_of_flags.find(flag => flag.code === code).flag}' /></div> <div>${code}</div>`;

      setCurrency(en_flag_data, 'curr_list_1')

      setCurrency(en_flag_data, 'curr_list_2')


      newfromcurrency = code;
      newfromsymbol = symbol_native;
      newtocurrency = code;
      newtosymbol = symbol_native;
    }


    return (

      // `<li id='curr_list' key=${code}><img src = 'https://raw.githubusercontent.com/ibrahimhajjaj/currencies-with-flags/refs/heads/main${flag}' alt="My Happy SVG"/> ${code}</li>`
      `<li id=${button_name} value=${code} key=${code} class="flex items-center w-44 h-[37px] py-2 px-4 cursor-pointer" onclick="setCurrency('${en_flag_data}', this.id, true)"><div class="w-[19.6px]"><img src = '${code == 'EUR' ? EU_flag : flag}' alt=${code} onclick = 'null'/></div><div class="w-[30px] pl-4 text-sm font-normal text-gray-900">${code}</div></li>`
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
        document.getElementById("rate_to").innerHTML = `${newtosymbol} ${exRate.toLocaleString("en", { minimumFractionDigits: 2 })} ${newtocurrency}`;
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
        return;
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
        document.getElementById("rate_to").innerHTML = `${newtosymbol} ${exRate.toLocaleString("en", { minimumFractionDigits: 2 })} ${newtocurrency}`;
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
        return;
      }
    })
}

function myfunction(action) {
  let fromAmount = document.getElementById("fromAmount").value;
  let toAmount = document.getElementById("toAmount").value;
  // let fromAmount = document.getElementById("toAmount").value;

  // console.log(fromAmount, toAmount)

  // var apiKey = '0YIyK94BA3GuoZyEq61HGBssDYDdyJg6fGHcsHly'

  fetch(`https://api.freecurrencyapi.com/v1/latest?apikey=${apiKey}&currencies=${newtocurrency}&base_currency=${newfromcurrency}`)
    .then(response => response.json())
    .then(rates => {

      let exRate = rates.data[newtocurrency];
      exRate = exRate.toLocaleString("en", { minimumFractionDigits: 2 });

      let result = (action == 0) ? (exRate * fromAmount) : (toAmount / exRate); //calculation
      // result = parseFloat(result).toFixed(2);
      result = result.toLocaleString("en", { minimumFractionDigits: 2 });

      let input = result;
      input = input.replace(/\,/g, ''); // 1125, but a string, so convert it to number
      input = parseInt(input, 10);

      // num.toLocaleString("en", { minimumFractionDigits: 2 })


      if (action == 0) {
        document.getElementById("toAmount").value = (fromAmount == '') ? document.getElementById("fromAmount").value = '' : input;
        document.getElementById("rate_from").innerHTML = `${newfromsymbol} ${fromAmount == '' ? 1.00.toLocaleString("en", { minimumFractionDigits: 2 }) : fromAmount} ${newfromcurrency} =`;
        document.getElementById("rate_to").innerHTML = `${newtosymbol} ${fromAmount == '' ? exRate : result} ${newtocurrency}`;
      } else {
        document.getElementById("fromAmount").value = (toAmount == '') ? document.getElementById("toAmount").value = '' : input;
        document.getElementById("rate_from").innerHTML = `${newfromsymbol} ${toAmount == '' ? 1.00.toLocaleString("en", { minimumFractionDigits: 2 }) : result} ${newfromcurrency} =`;
        document.getElementById("rate_to").innerHTML = `${newtosymbol} ${toAmount == '' ? exRate : toAmount} ${newtocurrency}`;
      }

      // console.log(typeof(toAmount)); 
      // toAmount.value = total;

      // console.log(exRate)

      // dbPromise.then(db => {
      //     const ty = db.transaction('rates', 'readwrite');
      //     const ratestore = ty.objectStore('rates');

      //     ratestore.put({
      //         rate: calc,
      //         id: `${from}_${to}`
      //     });
      //     return ty.complete;
      // });
      return;

    })


  // let fetchdata = {
  //     method: 'GET',
  //     // body: data,
  //     headers: new Headers()
  // }

  // fetch(url).then(response => response.json()).then(data => currencyOption(data.results));

}

function arrowChange(num) {
  // m
  var d_value = num == 1 ? document.getElementById('arrow').getAttribute("d") : document.getElementById('arrow2').getAttribute("d");

  if (num == 1) {
    document.getElementById('arrow2').setAttribute("d", "m8 10 4 4 4-4");
    document.getElementById('arrow').setAttribute("d", d_value == "m8 10 4 4 4-4" ? "m16 14l-4-4l-4 4" : "m8 10 4 4 4-4");
  } else {
    document.getElementById('arrow').setAttribute("d", "m8 10 4 4 4-4");
    document.getElementById('arrow2').setAttribute("d", d_value == "m8 10 4 4 4-4" ? "m16 14l-4-4l-4 4" : "m8 10 4 4 4-4");
  }

  return
}

function swap() {

  setCurrency(newfromcurrencyData, 'curr_list_3')

}

function reset() {
  document.getElementById('dropdown-currency').classList.contains('hidden') && document.getElementById('arrow').setAttribute("d", "m8 10 4 4 4-4");
  document.getElementById('dropdown-currency-2').classList.contains('hidden') && document.getElementById('arrow2').setAttribute("d", "m8 10 4 4 4-4");
}
