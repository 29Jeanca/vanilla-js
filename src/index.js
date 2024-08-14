function mostrarHora() {
    const elementoHora = document.getElementById('hora');
    const fecha = new Date();
    const hora = fecha.toLocaleTimeString(); 
    elementoHora.textContent = hora; 
}

setInterval(mostrarHora, 1000);

async function obtenerUsuarios() {
    try {
        const response = await fetch('http://localhost:3000/users');
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const usuarios = await response.json();
        console.log(usuarios); 
    } catch (error) {
        console.error('Error al obtener usuarios:', error);
    }
}

// Invoca la función para ejecutar el llamado al servidor
obtenerUsuarios();
