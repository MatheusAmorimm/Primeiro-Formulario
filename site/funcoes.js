const form = document.getElementById('form')
const username = document.getElementById('username')
const email = document.getElementById('email')
const senha = document.getElementById('senha')
const confirmsenha = document.getElementById('confirmsenha')

form.addEventListener('submit', (e) => {
    e.preventDefault();
    checkInput();
})

function checkInput(){
    const usernamevalue = username.value;
    const emailvalue = email.value;
    const senhavalue = senha.value;
    const confirmsenhavalue = confirmsenha.value;

    if(usernamevalue == ""){
        setErrorFor(username,"O Nome de Usuário é obrigatório.");
    }else{
        setSucessFor(username);
    }

    if(emailvalue == ""){
        setErrorFor(email, "O Email é obrigatório.");
    }else if(!checkEmail(emailvalue)){
        setErrorFor(email, "Por favor, insira um email válido!");
    }else{
        setSucessFor(email);
    }

    if(senhavalue == ""){
        setErrorFor(senha, "A senha é obrigátoria.")
    }else if(senha.lenght < 7){
        setErrorFor(senha, "A senha precisa ter no mínimo 7 caracteres")
    }else{
        setSucessFor(senha)
    }

    if(confirmsenhavalue == ""){
        setErrorFor(confirmsenha, "A confirmação de senha é obrigátoria.");
    }else if(confirmsenhavalue != senhavalue){
        setErrorFor(confirmsenha, "As senhas não coincidem. Digite Novamente!");
    }else{
        setSucessFor(confirmsenha);
    }

    const formcontrols = form.querySelectorAll('.form-control');
        const formisvalid = [...formcontrols].every((formcontrol) => {
            return (formcontrol.className === '.form-control.sucess');
        });
}

function setErrorFor(input, message){
    const formcontrol = input.parentElement;
    const small = formcontrol.querySelector('small');
    small.innerText = message;
    formcontrol.className = "form-control error";

}

function setSucessFor(input){
    const formcontrol = input.parentElement;
    formcontrol.className = "form-control success";
}

function checkEmail(email) {
    return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
      email
    );
  }