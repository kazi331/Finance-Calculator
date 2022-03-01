
// grab the input fields
const incomeInput = document.getElementById('income');
const foodInput = document.getElementById('food');
const rentInput = document.getElementById('rent');
const clothsInput = document.getElementById('cloths');
const saveInput = document.getElementById('save');

// grab the buttons 
const calculateBtn = document.getElementById('calculate-btn');
const saveBtn = document.getElementById('save-btn');

// show result on the UI 
const expenceMsg = document.getElementById('expence');
const balanceMsg = document.getElementById('balance');
const saveMsg = document.getElementById('saving-amount');
const remainMsg = document.getElementById('remain-balance');

// alert boxes 
const calcAlert = document.getElementById('calculate-alert');
const saveAlert = document.getElementById('save-alert');

function myCalcAlert(fieldName) {
    return `Please, insert a valid amount in ${fieldName} field.`
};
calculateBtn.addEventListener('click', function () {
    // grab value from input fields
    const food = parseFloat(foodInput.value);
    const rent = parseFloat(rentInput.value);
    const cloths = parseFloat(clothsInput.value);


    const expence = food + rent + cloths;
    const balance = incomeInput.value - expence;
    // condition for income and expence validation 
    if (incomeInput.value < 1) {
        calcAlert.innerText = myCalcAlert('"income"');
    } else if (food < 0 || foodInput.value == '') {
        calcAlert.innerText = myCalcAlert('"food"');
    } else if (rent < 0 || rentInput.value == '') {
        calcAlert.innerText = myCalcAlert('"rent"');
    } else if (cloths < 0 || clothsInput.value == '') {
        calcAlert.innerText = myCalcAlert('"cloths"');
    } else if (expence > incomeInput.value) {
        calcAlert.innerText = `Oh Oh! You need to earn more to spend so much ℹ️`;
    } else {
        expenceMsg.innerText = expence;
        balanceMsg.innerText = balance;

        // clean up alert and input fields 
        // incomeInput.value = ''; 
        // foodInput.value = '';
        // rentInput.value = '';
        // clothsInput.value = '';
        // calcAlert.innerText = '';
        // remove alert 
        calcAlert.innerText = '';
        saveBtn.removeAttribute('disabled', true);
        saveBtn.style.background = '#131B2E';
    }

});


saveBtn.addEventListener('click', function () {
    const income = parseFloat(incomeInput.value);
    const save = parseFloat(saveInput.value);
    let saveAmount = income * (save / 100);
    const currentBalance = parseFloat(balanceMsg.innerText);
    let remainAmount = currentBalance - saveAmount;


    if (saveAmount < currentBalance && saveAmount > 0) {
        saveMsg.innerText = saveAmount.toFixed(2);;
        remainMsg.innerText = remainAmount.toFixed(2);
        // saveInput.value = '';
        saveAlert.innerText = '';

    } else if (saveAmount > currentBalance) {
        saveAlert.innerText = 'Your Balance is low ℹ️';
    } else {
        saveAlert.innerText = 'Please, insert a valid Number !'
    }
});