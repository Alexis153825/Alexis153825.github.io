
// ----- TEXTAREA ----- //

var consulta = document.getElementById('consulta') ;
                                        
    consulta.style.color = '#9F63C3' ;
                            
    consulta.onfocus = function(){         
        if(consulta.value == 'Escríbeme tu consulta...'){
            consulta.style.color = 'black' ;
            consulta.value = ''
        }               
    }           

    consulta.onblur = function(){
        if(consulta.value == ''){
            consulta.style.color = '#9F63C3' ;
            consulta.value = 'Escríbeme tu consulta...';
        }               
    }

    const  nombrefield = document.getElementById('nombre'); 
const  emailfield = document.getElementById('email');
const  consultafield = document.getElementById('consulta');

//nombre
nombrefield.addEventListener("blur", function (e){
    const field = e.target;
    const fieldValue = e.target.value;

if (fieldValue.length == 0) { 
    field.classList.add("invalid");
    field.nextElementSibling.classList.add("error");
    field.nextElementSibling.innerText = "！";
    
} else {
    field.classList.remove("invalid");
    field.nextElementSibling.classList.remove("error");
    field.nextElementSibling.innerText = "";
}

})

//email
emailfield.addEventListener("blur", function (e){
    const field = e.target;
    const fieldValue = e.target.value;

if (fieldValue.length == 0) { 
    field.classList.add("invalid");
    field.nextElementSibling.classList.add("error");
    field.nextElementSibling.innerText = "！";
    
} else {
    field.classList.remove("invalid");
    field.nextElementSibling.classList.remove("error");
    field.nextElementSibling.innerText = "";
}

})
