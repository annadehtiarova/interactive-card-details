document.addEventListener('DOMContentLoaded', function(){
    const confirmBtn = document.querySelector('.confirm');
    const rightContent = document.querySelector('.right-content');
    const rightContentSuccess = document.querySelector('.right-content-success');
    const errorMsg = document.querySelector('.error-message');
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
    
   
   
    confirmBtn.addEventListener('click', function(event){
        event.preventDefault();

        let allInputsValid = true;

        inputs.forEach(function(input){
            const errorMsg = input.nextElementSibling;

            if (!input.value) {
                input.classList.add('error');
                errorMsg.style.display = 'block';
                allInputsValid = false;
            } else {
                input.classList.remove('error');
                
            }   
        })

        if(allInputsValid){
            errorMsg.style.display = 'none';
            rightContent.style.display = 'none';
            rightContentSuccess.style.display = 'flex';
            
            }     
    })


        inputs.forEach(function(input){
            const errorMsg = input.nextElementSibling;

            input.addEventListener('input', function(){
                input.classList.remove('error');
                errorMsg.style.display = 'none';
                
                if (input.classList.contains('card-number-input')) {
                    updateCardNumberDisplay();
                }
                if (input.classList.contains('cardholder-name-input')) {
                    updateCardNameDisplay();
                }
                if (input.classList.contains('month')) {
                    updateMonthDisplay();
                }
                if (input.classList.contains('year')) {
                    updateYearDisplay();
                }
                if (input.classList.contains('cvc')) {
                    updateCvcDisplay();
                }
            })
        })


        function updateCardNumberDisplay(){
            let cardValue = cardNumberInput.value;
            cardValue = cardValue.replace(/(.{4})/g, '$1 ').trim();
            cardNumberDisplay.innerText = cardValue ? cardValue : '0000 0000 0000 0000';
            cardNumberDisplay.style.fontSize = '30px';
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

        function limitToTwoDigits(input) {
            input.addEventListener('input', function() {          
                let value = input.value.replace(/\D/g, '');
    
                if (value.length >= 2) {
                    value = value.slice(0, 2);
                    input.value = value;
                    input.maxLength = 2; 
                } else {
                    input.maxLength = 10;
                }
    
                input.value = value;
            });
        }

        function limitToThreeDigits(input) {
            input.addEventListener('input', function() {             
                let value = input.value.replace(/\D/g, '');

                if (value.length >= 3) {
                    value = value.slice(0, 3);
                    input.value = value;
                    input.maxLength = 3; 
                } else {
                    input.maxLength = 10; 
                }
    
                input.value = value;
            });
        }

        function limitToSixteenDigits(input) {
            input.addEventListener('input', function() {
                let value = input.value.replace(/\D/g, '');

                if (value.length >= 16) {
                    value = value.slice(0, 16);
                    input.value = value;
                    input.maxLength = 16; 
                } else {
                    input.maxLength = 20; 
                }
    
                input.value = value;
            });
        }
    
       
        limitToTwoDigits(cardMonthInput);
        limitToTwoDigits(cardYearInput);
        limitToThreeDigits(cardCvcInput);
        limitToSixteenDigits(cardNumberInput);

        


    

})


