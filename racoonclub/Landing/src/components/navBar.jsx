import React from 'react';

import Image from './image';

import Logo from '../assets/img/UideLogo.webp';



const Navbar = () => {
    return (
        <div class="fixed z-50 rounded-full bg-white mt-13 mr-10 ml-10 w-[95%] h-[13%]">
            <ul class="my-0 mx-auto py-1 px-0 text-center">
                <div class="mt-2">
                    <li class='inline my-0 mx-auto'>
                        <Image src={Logo} alt='Logo UIDE' styles='relative bottom-1 inline scale-80'></Image>
                    </li>
                    <li class="font-semibold text-xl list-none inline my-0 mx-auto">
                        <a class="decoration-none my-auto ml-11 mr-2 px-2 size-4
                         text-[var(--secondary)] rounded-lg inline hover:cursor-pointer" to="/">HISTORIA</a>
                    </li>

                    <li class="font-semibold text-xl list-none inline my-0 mx-auto">
                        <a class="decoration-none my-auto mx-4 px-2 size-4
                         text-[var(--secondary)] rounded-lg inline hover:cursor-pointer" to="/Schedule">EXPERIENCIA</a>
                    </li>

                    <li class="font-semibold text-xl list-none inline my-0 mx-auto">
                        <a class="decoration-none my-auto mx-4 px-2 size-4
                         text-[var(--secondary)] rounded-lg inline hover:cursor-pointer" to="/VirtualLibrary">PROYECTOS</a>
                    </li>

                    <li class="font-semibold text-xl list-none inline my-0 mx-auto">
                        <a class="decoration-none my-auto mx-4 px-2 size-4
                         text-[var(--secondary)] rounded-lg inline hover:cursor-pointer" to="/Contact">LíNEAS</a>
                    </li>
                    <li class="font-semibold text-xl list-none inline my-0 mx-auto">
                        <a class="bg-primary w-10 decoration-none my-auto mx-4 px-2 size-4
                         text-[var(--secondary)] rounded-lg inline hover:cursor-pointer" to="/Contact">PARTICIPACIÓN</a>
                    </li>
                    <li class=" text-xl list-none inline my-0 mx-auto">
                        <a  class="bg-[var(--primary)] text-[var(--white)] decoration-none mr-2 ml-10 px-6 py-4 size-4
                         rounded-full inline hover:cursor-pointer" to="/Contact">ÚNETE AL CLUB</a>
                    </li>
                </div>
            </ul>
        </div>
    );
}

export default Navbar;