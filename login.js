function fazerLogin() {
    var emailField = document.getElementById('user');
    var passwordField = document.getElementById('password');
    
    if (!emailField || !passwordField) {
        console.log("Campos não encontrados.");
        return false;
    }

    if (!emailField.value || !passwordField.value) {
        alert("Por favor, forneça os dados.");
        return false;
    }   
    
    if (passwordField.value.length !== 6) {
        alert("Senha incorreta. Por favor, verifique e corrija.");
        return false;
    }

    alert("Login realizado com sucesso!");
    window.location.href = 'C:/internship-program-ui-ray/layout.html';
    return true;
}