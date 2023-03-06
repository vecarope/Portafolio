import { Link } from "react-scroll";
import { BsLinkedin, BsGithub } from "react-icons/bs";
import { MdEmail } from "react-icons/md";

const Navbar = () => {
  return (
    <div
      class="flex flex-col items-center justify-center "
      x-cloak
      x-data="appData()"
      x-init="appInit()"
    >
      <div className="flex flex-col">
        <nav
          className="flex justify-around py-3.5 bg-transparent
            backdrop-blur-md shadow-lg w-full
            fixed top-0 left-0 right-0 z-10"
        >
          <div class="flex items-center">
            <Link
              className="cursor-pointer"
              to="hero"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
            >
              <h3 className="text-3xl font-medium text-blue-500">
                <img
                  className="h-10 w-10 object-cover "
                  src="/public/img/logo.png"
                  alt="Store Logo"
                />
              </h3>
            </Link>
          </div>

          <div class="items-center hidden space-x-8 lg:flex">
            <Link
              activeClass="active"
              to="about-me"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              className="flex text-teal-400 font-bold text-2xl hover:underline hover:text-yellow-300 hover:decoration-wavy
                    cursor-pointer transition-colors duration-300"
            >
              Sobre Mi
            </Link>

            <Link
              activeClass="active"
              to="skills"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              className="flex text-teal-400 text-2xl hover:underline hover:text-yellow-300 hover:decoration-wavy
                    cursor-pointer transition-colors duration-300"
            >
              Mis Skills
            </Link>

            <Link
              activeClass="active"
              to="proyect"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              className="flex text-teal-400 text-2xl hover:underline hover:text-yellow-300 hover:decoration-wavy
                    cursor-pointer transition-colors duration-300"
            >
              Proyectos
            </Link>

            <Link
              activeClass="active"
              to="gallery"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              className="flex text-teal-400  text-2xl hover:underline hover:text-yellow-300 hover:decoration-wavy
                    cursor-pointer transition-colors duration-300"
            >
              Galeria
            </Link>
            <Link
              activeClass="active"
              target="_blank"
              rel="noreferrer"
              onClick={() =>  window.open('https://linkedin.com/in/vecarope', '_blank')}
              className="flex text-teal-400 ml-5 text-2xl hover:underline hover:text-yellow-300 hover:decoration-wavy
                    cursor-pointer transition-colors duration-300"
            >
              <BsLinkedin />
            </Link>
            <Link
              onClick={() =>  window.open("https://github.com/vecarope", '_blank')}
              className="flex text-teal-400  text-2xl hover:underline hover:text-yellow-300 hover:decoration-wavy
                    cursor-pointer transition-colors duration-300"
            >
              <BsGithub />
            </Link>
            <Link
              onClick={() => (window.location.href = "mailto:vecarope@gmail.com")}
              className="flex text-teal-400  text-3xl hover:underline hover:text-yellow-300 hover:decoration-wavy
                    cursor-pointer transition-colors duration-300"
            >
              <MdEmail />
            </Link>
          </div>
        </nav>
      </div>
    </div>
  );
};
export default Navbar;
