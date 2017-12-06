var formValido;

function onCancel() {
    $('#conteudo').load('include/post.html');
}

function onSave(event) {
    event.preventDefault();

    formValido = true;
    
    var obrigatorio = [
        'nome', 'sobrenome', 'sexo',
        'email', 'senha', 'conf_senha',
        'sobre', 'data_nascimento',
        'hobie', 'musica'
    ];

    for(var i = 0; i < obrigatorio.length; i++) {
        validaCampo(obrigatorio[i]);
    }

    var senha = $('#senha').val();
    var conf = $('#conf_senha').val();

    $('#conf_senha').next().remove();

    if(senha != conf) {
        formValido = false;
        $('<p>')
            .addClass("help-block")
            .text("As senha estão diferentes")
            .insertAfter("#conf_senha");
        $("#conf_senha")
            .closest('.form-group')
            .removeClass('has-success')
            .addClass('has-error');
    } 

    if(formValido) {
        $('#conteudo').load('include/post.html');
    }
}

function validaCampo(campo) {
    //var nome = document.getElementById("nome").value
    var seletor = '[name="' + campo + '"]';
    var el = $(seletor);
    var valido = false;

    switch(el.attr('type')) {
        case 'text':
        case 'date':
            valido = el.val().trim() != "";
            break;
        case 'radio':
        case 'checkbox':
            for(var i = 0; i < el.length; i++) {
                if(el[i].checked) {
                    valido = true;
                }
            }
            break;
        default:
            valido = el.val().trim() != "";
            break;
    }
    if(!valido) {
        //document.getElementById("nome").parentElement.className = "form-group col-sm-6 has-error";
        $(seletor)
            .closest('.form-group')
            .removeClass('has-success')
            .addClass('has-error');
        formValido = false;
    } else {
        $(seletor)
            .closest('.form-group')
            .removeClass('has-error')
            .addClass('has-success');
    }
}