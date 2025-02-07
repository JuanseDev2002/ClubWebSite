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
            <Text text="©2025, Todos los derechos reservados" styles="text-white text-base md:text-sm font-light" />
            <div className='flex gap-3 relative'>
              <a href="https://www.instagram.com/uide.loja/" target='blank'>
                <img src={InstagramIcon} alt="Facebook" class="w-[20px] h-[20px]" />
              </a>
              <a href="https://www.linkedin.com/school/universidad-internacional-del-ecuador/" target='blank'>
                <img src={LinkedInIcon} alt="Facebook" class="w-[20px] h-[20px]" />
              </a>
              <a href="https://www.facebook.com/UIDELoja" target='blank'>
                <img src={FacebookIcon} alt="Instagram" class="w-[20px] h-[20px]" />
              </a>
              <a href="https://www.youtube.com/@universidadinternacionalde368" target='blank'>
                <img src={YouTubeIcon} alt="YouTube" class="relative w-[30px] h-[30px] bottom-1" />
              </a>
              <a href="https://www.tiktok.com/@uide_ec" target='blank'>
                <img src={TikTokIcon} alt="TikTok" class=" w-[20px] h-[20px]" />
              </a>
            </div>
        </div>
    );
};

export default Footer;
