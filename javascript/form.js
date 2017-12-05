function validar() {
    var obrigatorio = [];

    if(isEmpty("nome")) {
        obrigatorio.push("nome");
        mudaCor("nome", "lightpink");
    } else {
        mudaCor("nome", "lightcyan");
    }
    if(isEmpty("sobrenome")) {
        obrigatorio.push("sobrenome");
        mudaCor("sobrenome", "lightpink");
    } else {
        mudaCor("sobrenome", "lightcyan");
    }
    if(!isChecked("sexo_m") && !isChecked("sexo_f")) {
        obrigatorio.push("sexo");
    }

    if(obrigatorio.length > 0) {
        alert("Favor informar os campos: "
            + obrigatorio.join(", "));
        return false;
    }

    return true;
}

function isEmpty(id) {
    var el = document.getElementById(id);
    return el.value.trim() == "";
}

function isChecked(id) {
    var el = document.getElementById(id);
    return el.checked;
}

function mudaCor(id, cor) {
    var el = document.getElementById(id);
    el.style.backgroundColor = cor;
}

function addContato() {
    var div = document.createElement("div");

    var input = document.createElement("input");
    input.type="number";
    input.name="contato";
    
    div.appendChild(input);
    
    var divContatos = document.getElementById("contatos");
    divContatos.appendChild(div);
}