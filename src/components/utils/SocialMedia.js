import React from "react";

function SocialMedia(props) {
  const { link, icon, label } = props;
  return (
    <a target="_blank" aria-label={label} rel="noopener noreferrer" href={link}>
      <i className={icon} aria-hidden="true" />
    </a>
  );
}

export default SocialMedia;
