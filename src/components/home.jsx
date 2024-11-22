import React from 'react';
import decoration from '../../public/img/elipse.png';
import CompanyInfo from '../components/companyInfo';
import Plans from './plans';

function About() {
  return (
    <div className="bg-whiteDark">
      <div className="flex flex-col items-center justify-center h-screen w-full  relative overflow-hidden bg-whiteDark">
        <div
          id="reductor"
          className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center space-y-10 md:space-y-0 relative h-full w-full"
        >
          {/* Image Section */}
          <div
            id="ImagenConfiguracion"
            className="hidden md:block absolute top-0 right-0 w-[70%] h-full pointer-events-none"
          >
            <img
              id="imgConfig"
              src={decoration}
              alt="Imagen Configuración"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Text Section */}
          <div className="text-center md:text-left md:w-[30%] z-10 relative p-6">
            <h1 className="text-4xl sm:text-7xl font-extrabold text-black mt-2 mb-5">
              Boom
            </h1>
            <h2 className="text-lg sm:text-xl text-gray-600 font-medium">
              Quiénes Somos
            </h2>
            <div id="info" className="mt-6 text-gray-800">
              <p className="text-base sm:text-lg leading-relaxed">
                Somos boom 🧸! Estamos aquí para ayudarte a encontrar una forma
                sostenible y ágil para tu movilización.
              </p>
            </div>
          </div>
        </div>
      </div>
      <CompanyInfo />
      <Plans />
    </div>
  );
}

export default About;
