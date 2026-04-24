

//--------SISTEMA DE LOGIN------------
const loginForm = document.getElementById(loginForm);

if(loginForm){
    loginForm.addEventListener('submit', function(event){
        event.preventDefault();
        let email = document.getElementById("email").value
        let senha = document.getElementById("senha").value
        let msg = document.getElementById("msg").value

        if (email == "admin@horizonte.com" && senha == "123456"){
            msg.style.color ="green";
            msg.innerText = "login realizado com sucesso";

        } else{
            msg.style.color ="red";
            msg.innerText = "Email ou senha inválidos";  
        }
    })
}


//--------CONSUMO DA API VIACEP
const cepInput = document.getElementById("cadCep")
if (cepInput){
    cepInput.addEventListener("blur", function(){
        const cep = cepInput.value.replace(/\D/g,'');
        if (cep!==""){
            fetch(`https://viacep.com.br/ws/${cep}/json`) //"https://viacep.com.br/ws/"+cep+"/json"
            .then(res => res.json())
            .then(dados =>{
                document.getElementById("cadRua").value = dados.logradouro;
                document.getElementById("cadBairro").value = dados.bairro;
                document.getElementById("cadcidade").value =dados.localidade;
                document.getElementById("cadEstado").value = dados.uf;
            })
        }else {
            alert("CEP não encontrado!!")
        }
    })
}