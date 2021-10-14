const currencies = [
  'EUR',
  'CAD',
  'HKD',
  'ISK',
  'PHP',
  'DKK',
  'HUF',
  'CZK',
  'AUD',
  'RON',
  'SEK',
  'IDR',
  'INR',
  'BRL',
  'RUB',
  'HRK',
  'JPY',
  'THB',
  'CHF',
  'SGD',
  'PLN',
  'BGN',
  'TRY',
  'CNY',
  'NOK',
  'NZD',
  'ZAR',
  'USD',
  'MXN',
  'ILS',
  'GBP',
  'KRW',
  'MYR'
]
//root access
const root = document.getElementById('root')

//create container div
const container = document.createElement('div')
container.id = 'container'
root.appendChild(container)

//create paragraph element
const para = document.createElement('p')
para.innerText = "Convert USD to "
container.appendChild(para)

//create dropdown element
let dropdown = document.createElement('select')

for(currency of currencies) {
  let option = document.createElement('option')
  option.innerText = currency
  option.value = currency
  dropdown.appendChild(option)
}
container.appendChild(dropdown)

//create input-bar and button
let input = document.createElement('input')
input.placeholder = 'Amount'
let button = document.createElement('button')
button.innerText = 'Convert!'
let result = document.createElement('p')
result.innerText = ``
let inputDiv = document.createElement('div')
inputDiv.id = 'curr-input'
inputDiv.appendChild(input)
inputDiv.appendChild(button)
container.appendChild(inputDiv)

fetch('')
  .then(response => response.json())
  .then(date => {

  })

