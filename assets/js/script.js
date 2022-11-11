const params = new Proxy(new URLSearchParams(window.location.search), {
    get: (searchParams, prop) => searchParams.get(prop),
});
// Get the value of "some_key" in eg "https://example.com/?some_key=some_value"
let prodvalue = params.prod; // "some_value"
let prijsvalue = params.prijs;


//alert(prodvalue)
//console.log(prodvalue)

let pd = document.getElementById('productinfo');
pd.innerHTML = prodvalue;

let pprijs = document.getElementById('productprijs');
pprijs.innerHTML = prijsvalue;
