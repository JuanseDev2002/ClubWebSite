import React from "react";

const Image = ({ src, alt, styles }) => {
  return (
    <img
        src={src}
        alt={alt}
        class={styles}
    />
  );
};

export default Image;
