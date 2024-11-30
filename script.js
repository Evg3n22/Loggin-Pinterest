console.log("Hello World!")

const correctEmail = 'user@gmail.com'
const correctPassword = '1234'
let coin = 0

const emailInput = document.getElementById('input_email')
const passwordInput = document.getElementById('input_password')
const submitButton = document.getElementById('btn_log_in')

submitButton.addEventListener('click', e => {
    const email = emailInput.value.trim()
    const password = passwordInput.value.trim()

    if (email === correctEmail && password === correctPassword) {
        console.log('The validation was successful')
    }
    else{

        if (coin===0){
            emailInput.style.borderColor = 'red'

            let email_block = document.getElementsByClassName('block-email')[0]
            email_block.innerHTML += `
                <div class='alert-warning'>
                    <div class="warning_img col-4"> 
                        <img src="warning.png" alt="Warning" id="warning_img">
                    </div>
                    <div class="text-danger">
                        Неправильна адреса електронної пошти або пароль. Спробуйте ще раз.
                    </div>
                </div>
            `;
        }

        coin++
        console.log('The validation was not successful')
    }
})

const showPasswordInput = document.getElementById('button-addon2')
let shPassChek = false


const hiddenPasswordIcon = document.getElementById('hidden_password_icon')
const openPasswordIcon = document.getElementById('open_password_icon')

showPasswordInput.addEventListener('click', e => {
    if(shPassChek){
        passwordInput.type = 'password'
        shPassChek = false
        openPasswordIcon.style.opacity = '0'
        hiddenPasswordIcon.style.opacity = '2'
    }
    else{
        passwordInput.type = 'text'
        shPassChek = true
        openPasswordIcon.style.opacity = '2'
        hiddenPasswordIcon.style.opacity = '0'
    }
})

const root = document.getElementsByClassName('root')[0]
const closeButton = document.getElementById('close_btn')
closeButton.addEventListener('click', e => {
    root.style.opacity = '0'
})
