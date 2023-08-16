const email = document.getElementById('email')
const password = document.getElementById('pass')
const btn = document.getElementById('submit-btn')
const error = document.getElementById('error')
const error2 = document.getElementById('error2')

btn.addEventListener('click',function(){
    const realPassword = "1234";
    const realEmail = "shiyamsarker13@gmail.com";
    const emailValue = email.value ;
    const passValue = pass.value;
    if(emailValue === "" || passValue === ""){
        error2.style.display="inline"
    }
    else if(emailValue !== realEmail || passValue !== realPassword){
        error.style.display="inline"
        error2.style.display="none"
    }
    else{
        location.href="bank.html"
    }
})
