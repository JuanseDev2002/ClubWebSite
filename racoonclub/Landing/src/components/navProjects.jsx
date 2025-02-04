import React from 'react';

import Project from './project';

import FotoExample from '../assets/img/Example.png'
import FotoLibrary from '../assets/img/Library.png'

const NavProjects = () => {
    return (
        <div className='flex flex-col md:flex-row gap-16 p-4'>
            <Project name='Library' bg_image={FotoExample} creator='Juan Campana'
                styles='w-80 h-100 m-0 p-0 lg:scale-100 md:scale-90 sm:scale-80'
            ></Project>
            <Project name='Library' bg_image={FotoLibrary} creator='Juan Campana'
                styles='w-80 h-100 m-0 p-0 lg:scale-100 md:scale-90 sm:scale-80'
            ></Project>
            <Project name='Library' bg_image={FotoExample} creator='Juan Campana'
                styles='w-80 h-100 m-0 p-0 lg:scale-100 md:scale-90 sm:scale-80'
            ></Project>
        </div>
    );
}

export default NavProjects;