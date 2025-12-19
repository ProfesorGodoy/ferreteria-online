// Reemplaza con tu configuración de Firebase
const firebaseConfig = {
    apiKey: "TU_API_KEY",
    authDomain: "TU_PROYECTO.firebaseapp.com",
    projectId: "TU_PROYECTO",
    storageBucket: "TU_PROYECTO.appspot.com",
    messagingSenderId: "TU_ID",
    appId: "TU_APP_ID"
};

// Inicializar Firebase
firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();

// Guardar mensajes del formulario
const formulario = document.getElementById('formularioContacto');
formulario.addEventListener('submit', (e) => {
    e.preventDefault();
    db.collection("contactos").add({
        nombre: document.getElementById('nombre').value,
        email: document.getElementById('email').value,
        mensaje: document.getElementById('mensaje').value,
        fecha: new Date()
    })
    .then(() => alert("Mensaje enviado!"))
    .catch(err => alert("Error: " + err));
});
