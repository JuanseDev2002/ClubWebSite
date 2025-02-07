import React from 'react';

const Bud = ({text}) => {
    return (
        <p class='inline-block bg-[var(--primary)] text-white font-semibold px-6 py-3 rounded-full w-60'>
            {text}
        </p>
    );
}

export default Bud;
