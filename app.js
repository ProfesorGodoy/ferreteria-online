// Reemplaza con tu configuración de Firebase

const firebaseConfig = {
  apiKey: "AIzaSyB7s7CD0msZTKYQ0hofwj34A18FUSzkq2k",
  authDomain: "ferreteria-online-f0975.firebaseapp.com",
  projectId: "ferreteria-online-f0975",
  storageBucket: "ferreteria-online-f0975.firebasestorage.app",
  messagingSenderId: "442919643384",
  appId: "1:442919643384:web:16b3a3f58b7fb85513330d",
  measurementId: "G-J9F8KSTMZQ"
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
