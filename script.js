document.addEventListener('DOMContentLoaded', function(){
    const confirmBtn = document.querySelector('.confirm');
    const rightContent = document.querySelector('.right-content');
    const rightContentSuccess = document.querySelector('.right-content-success');
    const errorMsg = document.querySelector('.error-message');
    const inputs = document.querySelectorAll('.input');
   

   
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
            })
        })











})


