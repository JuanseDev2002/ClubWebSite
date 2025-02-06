// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBhu50sXZrr7WyYKuxeGP7HNP6Zh7BXW-o",
  authDomain: "racoonclubuide.firebaseapp.com",
  projectId: "racoonclubuide",
  storageBucket: "racoonclubuide.firebasestorage.app",
  messagingSenderId: "886709922665",
  appId: "1:886709922665:web:b191b7a9d9028678ffebf8",
  measurementId: "G-YK9ZNVBNJL"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const db = firebase.firestore();

const inicializarFormulario = async () => {
  const formulario = document.getElementById('Form'); // Selecciona el contenedor del formulario

  await formulario.addEventListener('submit', (e) => {
    e.preventDefault(); // Evita la recarga de la página

    // Obtén los valores de los campos
    const user_ci = formulario.querySelector('input[type="number"]').value;
    const user_name = formulario.querySelector('input[type="text"]').value;
    const user_career = formulario.querySelector('select:nth-child(1)').value; // Selecciona el primer select
    const user_level = formulario.querySelector('select:nth-child(2)').value; // Selecciona el segundo select

    // Validación básica (puedes agregar más validaciones)
    if (!user_ci || !user_name || user_career === "Seleccione la carrera" || user_level === "Seleccione el ciclo") {
      alert("Por favor, complete todos los campos.");
      return;
    }

    const userData = {
      user_ci: user_ci,
      user_name: user_name,
      user_career: user_career,
      user_level: user_level
    };

    db.collection('usuarios').add(userData)
      .then(() => {
        alert('Solicitud de inscripción enviada correctamente.');
        formulario.reset(); // Limpia el formulario
      })
      .catch((error) => {
        console.error('Error al enviar la solicitud:', error);
        alert('Error al enviar la solicitud. Por favor, inténtalo de nuevo.');
      });
  });
}


// Llamar a la función para inicializar el formulario (asegúrate de que el DOM esté cargado)
document.addEventListener('DOMContentLoaded', inicializarFormulario);

export {inicializarFormulario}