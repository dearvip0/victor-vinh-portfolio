import React from "react";
import { FaFacebookF, FaLinkedin, FaLink, FaGithubAlt } from "react-icons/fa";

const SocialMedia = () => (
  <div className="app__social">
    <div>
      <a
        href="https://www.linkedin.com/in/bao-thuong"
        target="_blank"
        rel="noreferrer"
      >
        <FaLinkedin />
      </a>
    </div>
    <div>
      <a
        href="https://www.facebook.com/Baothuong9608"
        target="_blank"
        rel="noreferrer"
      >
        <FaFacebookF />
      </a>
    </div>
    <div>
      <a href="https://github.com/dearvip0" target="_blank" rel="noreferrer">
        <FaGithubAlt />
      </a>
    </div>
    <div>
      <FaLink />
    </div>
  </div>
);

export default SocialMedia;
