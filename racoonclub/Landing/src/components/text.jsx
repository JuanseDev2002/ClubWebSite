import React from "react";

const Text = ({ text, styles }) => {
  return (
    <p class={styles}>{text}</p>
  );
};

export default Text;
