import React from 'react';
import Text from './text';

import FacebookIcon from "../assets/svg/facebook.svg";
import InstagramIcon from "../assets/svg/instagram.svg";
import TikTokIcon from "../assets/svg/tiktok.svg";
import YouTubeIcon from "../assets/svg/youtube.svg";
import LinkedInIcon from "../assets/svg/linkedIn.svg";

const Footer = () => {
    return (
        <div className="bg-[#002050] border-t border-white overflow-x-hidden flex flex-col md:flex-row items-center md:justify-between py-4 px-4 md:px-13 gap-4 md:gap-0">
            <Text text="©2025, Todos los derechos reservados" styles="text-white text-base md:text-xl font-light" />
            <div className='flex gap-3 relative'>
              <a href="https://www.instagram.com/uide.loja/">
                <img src={InstagramIcon} alt="Facebook" class="w-[27px] h-[27px]" />
              </a>
              <a href="https://www.linkedin.com/school/universidad-internacional-del-ecuador/">
                <img src={LinkedInIcon} alt="Facebook" class="w-[27px] h-[27px]" />
              </a>
              <a href="https://www.facebook.com/UIDELoja">
                <img src={FacebookIcon} alt="Instagram" class="w-[27px] h-[27px]" />
              </a>
              <a href="">
                <img src={YouTubeIcon} alt="YouTube" class="relative w-[35px] h-[35px] bottom-1" />
              </a>
              <a href="https://www.tiktok.com/@uide_ec">
                <img src={TikTokIcon} alt="TikTok" class=" w-[27px] h-[27px]" />
              </a>
            </div>
        </div>
    );
};

export default Footer;
