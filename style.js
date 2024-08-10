$(document).ready(function(){
    $('#telefone').mask('(00) 00000-0000');

    $('#email').mask('exemplo@gmail.com');

    $('#nome').mask('Rian Madioto');

    $('form').validate({
        rules:{
            nome:{required: true

            },
            email:{required: true},

            telefone:{required: true},

            
            
        }
    })
})