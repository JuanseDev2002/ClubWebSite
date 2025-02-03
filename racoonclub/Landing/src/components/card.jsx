import React from 'react';

const Card = ({date, text, user_name, carrer, styles}) => {
    return (
        <div class={styles}>
            <p class='text-xs font-extralight'>{date}</p>
            <p class='mt-5 text-sm font-light'>{text}</p>
            <div class='block w-10 h-10 bg-[var(--white)] rounded-full border-[var(--primary)] border-2 mt-5'></div>
            <p class='relative bottom-9 ml-14 text-xs font-light'>{user_name}</p>
            <p class='relative bottom-9 ml-14 text-[10px] font-light'>{carrer}</p>
            
        </div>
    );
}

export default Card;
