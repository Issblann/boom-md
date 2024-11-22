import React from 'react';
import estacion from '../assets/estaciones.jpg';

const List = () => {
  return (
    <div className="container mx-auto p-4 m-[5%]">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        
        <div className="bg-gradient-to-r from-blue-400 to-blue-500 p-6 text-white rounded-xl shadow-xl transform transition-all hover:scale-105 hover:shadow-2xl">
          <h2 className="text-2xl font-semibold">Estación 1</h2>
          <img
            src={estacion}
            alt="Estación 1"
            className="w-full h-40 object-cover rounded-lg mt-4 transition-transform duration-300 hover:scale-105"
          />
          <p className="mt-3 text-sm text-gray-200">Ubicación: 
            <a href="https://www.google.com/maps" className="text-blue-300 hover:underline">Ver en el mapa</a>
          </p>
          <div className="flex items-center mt-2">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 14l3 3 3-7 4 4 4-4M9 7a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
            <span className="ml-2 text-gray-200">Disponible</span>
          </div>
          <a href="/detalles" className="mt-4 inline-block bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 text-center transition-colors">Detalles</a>
        </div>

        <div className="bg-gradient-to-r from-blue-500 to-blue-600 p-6 text-white rounded-xl shadow-xl transform transition-all hover:scale-105 hover:shadow-2xl">
          <h2 className="text-2xl font-semibold">Estación 2</h2>
          <img
            src={estacion}
            alt="Imagen Estación 2"
            className="w-full h-40 object-cover rounded-lg mt-4 transition-transform duration-300 hover:scale-105"
          />
          <p className="mt-3 text-sm text-gray-200">Ubicación: 
            <a href="https://www.google.com/maps" className="text-blue-300 hover:underline">Ver en el mapa</a>
          </p>
          <div className="flex items-center mt-2">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 14l3 3 3-7 4 4 4-4M9 7a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
            <span className="ml-2 text-gray-200">Disponible</span>
          </div>
          <a href="/detalles" className="mt-4 inline-block bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 text-center transition-colors">Detalles</a>
        </div>

        <div className="bg-gradient-to-r from-blue-600 to-blue-700 p-6 text-white rounded-xl shadow-xl transform transition-all hover:scale-105 hover:shadow-2xl">
          <h2 className="text-2xl font-semibold">Estación 3</h2>
          <img
            src={estacion}
            alt="Imagen Estación 3"
            className="w-full h-40 object-cover rounded-lg mt-4 transition-transform duration-300 hover:scale-105"
          />
          <p className="mt-3 text-sm text-gray-200">Ubicación: 
            <a href="https://www.google.com/maps" className="text-blue-300 hover:underline">Ver en el mapa</a>
          </p>
          <div className="flex items-center mt-2">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 14l3 3 3-7 4 4 4-4M9 7a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
            <span className="ml-2 text-gray-200">Disponible</span>
          </div>
          <a href="/detalles" className="mt-4 inline-block bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 text-center transition-colors">Detalles</a>
        </div>

        <div className="bg-gradient-to-r from-blue-700 to-blue-800 p-6 text-white rounded-xl shadow-xl transform transition-all hover:scale-105 hover:shadow-2xl">
          <h2 className="text-2xl font-semibold">Estación 4</h2>
          <img
            src={estacion}
            alt="Imagen Estación 4"
            className="w-full h-40 object-cover rounded-lg mt-4 transition-transform duration-300 hover:scale-105"
          />
          <p className="mt-3 text-sm text-gray-200">Ubicación: 
            <a href="https://www.google.com/maps" className="text-blue-300 hover:underline">Ver en el mapa</a>
          </p>
          <div className="flex items-center mt-2">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 14l3 3 3-7 4 4 4-4M9 7a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
            <span className="ml-2 text-gray-200">Disponible</span>
          </div>
          <a href="/detalles" className="mt-4 inline-block bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 text-center transition-colors">Detalles</a>
        </div>

      </div>
    </div>
  );
};

export default List;