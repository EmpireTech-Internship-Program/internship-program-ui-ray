
function mostrarLinha(elemento) {
    elemento.style.textDecoration = "underline";
}

function ocultarLinha(elemento) {
    elemento.style.textDecoration = "none";
}

function redirecionarParaPagina(url) {
    window.location.href = url;
}


function redirecionarParaVer() {
    window.location.href = 'file:///C:/internship-program-ui-ray/Banks/views-banks/view.html';
}

function redirecionarParaEditar() {
    window.location.href = 'file:///C:/internship-program-ui-ray/Banks/edit-banks/edit.html';
}

function confirmarRemover() {
    Swal.fire({
        title: 'Tem certeza?',
        text: 'Você realmente deseja remover este item?',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Sim',
        cancelButtonText: 'Não'
    }).then((result) => {
        if (result.isConfirmed) {
            Swal.fire(
                'Removido!',
                'O item foi removido com sucesso.',
                'success'
            );
        } else {
            Swal.fire(
                'Cancelado',
                'A remoção foi cancelada.',
                'error'
            );
        }
    });
}
