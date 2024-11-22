import React from 'react';
import decoration from '../../public/img/elipse.png';
import Plans from './plans';

function About() {
  return (
    <div className="bg-whiteDark">
      <div className="flex flex-col items-center justify-center h-screen w-full bg-whiteDark relative overflow-hidden">
        <div
          id="reductor"
          className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center space-y-10 md:space-y-0 relative h-full w-full"
        >
          <div
            id="ImagenConfiguracion"
            className="absolute top-0 right-0 w-[70%] h-full pointer-events-none"
          >
            <img
              id="imgConfig"
              src={decoration}
              alt="Imagen Configuración"
              className="w-full h-full object-cover"
            />
          </div>

          <div className="text-center md:text-left md:w-[30%] z-10 relative p-6">
            <h1 className="text-7xl font-extrabold text-black mt-2 mb-5">
              Boom
            </h1>
            <h2 className="text-xl text-gray-600 font-medium">Quiénes Somos</h2>
            <div id="info" className="mt-6 text-gray-800">
              <p className="text-lg leading-relaxed">
                Somos boom 🧸! estamos aqui para ayudarte a encontrar una forma
                sostenible y agil para tu movilizacion
              </p>
            </div>
          </div>
        </div>
      </div>
      <Plans />
    </div>
  );
}

export default About;
