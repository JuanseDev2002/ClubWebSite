import React from 'react';

import FacebookIcon from "../assets/svg/facebook.svg";
import InstagramIcon from "../assets/svg/instagram.svg";
import TikTokIcon from "../assets/svg/tiktok.svg";
import YouTubeIcon from "../assets/svg/youtube.svg";
import LinkedInIcon from "../assets/svg/linkedIn.svg";

const SocialMedia = (styles) => {

    return (
    <div className={`${styles} flex gap-3 relative left-[82%]`}>
      <img src={InstagramIcon} alt="Facebook" class="w-[27px] h-[27px]" />
      <img src={LinkedInIcon} alt="Facebook" class="w-[27px] h-[27px]" />
      <img src={FacebookIcon} alt="Instagram" class="w-[27px] h-[27px]" />
      <img src={YouTubeIcon} alt="YouTube" class="relative w-[35px] h-[35px] bottom-1" />
      <img src={TikTokIcon} alt="TikTok" class="w-[27px] h-[27px]" />
    </div>
    );
}

export default SocialMedia;
