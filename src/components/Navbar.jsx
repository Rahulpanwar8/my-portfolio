import { FaLinkedin, FaGithub, FaInstagram, FaTwitter } from "react-icons/fa";  // Importing necessary icons
import logo from "../assets/Rahul.ico";  // Corrected import for the logo

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between py-6">
      <div className="flex-shrink-0 items-center">
        <a href="/" aria-label="Home">
          <img src={logo} className="mx-2" width={50} height={33} alt="Logo" />
        </a>
      </div>
      <div className="m-8 flex items-center justify-center gap-4 text-2xl">
        {/* LinkedIn Icon */}
        <a 
          href="https://www.linkedin.com/in/techmcu" 
          target="_blank" 
          rel="noopener noreferrer" 
          aria-label="LinkedIn"
        >
          <FaLinkedin size={30} />
        </a>

        {/* GitHub Icon */}
        <a 
          href="https://github.com/Rahulpanwar8" 
          target="_blank" 
          rel="noopener noreferrer" 
          aria-label="GitHub"
        >
          <FaGithub size={30} />
        </a>

        {/* Instagram Icon */}
        <a 
          href="https://www.instagram.com/techmcu" 
          target="_blank" 
          rel="noopener noreferrer" 
          aria-label="Instagram"
        >
          <FaInstagram size={30} />
        </a>

        {/* Twitter (X) Icon */}
        <a 
          href="https://twitter.com/@techmcu" 
          target="_blank" 
          rel="noopener noreferrer" 
          aria-label="Twitter"
        >
          <FaTwitter size={30} />
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
