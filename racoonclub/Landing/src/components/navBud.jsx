import React from 'react';

import Bud from './bud';

const NavBud = () => {
    return (
        <ul class='flex gap-6 px-8 my-16 overflow-x-auto'>
            <li><Bud text='UX/UI'></Bud></li>
            <li><Bud text='Backend'></Bud></li>
            <li><Bud text='Frontend'></Bud></li>
            <li><Bud text='DevOps'></Bud></li>
            <li><Bud text='Ciberseguridad'></Bud></li>
            <li><Bud text='Inteligencia Artificial'></Bud></li>
        </ul>
    );
}

export default NavBud;
