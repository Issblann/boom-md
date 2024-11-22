import React from 'react';
import Logo from '../../public/img/logowhite.png';
import Bear from '../../public/img/picmix.com_2358974.gif';  

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-5 relative">
      <div className="max-w-screen-xl mx-auto px-9">
        <div className="flex justify-between items-center">
          {/* Logo o Marca */}
          <div className="flex items-center space-x-4">
            <img src={Logo} alt="Logo" className="h-9" />
          </div>
          {/* Enlaces de navegación */}
        </div>

        {/* Redes Sociales con animación */}
        <div className="mt-6 flex justify-center space-x-6">
          <a href="#" className="text-gray-400 hover:text-blue-500 transform transition-all duration-300 hover:scale-110">
            <i className="fab fa-facebook-f text-xl"></i>
          </a>
          <a href="#" className="text-gray-400 hover:text-blue-400 transform transition-all duration-300 hover:scale-110">
            <i className="fab fa-twitter text-xl"></i>
          </a>
          <a href="#" className="text-gray-400 hover:text-blue-700 transform transition-all duration-300 hover:scale-110">
            <i className="fab fa-linkedin-in text-xl"></i>
          </a>
          <a href="#" className="text-gray-400 hover:text-pink-500 transform transition-all duration-300 hover:scale-110">
            <i className="fab fa-instagram text-xl"></i>
          </a>
        </div>

        {/* Parte inferior del footer */}
        <div className="mt-6 border-t border-gray-700 pt-2 text-center text-gray-400">
          <p>© 2024 Boom. All rights reserved.</p>
        </div>
      </div>

      {/* Animación de osito en la esquina derecha */}
      <div className="absolute bottom-0 right-0 mb-10 mr-6 animate-bounce">
        <img src={Bear} alt="Bear" className="h-24" />
      </div>
    </footer>
  );
};

export default Footer;