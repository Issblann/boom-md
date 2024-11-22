import React from 'react';

const Plans = () => {
  return (
    <div className="container mx-auto py-8 px-4">
      <h1 className="text-4xl font-bold text-center text-gray-800 mb-6">
        Nuestros Planes
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
     
        <div className="bg-gradient-to-r from-red-400 to-blue-300 p-6 text-white rounded-xl shadow-lg transform transition-all hover:scale-105 hover:shadow-2xl">
          <h2 className="text-2xl font-semibold mb-4">Plan Básico</h2>
          <p className="text-sm text-gray-200 mb-4">
            Ideal para quienes buscan algo simple pero funcional. Incluye:
          </p>
          <ul className="mb-6 space-y-2 text-gray-100">
            <li>- Acceso a estaciones básicas</li>
            <li>- Uso de bicicletas estándar</li>
            <li>- Soporte en horario limitado</li>
          </ul>
          <p className="text-lg font-bold mb-4">$50.000</p>
          <a
            href="/plan-basico"
            className="inline-block bg-blue-700 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition-colors"
          >
            Más detalles
          </a>
        </div>

    
        <div className="bg-gradient-to-r from-blue-400 to-blue-300 p-6 text-white rounded-xl shadow-lg transform transition-all hover:scale-105 hover:shadow-2xl">
          <h2 className="text-2xl font-semibold mb-4">Plan Estándar</h2>
          <p className="text-sm text-gray-200 mb-4">
            Perfecto para el uso regular, con más beneficios:
          </p>
          <ul className="mb-6 space-y-2 text-gray-100">
            <li>- Acceso a todas las estaciones</li>
            <li>- Bicicletas premium</li>
            <li>- Soporte 24/7</li>
          </ul>
          <p className="text-lg font-bold mb-4">$100.000</p>
          <a
            href="/plan-estandar"
            className="inline-block bg-blue-700 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition-colors"
          >
            Más detalles
          </a>
        </div>

      
        <div className="bg-gradient-to-r from-blue-400 to-purple-600 p-6 text-white rounded-xl shadow-lg transform transition-all hover:scale-105 hover:shadow-2xl">
          <h2 className="text-2xl font-semibold mb-4">Plan Premium</h2>
          <p className="text-sm text-gray-200 mb-4">
            Diseñado para quienes buscan el máximo confort:
          </p>
          <ul className="mb-6 space-y-2 text-gray-100">
            <li>- Acceso ilimitado</li>
            <li>- Bicicletas de alta gama</li>
            <li>- Experiencia VIP en eventos</li>
          </ul>
          <p className="text-lg font-bold mb-4">$150.000</p>
          <a
            href="/plan-premium"
            className="inline-block bg-blue-700 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition-colors"
          >
            Más detalles
          </a>
        </div>
      </div>
    </div>
  );
};

export default Plans;