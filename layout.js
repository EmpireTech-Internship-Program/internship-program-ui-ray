function mostrarLinha(id) {
    var linha = document.getElementById(id);
    linha.style.borderBottom = "1px solid #000";
    linha.style.display = "inline";
}

function ocultarLinha(id) {
    var linha = document.getElementById(id);
    linha.style.display = "none";
}

function redirecionarParaPagina(pagina) {
    window.location.href = "file:///C:/internship-program-ui-ray/" + pagina;
}