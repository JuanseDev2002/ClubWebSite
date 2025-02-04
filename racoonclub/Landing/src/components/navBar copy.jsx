import React, { useState } from 'react';
import Image from './image';
import Logo from '../assets/img/UideLogo.webp';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="fixed z-50 bg-white rounded-xl mt-4 md:mt-13 mx-auto left-1/2 -translate-x-1/2 w-[95%] md:w-[95%] max-w-8xl h-16 md:h-[13%] shadow-md">
      <div className="mx-auto px-4 sm:px-6 lg:px-8 h-full">
        <div className="flex items-center justify-between h-full">
          {/* Logo centrado */}
          <div className="md:flex-shrink-0 absolute left-1/2 -translate-x-1/2 md:static md:transform-none">
            <Image 
              src={Logo} 
              alt='Logo UIDE' 
              styles="z-50 w-20 md:w-26 transform scale-90 md:ml-30"
            />
          </div>

          {/* Menú Desktop */}
          <div className="hidden list-none my-0 mx-0 md:flex md:items-center md:space-x-10">
            {['BENEFICIOS', 'TESTIMONIOS', 'PROYECTOS'].map((item) => (
              <a
                key={item}
                href="#"
                className="text-[var(--secondary)] text-lg xl:text-xl hover:text-[var(--tertiary)] px-3 py-2 font-semibold transition-colors"
              >
                {item}
              </a>
            ))}
            <a
              href="#"
              className="ml-4 text-lg xl:text-xl bg-[var(--primary)] text-white px-4 xl:px-6 py-2 xl:py-4 rounded-xl font-normal hover:scale-95 transition-transform"
            >
              ÚNETE AL CLUB
            </a>
          </div>

          {/* Menú Mobile Hamburger (derecha) */}
          <div className="md:hidden flex items-center ml-auto">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 text-[var(--secondary)] hover:text-primary focus:outline-none"
            >
              <svg
                className="h-8 w-8"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
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
              <a
                key={item}
                href="#"
                className="text-[var(--secondary)] text-center block px-3 py-3 text-lg font-medium hover:bg-gray-100 rounded-lg"
              >
                {item}
              </a>
            ))}
            <a
              href="#"
              className="block w-[90%] mx-auto bg-[var(--primary)] text-white px-4 py-3 rounded-xl text-lg font-medium text-center mb-2 hover:bg-primary-dark"
            >
              ÚNETE AL CLUB
            </a>
          </div>
        </div>
      )}
    </div>
  );
}

export default Navbar;