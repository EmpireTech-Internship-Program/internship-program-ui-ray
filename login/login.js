function fazerLogin() {
    var emailField = document.getElementById('user');
    var passwordField = document.getElementById('password');


    if (!emailField.value && !passwordField.value) {
        Swal.fire("Por favor, forneça os dados.");
        return false;
    }

    if (!passwordField.value) {
        Swal.fire("Por favor, forneça a senha.");
        return false;
    }

    if (!emailField.value) {
        Swal.fire("Por favor, forneça o ID ou e-mail.");
        return false;
    }

    if (passwordField.value.length <= 1) {
        Swal.fire("Senha incorreta. Por favor, verifique e corrija.");
        return false;
    }

    emailField.value = '';
    passwordField.value = '';

    Swal.fire({
        title: "Login realizado com sucesso!",
        showConfirmButton: true,
        timer: 3000,
        allowOutsideClick: false,
        willClose: () => {
            window.location.href = 'file:///C:/internship-program-ui-ray/Banks/listing-banks/listing.html';
        }
    });
}

document.addEventListener('DOMContentLoaded', function () {
    var eyeIcon = document.querySelector('.eye');
    eyeIcon.style.display = 'none';
});

function mostrarOcultarSenha() {
    var senhaInput = document.getElementById('password');
    var eyeIcon = document.querySelector('.eye');

    eyeIcon.style.display = senhaInput.value.length > 0 ? 'block' : 'none';

    eyeIcon.src = senhaInput.type === 'password'
        ? 'https://cdn.onlinewebfonts.com/svg/img_55825.png'
        : 'https://image.freepik.com/icones-gratis/simbolo-do-olho-aberto-de-visualizacao_318-67977.jpg';
}

function toggleMostrarOcultarSenha() {
    var senhaInput = document.getElementById('password');

    senhaInput.type = senhaInput.type === 'password' ? 'text' : 'password';

    mostrarOcultarSenha();
}

document.addEventListener('DOMContentLoaded', function () {
    var signupButton = document.getElementById('signup');

    signupButton.addEventListener('click', function () {
        this.classList.toggle('checked');
    });
});
