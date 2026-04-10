// DOM - Document Object Model

const form1 = document.getElementById('form1')
const form2 = document.getElementById('landing-price-form')
const cbmBtn = document.getElementById('cbm-btn')
const landingCostBtn = document.getElementById('landing-btn')
const titleDiv = document.getElementById('title-div')
const result = document.getElementById('result')
const display = document.getElementById('display')


// function
// form1.addEventListener('submit', (event) =>{
//     event.preventDefault(); // prevent the form reloading after submit

//     const length = document.getElementById('length').value
//     const width = document.getElementById('width').value
//     const height = document.getElementById('height').value


//     const ans = length * width * height


//     result.value = ans

//     display.innerHTML = `
//     <h2 id='results-heading'>RESULTS</h2>
//     <p>${length} * ${width} * ${height} = <b>${ans} cm<sup>3</sup><b></p>
   
//     <p> ${length} cm = <b>${length/100} m</b>, ${width} cm =
//     <b> ${width/100}  m</b>, ${height} cm = <b>${height/100} m</b>,</p>
    
//      <p>${length/100} * ${width/100} * ${height/100} = <b>${
//         (length/100) * (width/100) * (height/100)} cbm</b></p>

//     `


// })


const showForm1 = () => {
    titleDiv.innerText = 'CUBIC METER CALCUTOR'
    form1.style.display = 'block'
    form2.style.display = 'none'
    cbmBtn.style.color = 'teal'
    landingCostBtn.style.color = 'black'
    display.innerHTML = ''
}

const showForm2 = () => {
    titleDiv.innerText = 'LANDING COST CALCULATOR'
    form1.style.display = 'block'
    form2.style.display = 'none'
    cbmBtn.style.color = 'black'
    landingCostBtn.style.color = 'teal'
    display.innerHTML = ''
}



const submitForm1 = (event) => {
    event.preventDefault()

     const length = document.getElementById('length').value
    const width = document.getElementById('width').value
    const height = document.getElementById('height').value


    const ans = length * width * height


    result.value = ans

    display.innerHTML = `
    <h2 id='results-heading'>RESULTS</h2>
    <p>${length} * ${width} * ${height} = <b>${ans} cm<sup>3</sup><b></p>
   
    <p> ${length} cm = <b>${length/100} m</b>, ${width} cm =
    <b> ${width/100}  m</b>, ${height} cm = <b>${height/100} m</b>,</p>
    
     <p>${length/100} * ${width/100} * ${height/100} = <b>${
        (length/100) * (width/100) * (height/100)} cbm</b></p>

    `
}

const submitForm2 = (event) =>{
    event.preventDefault()

    const price = parseFloat(document.getElementById('price').value)
    const weight = parseFloat(document.getElementById('weight').value)
    const shippingFee = parseFloat(document.getElementById('shipping-fee').value)
    const clearingFee = parseFloat(document.getElementById('clearing-fee').value)
    const exchangeRate = parseFloat(document.getElementById('exchange-rate').value)

    const shippingFeeNaira = weight * shippingFee * exchangeRate
    const totalClearingFee = weight *  clearingFee

    display.innerHTML = `
    <p id='display-title'>Landing Cost</p>

    <p>Price of Goods: <b>${price}</b></p>
    <p>Shipping in (N): <b>(${weight} * ${shippingFee}) * ${exchangeRate} = ${shippingFeeNaira.toLocaleString()} N</p>

    <p>Clearing Total: ${weight} * ${clearingFee} * ${(weight * clearingFee).toLocaleString()} N</p>

    <p>Landing Cost: ${price} + ${shippingFeeNaira} + ${totalClearingFee} = ${(price + shippingFeeNaira + totalClearingFee).toLocaleString()} N</p>
    `
}