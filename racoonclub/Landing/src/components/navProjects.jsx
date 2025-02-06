import React from 'react';

import Project from './project';

import FotoExample from '../assets/img/Example.png'
import FotoLibrary from '../assets/img/Library.png'


const NavProjects = () => {
    return (
        <div className='flex flex-col md:flex-row gap-11 p-4 mt-0'>
            <Project name='Library' bg_image={FotoExample} creator='Juan Campana'
                styles='md:w-80 w-82 h-100 sm:h-100 md:h-100 lg:h-[92vh] m-0 p-0 lg:scale-100 md:scale-90 sm:scale-80'
                responsiveSettings='relative bg-[rgba(0,0,0,0.20)] h-15 sm:top-70 md:top-70 lg:top-115 top-70'
            ></Project>
            <Project name='Library' bg_image={FotoLibrary} creator='Juan Campana'
                styles='relative top-1 md:w-80 lg:w-100 h-100 sm:h-100 md:h-100 lg:h-105 sm:mt-0 md:mt-0 lg:mt-[25vh]  p-0 lg:scale-100 md:scale-90 sm:scale-80'
                responsiveSettings='relative bg-[rgba(0,0,0,0.20)] h-15 sm:top-70 md:top-70 lg:top-75 top-70'
            ></Project>
            <Project name='Library' bg_image={FotoExample} creator='Juan Campana'
                styles='relative bottom-0 lg:bottom-[16vh] md:w-80 w-82 h-100 sm:h-100 md:h-100 lg:h-[108vh] m-0 p-0 lg:scale-100 md:scale-90 sm:scale-80'
                responsiveSettings='relative bg-[rgba(0,0,0,0.20)] h-15 sm:top-70 md:top-70 lg:top-141 top-70'
            ></Project>
        </div>
    );
}

export default NavProjects;