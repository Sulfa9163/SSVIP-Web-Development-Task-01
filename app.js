let select = document.querySelectorAll('.Currency')
let btn = document.getElementById('btn')
let amount = document.getElementById('amount')

fetch('https://api.frankfurter.app/currencies')
.then(res => res.json())
.then(res => displayCurrencies(res))

function displayCurrencies(res)
{
   let curr = Object.entries(res)
   for(let i=0 ; i < curr.length; i++){
        let option = `<option value="${curr[i][0]}">${curr[i][0]}</option>`
        select[0].innerHTML += option
        select[1].innerHTML += option
   }
}

btn.addEventListener('click' ,() =>{
    let curr1 = select[0].value
    let curr2 = select[1].value
    let inputVal = amount.value
    if(curr1 === curr2)
        alert("Choosing different currency")
    else
        getRate(curr1,curr2,inputVal)
});

function getRate(curr1,curr2,inputVal){
    const host = 'api.frankfurter.app';
    fetch(`https://${host}/latest?amount=${inputVal}&from=${curr1}&to=${curr2}`)
    .then(resp => resp.json())
    .then((data) => {
        let rate =Object.values(data.rates)[0]
        document.getElementById('result').innerHTML = `Today Rate is ${rate}`
    });
}