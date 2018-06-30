// import {idb} from 'idb-master/lib/idb.js';


/* var dbPromise = idb.open('test2', 1, function(upgradeDb){
    var tx = upgradeDb.createObjectStore('countries', {keyPath: 'id'});
    tx.put('world', 'hello');
}); */



let currencies;
/* const dbPromise = idb.open('currencies_country', 1, upgradeDb => {
   switch (upgradeDb.oldversion) {
        case 0:
        upgradeDb.createObjectStore('countries', {keyPath: 'id'});
    }
});
 */


var dbPromise = idb.open('test2', 1, function(upgradeDb){
    var tx = upgradeDb.createObjectStore('countries', {keyPath: 'id'});
    tx.put('world', 'hello');
});


fetch('https://free.currencyconverterapi.com/api/v5/currencies').then(response => response.json()).then(function(currency) {
    dbPromise.then(db => {
        if(!db) return;

        currencies = [currency.results];

        const ty = db.transaction('countries', 'readwrite');
        const store = ty.objectStore('countries');

        currencies.forEach(countrycurrency => {
            for (let value in countrycurrency){
                store.put(countrycurrency[value]);
            }
        });
        return ty.complete;

        

        
       
    });
});


var dbPromise = idb.open('rate', 1, function(upgradeDb){
    var tx = upgradeDb.createObjectStore('convert', {keyPath: 'id'});
    tx.put('world', 'hello');
});

let rates
fetch('https://free.currencyconverterapi.com/api/v5/convert').then(response => response.json()).then(function(converts) {
    dbPromise.then(db => {
        if(!db) return;

        rates = [converts.results];

        const ty = db.transaction('convert', 'readwrite');
        const store = ty.objectStore('convert');

        rates.forEach(countryrate => {
            for (let value in countryrate){
                store.put(countryrate[value]);
            }
        });
        return ty.complete;

        

        
       
    });
});
// }