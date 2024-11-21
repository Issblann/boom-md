import React from 'react';
import estacion from '../assets/estaciones.jpg'
const List = () => {
  return (
    <div className="container mx-auto p-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
     
        <div className="bg-blue-200 p-6 text-white rounded-lg shadow-md">
          <h2 className="text-xl font-semibold">Estación 1</h2>
          <img
            src={estacion}
            alt="Estación 1"
            className="w-full h-32 object-cover rounded-md mt-4"
          />
          <p className="mt-2">Ubicación: <a href="https://www.google.com/maps" className="text-blue-500 hover:underline">Ver en el mapa</a></p>
          <div className="flex items-center mt-2">
           
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 14l3 3 3-7 4 4 4-4M9 7a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
            <span className="ml-2">Disponible</span>
          </div>
          <a href="/detalles" className="mt-4 inline-block bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-700 text-center">Detalles</a>
        </div>

        <div className="bg-blue-300 p-6 text-white rounded-lg shadow-md">
          <h2 className="text-xl font-semibold">Estación 2</h2>
          <img
            src={estacion}
            alt="Imagen Estación 2"
            className="w-full h-32 object-cover rounded-md mt-4"
          />
          <p className="mt-2">Ubicación: <a href="https://www.google.com/maps" className="text-blue-500 hover:underline">Ver en el mapa</a></p>
          <div className="flex items-center mt-2">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 14l3 3 3-7 4 4 4-4M9 7a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
            <span className="ml-2">Disponible</span>
          </div>
          <a href="/detalles" className="mt-4 inline-block bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-700 text-center">Detalles</a>
        </div>

        <div className="bg-blue-400 p-6 text-white rounded-lg shadow-md">
          <h2 className="text-xl font-semibold">Estación 3</h2>
          <img
            src={estacion}
            alt="Imagen Estación 3"
            className="w-full h-32 object-cover rounded-md mt-4"
          />
          <p className="mt-2">Ubicación: <a href="https://www.google.com/maps" className="text-blue-500 hover:underline">Ver en el mapa</a></p>
          <div className="flex items-center mt-2">
      
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 14l3 3 3-7 4 4 4-4M9 7a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
            <span className="ml-2">Disponible</span>
          </div>
          <a href="/detalles" className="mt-4 inline-block bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-700 text-center">Detalles</a>
        </div>

        <div className="bg-blue-500 p-6 text-white rounded-lg shadow-md">
          <h2 className="text-xl font-semibold">Estación 4</h2>
          <img
            src={estacion}
            alt="Imagen Estación 4"
            className="w-full h-32 object-cover rounded-md mt-4"
          />
          <p className="mt-2">Ubicación: <a href="https://www.google.com/maps" className="text-blue-500 hover:underline">Ver en el mapa</a></p>
          <div className="flex items-center mt-2">
      
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 14l3 3 3-7 4 4 4-4M9 7a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
            <span className="ml-2">Disponible</span>
          </div>
          <a href="/detalles" className="mt-4 inline-block bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-700 text-center">Detalles</a>
        </div>

      </div>
    </div>
  );
};

export default List;
