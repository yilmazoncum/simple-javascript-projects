const api = "http://api.exchangeratesapi.io/v1/latest?access_key=81f875bcb3759a9ab540ec45e0f05c48"

const currency1 = document.getElementById('currency_one')
const currency2 = document.getElementById('currency_two');
const amount = document.getElementById('amount');
const result = document.getElementById('result');
const btnCalculate = document.getElementById('btn_calculate');

//get symbols
fetch('http://api.exchangeratesapi.io/v1/symbols?access_key=81f875bcb3759a9ab540ec45e0f05c48')
    .then(response => response.json())
    .then(data =>{
        data = data.symbols;
        const keys = Object.keys(data);
        const values = Object.values(data);

        let options;
        for(let i = 0; i < keys.length; i++ ){
            options += `<option value=${keys[i]}> ${values[i]}</option>`
        }
        currency1.innerHTML += options;
        currency2.innerHTML += options;
    })
    

    btnCalculate.addEventListener('click',() =>{

        
        fetch(`http://api.exchangeratesapi.io/v1/latest?access_key=81f875bcb3759a9ab540ec45e0f05c48`)
        .then(res => res.json())
        .then(data => {
            //console.log(data);
            const base = data.rates[currency1.value];
            const to = data.rates[currency2.value];
            result.innerHTML = `${amount.value} ${currency1.value} = ${(parseFloat(amount.value)*(parseFloat(base)/parseFloat(to))).toPrecision(5)} ${currency2.value}`
            
        });
    })