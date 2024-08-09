let nomeIsOk;
function validaEmail(event){
    // pega o valor digitado no elemento input
    const inputEmail = event.target;
    // cria uma expressão regular: <texto>@<texto>.<texto>
    var regex = /\S+@\S+\.\S+/;
    // se o email estiver correto muda a cor para verde
    if(regex.test(inputEmail.value)){
       
        inputEmail.style.color = "green";
    }
    // caso contrário, para vermelho
    else 
        inputEmail.style.color = "red";
}
function validaTelefone(event){
    const inputPhone = event.target;
    let formatedPhone = inputPhone.value.replace(/\D/g, '').match(/(\d{0,2})(\d{0,5})(\d{0,4})/);
    console.log(formatedPhone);
    inputPhone.value = !formatedPhone[2] ? formatedPhone[1] : '(' + formatedPhone[1] + ') ' + formatedPhone[2] + (formatedPhone[3] ? '-' + formatedPhone[3] : '');
}
function validaCPF(event) {
    const inputCPF = event.target;
    let formatedCPF = inputCPF.value.replace(/\D/g, '').match(/(\d{0,3})(\d{0,3})(\d{0,3})(\d{0,2})/);
    
    if (formatedCPF) {
        inputCPF.value = !formatedCPF[2] ? formatedCPF[1] : formatedCPF[3] ? formatedCPF[1] + '.' + formatedCPF[2] + '.' + formatedCPF[3] + '-' + formatedCPF[4] :   formatedCPF[1] + '.' + formatedCPF[2] + '.' + formatedCPF[3] + '-' + formatedCPF[4];
                        
                      
    }
}
function validaRenda(event) {
    const inputRenda = event.target;
    let valor = inputRenda.value.replace(/\D/g, '');

    let valorFormatado = valor.replace(/(\d)(\d{2})$/, '$1,$2');
    valorFormatado = valorFormatado.replace(/(\d)(\d{3})(\d{1,3})$/, '$1.$2.$3');


    inputRenda.value = valorFormatado ? 'R$ ' + valorFormatado : 'R$ 0,00';
}


