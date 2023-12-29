function redirecionarParaVer() {
    window.location.href = 'file:///C:/internship-program-ui-ray/Tela%20de%20Banco.html'; 
}

function redirecionarParaEditar() {
    window.location.href = 'file:///C:/internship-program-ui-ray/Tela%20de%20Banco.html'; 
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

function redirecionarParaPagina() {
    window.location.href = "file:///C:/internship-program-ui-ray/Tela%20de%20Banco.html";
}

