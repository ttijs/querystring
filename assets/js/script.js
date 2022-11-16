const params = new Proxy(new URLSearchParams(window.location.search), {
    get: (searchParams, prop) => searchParams.get(prop),
});

// de waarde van "een_key" ophalen in bijv. "https://example.com/?een_key=dit-is-de-waarde"
// let waarde = params.een_key;

let prodvalue = params.prod; // de waarde van de de parameter 'prod'
let prijsvalue = params.prijs; // de waarde van de de parameter 'prijs'

// opslaan in localstorage. Kunnen we het op een andere pagina weer opvragen
localStorage.setItem('productwaarde', prodvalue);
localStorage.setItem('productprijs', prijsvalue);

// div zoeken waar de div is waar we de waarde in beeld willen brengen
let proddiv = document.getElementById('productinfo');
let prijsdiv = document.getElementById('productprijs');

// de waarde in beeld brengen met innerHTML
proddiv.innerHTML = prodvalue;
prijsdiv.innerHTML = prijsvalue;

