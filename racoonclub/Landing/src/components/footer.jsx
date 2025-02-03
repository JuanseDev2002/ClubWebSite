import React from 'react';

import Image from './image';
import Text from './text';
import SocialMedia from './socialMedia';

import LogoClubImg from '../assets/img/LogoClub.webp';

const Footer = () => {
    return (
        <div class='h-79 bg-[#002050] border-t-[1px] border-white px-13 overflow-x-hidden'>
            <div class='h-52'>
                <Image src={LogoClubImg} alt='Logo Programing Club Racoon' styles='relative top-5 right-4 scale-80'></Image>
                <Text text='La programación no es el futuro,' styles='text-white relative bottom-30 left-68 text-lg font-light'></Text>
                <Text text='es el presente. ¡Se parte del' styles='text-white relative bottom-30 left-68 text-lg font-light'></Text>
                <Text text='cambio con nosotros!' styles='text-white relative bottom-30 left-68 text-lg font-light'></Text>
                <Text text='Dirección' styles='text-white relative bottom-55 left-153 text-xl font-medium'></Text>
                <Text text='Calle Agustín Carrión Palacios' styles='text-white relative bottom-50 left-153 text-xl font-light'></Text>
                <Text text='entre Av. Salvador Bustamante' styles='text-white relative bottom-50 left-153 text-xl font-light'></Text>
                <Text text='Celi y Beethoven. Sector Jipiro ' styles='text-white relative bottom-50 left-153 text-xl font-light'></Text>
                <Text text='Contacto' styles='text-white relative bottom-80 left-240 text-xl font-medium'></Text>
                <Text text='charlie.act7@gmail.com' styles='text-white relative bottom-75 left-240 text-xl font-light'></Text>
                <Text text='099 266 7927' styles='text-white relative bottom-75 left-240 text-xl font-light'></Text>
            </div>
            <div class='border-t-[1px] border-white'>
            <Text text='©2025, Todos los derechos reservados' styles='text-white relative top-8 left-0 text-xl font-light'></Text>
            <SocialMedia styles='relative bottom-10'></SocialMedia>
            </div>
        </div>
    );
}

export default Footer;
