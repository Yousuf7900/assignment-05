
function calculate(price, money, parent) {

    const number = /\d/;
    const string = /[a-zA-Z]/;
    


    if (number.test(money) && string.test(money)) {
        alert('Spread your Hand.')
    }
    else if (number.test(money)) {
        const temp = parseInt(price.innerText);
        price.innerText = parseInt(money) + temp;
        const myAccount = document.querySelector('#total-Account');
        myAccount.innerText = myAccount.innerText - money;
        const modal=document.querySelector('#modal')
        modal.classList.remove('hidden')
        const output = document.querySelector('#output')
        const date = new Date()

        const h1 = parent.children[1].innerText;

        let apent = document.createElement('div')
        apent.innerHTML = `<div class="border-[1px] border-zinc-600 p-5 rounded-2xl">
            <h1 class="text-xl font-bold text-black "> ${money} Taka is ${h1}</h1> 
            <p class="text-black">Date : ${date.toDateString()}</p>
        </div>`;
        output.appendChild(apent)

    }
    else  {
        alert('Please enter a valid Amount.')
    }

}


const btn1 = document.querySelector('#donate-btn')
btn1.addEventListener('click', function (event) {
    const donation = document.querySelector('#price span')
    const inputField = document.querySelector('.card-text input').value;
    const inputFieldcontainer = document.querySelector('.card-text input');
    inputFieldcontainer.value = ''
    const parent = event.target.parentElement.parentElement;
    calculate(donation, inputField, parent)

})
document.querySelector('#donate-btn2').addEventListener('click', function (event) {
    const donation = document.querySelector('#price2 span')
    const inputField = document.querySelector('.card-text2 input').value;
    const inputFieldcontainer2 = document.querySelector('.card-text2 input');
    inputFieldcontainer2.value = ''
    const parent = event.target.parentElement.parentElement
    calculate(donation, inputField, parent)

})
document.querySelector('#donate-btn3').addEventListener('click', function (event) {
    const donation = document.querySelector('#price3 span')
    const inputField = document.querySelector('.card-text3 input').value;
    const inputFieldcontainer2 = document.querySelector('.card-text3 input');
    inputFieldcontainer2.value = ''
    const parent = event.target.parentElement.parentElement
    calculate(donation, inputField, parent)

})
document.querySelector('#donationBtn').addEventListener('click', function () {
    const container = document.querySelector('.card-containerr')
    container.classList.remove('hidden')
    const container2 = document.querySelector('.history-containerr')
    container2.classList.add('hidden')
    const historyBtn = document.querySelector('#historyBtn')
    const donationBtn = document.querySelector('#donationBtn')
    historyBtn.style.backgroundColor = '#18181b'
    historyBtn.style.color = '#a3e635'
    donationBtn.style.backgroundColor = '#a3e635'
    donationBtn.style.color = '#18181b'
})
document.querySelector('#historyBtn').addEventListener('click', function () {
    const container = document.querySelector('.card-containerr')
    container.classList.add('hidden')
    const container2 = document.querySelector('.history-containerr')
    container2.classList.remove('hidden')
    const historyBtn = document.querySelector('#historyBtn')
    const donationBtn = document.querySelector('#donationBtn')
    historyBtn.style.backgroundColor = '#a3e635'
    historyBtn.style.color = '#18181b'
    donationBtn.style.backgroundColor = '#18181b'
    donationBtn.style.color = '#a3e635'



})
document.querySelector('#modal button').addEventListener('click',function (){
    const modal=document.querySelector('#modal')
        modal.classList.add('hidden')
})
        