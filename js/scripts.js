// Función para registrar al usuario
function registerUser(event) {
    event.preventDefault(); // Evita que el formulario se envíe automáticamente

    // Obtener los valores de los inputs
    const username = document.getElementById('username').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirm_password').value;

    // Verificar que las contraseñas coincidan
    if (password !== confirmPassword) {
        alert('Las contraseñas no coinciden. Por favor, verifica.');
        return;
    }

    // Crear un objeto de usuario
    const user = {
        username: username,
        email: email,
        password: password
    };

    // Guardar los datos del usuario en el Local Storage
    localStorage.setItem('user', JSON.stringify(user));

    // Confirmar el registro exitoso
    alert('Registro exitoso. Ahora puedes iniciar sesión.');

    // Redirigir a la página de inicio de sesión
    window.location.href = 'index.html';
}

// Añadir el evento 'submit' al formulario de registro
const registerForm = document.querySelector('form');
registerForm.addEventListener('submit', registerUser);
