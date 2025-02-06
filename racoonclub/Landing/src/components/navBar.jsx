import React, { useState } from 'react';
import Image from './image';
import Logo from '../assets/img/UideLogo.webp';


const Formulario = ({ onClose }) => {

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
        <form className="flex flex-col gap-4">
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
      <div className="fixed z-50 bg-white rounded-xl mt-4 md:mt-6 mx-auto left-1/2 -translate-x-1/2 w-[95%] max-w-8xl h-16 md:h-[13%] shadow-md">
        <div className="mx-auto px-4 sm:px-6 lg:px-8 h-full">
          <div className="flex items-center justify-between h-full">
            {/* Logo */}
            <div className="md:flex-shrink-0 absolute left-1/2 -translate-x-1/2 md:static md:transform-none">
              <Image src={Logo} alt="Logo UIDE" styles="z-50 w-20 md:w-26 transform scale-90 md:ml-30" />
            </div>

            {/* Menú Desktop */}
            <div className="hidden md:flex items-center space-x-10">
              {[['BENEFICIOS','#benefitsSection'], ['TESTIMONIOS','#testimoniesSection'], ['PROYECTOS','#proyectsSection']].map((item) => (
                <a key={item} href={item[1]} className="text-[var(--secondary)] text-lg xl:text-xl hover:text-[var(--tertiary)] px-3 py-2 font-semibold transition-colors">
                  {item[0]}
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
              {[['BENEFICIOS','#benefitsSection'], ['TESTIMONIOS','#testimoniesSection'], ['PROYECTOS','#proyectsSection']].map((item) => (
                <a key={item} href={item[1]} className="text-[var(--secondary)] text-center block px-3 py-3 text-lg font-medium hover:bg-gray-100 rounded-lg">
                  {item[0]}
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
