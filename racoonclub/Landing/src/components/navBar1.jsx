import React, { useState } from 'react';
import Image from './image';
import Logo from '../assets/img/UideLogo.webp';

import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";


const Formulario = ({ onClose }) => {

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


  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      {/* Fondo con Blur (separado del formulario) */}
      <div className="absolute inset-0 bg-black/30 backdrop-blur-xl transition-all duration-300"></div>

      {/* Contenedor del Formulario (SIN blur) */}
      <div className="relative border-2 border-[var(--primary)] bg-white p-6 md:p-8 rounded-2xl shadow-lg w-[90%] md:w-[40%] max-w-lg z-50">
        {/* Botón de Cierre */}
        <button onClick={onClose} className="absolute top-1 right-2 text-[var(--primary)] text-lg font-semibold">
          ✖
        </button>
        {/* Campos del Formulario */}
        <form id='Form' className="flex flex-col gap-4">
          <input type="number" placeholder="Ingrese su número de cédula" className="text-[var(--secondary)] border-1 border-[var(--primary)] p-3 rounded-lg w-full" />
          <input type="text" placeholder="Ingrese su nombre completo" className="text-[var(--secondary)] border-1 border-[var(--primary)] p-3 rounded-lg w-full" />
          <div className="flex gap-4">
            <select className="text-[var(--secondary)] border-1 border-[var(--primary)] p-2 rounded-lg w-full">
              <option>Seleccione la carrera</option>
              <option>Negocios Internacionales</option>
              <option>Arquitectura</option>
              <option>Derecho</option>
              <option>Marketing</option>
              <option>Administración de Empresas</option>
              <option>Tecnologias de la Información</option>
              <option>Psicología</option>
            </select>
            <select className="text-[var(--secondary)] border-1 border-[var(--primary)] p-3 rounded-lg w-full">
              <option>Seleccione el ciclo</option>
              <option>1er ciclo</option>
              <option>2do ciclo</option>
              <option>3er ciclo</option>
              <option>4to ciclo</option>
              <option>5to ciclo</option>
              <option>6to ciclo</option>
              <option>7mo ciclo</option>
              <option>8vo ciclo</option>
              <option>9no ciclo</option>
            </select>
          </div>
          <button type="submit" className="bg-[var(--primary)] text-white p-3 rounded-lg w-full mt-4 hover:scale-98">
              Solicitar inscripción
          </button>
        </form>
      </div>
    </div>
  );
};

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showForm, setShowForm] = useState(false);

  return (
    <>
      {/* Barra de Navegación */}
      <div className="fixed z-50 bg-white rounded-xl mt-4 md:mt-13 mx-auto left-1/2 -translate-x-1/2 w-[95%] max-w-8xl h-16 md:h-[13%] shadow-md">
        <div className="mx-auto px-4 sm:px-6 lg:px-8 h-full">
          <div className="flex items-center justify-between h-full">
            {/* Logo */}
            <div className="md:flex-shrink-0 absolute left-1/2 -translate-x-1/2 md:static md:transform-none">
              <Image src={Logo} alt="Logo UIDE" styles="z-50 w-20 md:w-26 transform scale-90 md:ml-30" />
            </div>

            {/* Menú Desktop */}
            <div className="hidden md:flex items-center space-x-10">
              {['BENEFICIOS', 'TESTIMONIOS', 'PROYECTOS'].map((item) => (
                <a key={item} href="#" className="text-[var(--secondary)] text-lg xl:text-xl hover:text-[var(--tertiary)] px-3 py-2 font-semibold transition-colors">
                  {item}
                </a>
              ))}
              <button
                onClick={() => setShowForm(true)}
                className="ml-4 text-lg xl:text-xl bg-[var(--primary)] text-white px-4 xl:px-6 py-2 xl:py-4 rounded-xl font-normal hover:scale-95 transition-transform"
              >
                ÚNETE AL CLUB
              </button>
            </div>

            {/* Menú Mobile */}
            <div className="md:hidden flex items-center ml-auto">
              <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="p-2 text-[var(--secondary)] hover:text-primary focus:outline-none">
                <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  {isMenuOpen ? (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  ) : (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                  )}
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* Menú Mobile Desplegable */}
        {isMenuOpen && (
          <div className="md:hidden fixed top-20 left-1/2 -translate-x-1/2 w-[90%] max-w-md bg-white shadow-lg rounded-2xl">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {['BENEFICIOS', 'TESTIMONIOS', 'PROYECTOS'].map((item) => (
                <a key={item} href="#" className="text-[var(--secondary)] text-center block px-3 py-3 text-lg font-medium hover:bg-gray-100 rounded-lg">
                  {item}
                </a>
              ))}
              <button
                onClick={() => setShowForm(true)}
                className="block w-[90%] mx-auto bg-[var(--primary)] text-white px-4 py-3 rounded-xl text-lg font-medium text-center mb-2 hover:bg-primary-dark"
              >
                ÚNETE AL CLUB
              </button>
            </div>
          </div>
        )}
      </div>

      {/* Mostrar Formulario con efecto Blur en el fondo */}
      {showForm && <Formulario onClose={() => setShowForm(false)} />}
    </>
  );
};

export default Navbar;
