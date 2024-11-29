
/* USING THE NEW API ENDPOINT URL */

function myfunction() {
    let from = document.getElementById("countries").value;
    let to = document.getElementById("countries2").value; 
    let fromAmount = document.getElementById("amount").value;

    // var apiKey = '0YIyK94BA3GuoZyEq61HGBssDYDdyJg6fGHcsHly'
    
    fetch(`https://api.freecurrencyapi.com/v1/latest?apikey=${apiKey}&currencies=${newtocurrency}&base_currency=${newfromcurrency}`)
    .then(response => response.json())
    .then(rates => {
        for (let rate in rates) {
            console.log(rates[rate][to]);
            console.log(rates)
            // let calc = rates[rate]; //You need to pass rate back into the object to get the value
            // let total = (calc * fromAmount); //calculation
            // console.log(total); 
            // toAmount.value = total;
            // document.getElementById("amount2").innerHTML = `${to} ${total}`;

            let exRate = rates[rate][newtocurrency];

            document.getElementById("rate_to").innerHTML = `${newtosymbol} ${exRate} ${newtocurrency}`;
            console.log(exRate)


        dbPromise.then(db => {
            const ty = db.transaction('rates', 'readwrite');
            const ratestore = ty.objectStore('rates');

            ratestore.put({
                rate: calc,
                id: `${from}_${to}`
            });
            return ty.complete;
        });
        return rate_value;
        }
    })


    // let fetchdata = {
    //     method: 'GET',
    //     // body: data,
    //     headers: new Headers()
    // }

    // fetch(url).then(response => response.json()).then(data => currencyOption(data.results));

}

