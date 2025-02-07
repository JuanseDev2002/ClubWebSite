import React from 'react';
import PlaySvg from '../assets/svg/play.svg'

const Card = ({date, text, user_name, carrer, styles}) => {
    return (
        <div class={styles}>
            <p class='text-xs font-extralight'>{date}</p>
            <p class='mt-5 text-sm font-light'>{text}</p>
            <div class='block w-10 h-10 bg-[var(--white)] rounded-full border-[var(--primary)] border-2 mt-5'></div>
            <p class='relative bottom-9 ml-14 text-xs font-light'>{user_name}</p>
            <p class='relative bottom-9 ml-14 text-[10px] font-light'>{carrer}</p>
            <div class='relative bottom-23 left-70 block w-10 h-10 bg-white rounded-full border-[var(--primary)] border-2 mt-5'>
                <img src={PlaySvg} class='w-5 m-auto mt-2 fill-[var(--primary)]' />
            </div>
            
        </div>
    );
}

export default Card;
