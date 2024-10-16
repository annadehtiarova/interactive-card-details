document.addEventListener('DOMContentLoaded', function(){
    const confirmBtn = document.querySelector('.confirm');
    const rightContent = document.querySelector('.right-content');
    const rightContentSuccess = document.querySelector('.right-content-success');
    const inputs = document.querySelectorAll('.input');
    const cardNameInput = document.querySelector('.cardholder-name-input');
    const cardNameDisplay = document.querySelector('.cardholder-name-display');
    const cardNumberDisplay = document.querySelector('.card-number-display');
    const cardNumberInput = document.querySelector('.card-number-input');
    const cardMonthInput = document.querySelector('.month');
    const cardYearInput= document.querySelector('.year');
    const cardMonthDisplay = document.querySelector('.card-month-display');
    const cardYearDisplay = document.querySelector('.card-year-display');
    const cardCvcInput = document.querySelector('.cvc');
    const cardCvcDisplay = document.querySelector('.cvc-display');
    const errorMsg = document.querySelector('.error-message');
    
    function updateDisplays() {
        updateCardNumberDisplay();
        updateCardNameDisplay();
        updateMonthDisplay();
        updateYearDisplay();
        updateCvcDisplay();
    }

    function updateCardNumberDisplay(){
        let cardValue = cardNumberInput.value;
        cardNumberDisplay.innerText = cardValue ? cardValue : '0000 0000 0000 0000';
        cardNumberDisplay.style.fontSize = '20px';
        cardNumberDisplay.style.letterSpacing = '4px';
    }
    
    function updateCardNameDisplay(){
        let cardNameValue = cardNameInput.value;
       cardNameDisplay.innerText = cardNameValue ? cardNameValue : 'Jane Appleseed';
    
    }
    
    function updateMonthDisplay(){
        let monthValue = cardMonthInput.value.padStart(2, '0');
        cardMonthDisplay.innerText = monthValue ? monthValue : '00';
    
    }
    
    function updateYearDisplay(){
        let yearValue = cardYearInput.value.slice(-2);;
        cardYearDisplay.innerText = yearValue ? yearValue : '00';
    
    }
    
    function updateCvcDisplay(){
        let cvcValue = cardCvcInput.value;
        cardCvcDisplay.innerText = cvcValue ? cvcValue : '000';
    
    }

    inputs.forEach(function(input) {
        const errorMsg = input.nextElementSibling; 

        input.addEventListener('input', function() {
            input.classList.remove('error');
            errorMsg.style.display = 'none';
            updateDisplays(); 
        });
    });

    

   
    // Listen to button click
    confirmBtn.addEventListener('click', function(event){
        event.preventDefault();
       

        let allInputsValid = true;

        // Iterate over each input field and validate
        inputs.forEach(function(input){
            const errorMsg = input.nextElementSibling;

            if (!input.value) {
                input.classList.add('error');
                errorMsg.style.display = 'block';
                allInputsValid = false;
            }  else {
                input.classList.remove('error'); 
                errorMsg.style.display = 'none';
            } 


            // Validate card number
            if (input.classList.contains('card-number-input')) {
                if (!input.value) {
                    input.classList.add('error');
                    errorMsg.style.display = 'block';
                    allInputsValid = false;
                }
                else if (!/^\d+$/.test(input.value)) {
                errorMsg.innerText = 'Wrong format, numbers only.';
                errorMsg.style.display = 'block';
                input.classList.add('error');
                allInputsValid = false;
                }   
                else if (input.value.length < 16) {
                errorMsg.innerText = 'Card number must be 16 digits.';
                errorMsg.style.display = 'block';
                input.classList.add('error');
                allInputsValid = false;
                }
        }
            // Validate card month
            if (input.classList.contains('month')) {
                if (!input.value) {
                    input.classList.add('error');
                    errorMsg.style.display = 'block';
                    allInputsValid = false;}
                else if (!/^\d+$/.test(input.value)) {
                errorMsg.innerText = 'Wrong format, numbers only.';
                errorMsg.style.display = 'block';
                input.classList.add('error');
                allInputsValid = false;
        }
                else if (input.value.length < 2) {
                    errorMsg.innerText = 'Month must be 2 digits.';
                    errorMsg.style.display = 'block';
                    input.classList.add('error');
                    allInputsValid = false;
            }
        }
            // Validate card year
            if (input.classList.contains('year')) {
                if (!input.value) {
                    input.classList.add('error');
                    errorMsg.style.display = 'block';
                    allInputsValid = false;}
                else if (!/^\d+$/.test(input.value)) {
                errorMsg.innerText = 'Wrong format, numbers only.';
                errorMsg.style.display = 'block';
                input.classList.add('error');
                allInputsValid = false;
        }
                else if (input.value.length < 2) {
                    errorMsg.innerText = 'Year must be 2 digits.';
                    errorMsg.style.display = 'block';
                    input.classList.add('error');
                    allInputsValid = false;
            }
        }
            // Validate card cvc
            if (input.classList.contains('cvc')) {
                if (!input.value) {
                    input.classList.add('error');
                    errorMsg.style.display = 'block';
                    allInputsValid = false;}
                else if (!/^\d+$/.test(input.value)) {
                errorMsg.innerText = 'Wrong format, numbers only.';
                errorMsg.style.display = 'block';
                input.classList.add('error');
                allInputsValid = false;
        }
                else if (input.value.length < 3) {
                    errorMsg.innerText = 'CVC must be 2 digits.';
                    errorMsg.style.display = 'block';
                    input.classList.add('error');
                    allInputsValid = false;
    }
    }
})

            if(allInputsValid){
                errorMsg.style.display = 'none';
                rightContent.style.display = 'none';
                rightContentSuccess.style.display = 'flex';    
            }
})
    

})


