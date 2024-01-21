
document.addEventListener('DOMContentLoaded', function() {
    // Espera 3 segundos y luego oculta la pantalla de carga y muestra el contenido principal
    setTimeout(function() {
        document.getElementById('loadingScreen').style.display = 'none';
        document.getElementById('mainContent').style.display = 'block';
    }, 2000);
});


/* FUNCTIONS */
// Reset password function
function sendVerificationCode() {
    // Aquí deberías implementar la lógica para enviar el código al correo electrónico.
    
    // Luego, oculta el campo de correo electrónico y muestra el campo de código de verificación.
    document.getElementById('emailField').style.display = 'none';
    document.getElementById('verificationCodeField').style.display = 'block';
    
    // Cambia el texto y el comportamiento del botón.
    document.getElementById('submitButton').textContent = 'Verificar Código';
    document.getElementById('submitButton').onclick = verifyCode;
}
// Verify code function
function verifyCode() {
    // Aquí deberías implementar la lógica para verificar el código.
    // Si la verificación es exitosa, permites que el usuario complete el proceso.
}


