function myfunction() {
    let from = document.getElementById("countries").value;
    let to = document.getElementById("countries2").value; 
    let fromAmount = document.getElementById("amount").value;
    
    fetch(`https://free.currencyconverterapi.com/api/v5/convert?q=${from}_${to}&compact=ultra`)
    .then(response => response.json())
    .then(rates => {
        for (let rate in rates) {
            console.log(rates[rate]);
            let calc = rates[rate]; //You need to pass rate back into the object to get the value
            let total = (calc * fromAmount); //calculation
            console.log(total); 
            // toAmount.value = total;
            document.getElementById("amount2").innerHTML = `${to} ${total}`;

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

    const url = `https://free.currencyconverterapi.com/api/v5/currencies/${from}`;
    let data = {
        Country: 'ayn'
    }

    let fetchdata = {
        method: 'POST',
        body: data,
        headers: new Headers()
    }

    fetch(url, fetchdata).then(function(){
        console.log(res);
    });

}
