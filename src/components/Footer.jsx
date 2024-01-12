import { Link } from "react-router-dom";

import { socialMedia } from "../constants/socialMedia";

const Footer = () => {
  return (
    <footer className="footer font-poppins">
      <hr className="border-slate-200" />

      <div className="footer-container">
        <p>
          © 2024 <strong>Anten Manuuel</strong>. All rights reserved.
        </p>

        <div className="flex gap-3 justify-center items-center">
          {socialMedia.map((link) => (
            <Link key={link.name} to={link.link} target="_blank">
              <img
                src={link.iconUrl}
                alt={link.name}
                className="w-6 h-6 object-contain"
              />
            </Link>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
