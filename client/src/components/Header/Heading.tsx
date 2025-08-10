import { Link } from "react-router-dom";
import Navbar from "./Navbar";
import logoBlack from "../../assets/logo-black.png";
import logoWhite from "../../assets/logo-white.png";

function Heading() {
  return (
    <header
      className={`sticky top-0 left-0 w-full z-50 
    bg-white dark:bg-gray-900 border-b border-b-gray-400 dark:border-b-gray-50 
    flex justify-between items-center py-1 md:py-4`}
    >
      <Link to="/" className="font-lora font-bold flex items-center">
        <img
          src={logoBlack}
          alt="logoBlack"
          className="block dark:hidden h-6 sm:h-7 object-contain"
        />
        <img
          src={logoWhite}
          alt="logoWhite"
          className="hidden dark:block h-6 sm:h-7 object-contain"
        />
      </Link>
      <Navbar />
    </header>
  );
}

export default Heading;
