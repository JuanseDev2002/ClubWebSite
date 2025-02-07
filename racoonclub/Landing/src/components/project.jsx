import React from 'react';

const Project = ({name, bg_image, creator, styles, responsiveSettings}) => {
    return (
        <div class={styles}
         style={{ backgroundImage: `url(${bg_image})` }}>
            <div class='bg-[rgba(0,0,0,0.20)] h-15'>
            <p class='inline relative top-1/3 right-1/3 text-md text-white font-medium'>{name}</p>
            </div>
            <div class={responsiveSettings}>
            <p class='inline relative top-1/3 right-6 text-md text-white font-medium'>{creator}</p>
                <a class='inline relative left-10 top-5 p-2 w-20 text-xs h-12 bg-[var(--tertiary)]' href="">
                    Ver Proyecto
                </a>
            </div>
            
        </div>
    );
}

export default Project;
