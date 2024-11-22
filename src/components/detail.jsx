import React from 'react';
import { useSelector } from 'react-redux';

const Detail = () => {
  const { selectedStation } = useSelector((state) => state.stations);

  console.log(selectedStation, 'selectedStations');
  return (
    <div className="container mx-auto p-4">
      <div className="flex flex-col lg:flex-row items-center lg:items-start lg:justify-between bg-white rounded-lg shadow-md overflow-hidden">
        <div className="lg:w-1/2 p-6 text-gray-800">
          <h1 className="text-2xl font-bold mb-4">name</h1>
          <p className="text-gray-600 mb-4">
            Ubicación:{' '}
            <a
              // href={station.mapLink}
              className="text-blue-500 hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              Ver en el mapa
            </a>
          </p>
          <p className="text-gray-700 mb-4">desc</p>
          <p className="text-gray-600 font-semibold">
            Estado:{' '}
            <span
            // className={`${
            //   station.status === "Disponible" ? "text-green-500" : "text-red-500"
            // }`}
            >
              estatus
            </span>
          </p>
        </div>

        <div className="lg:w-1/2 p-6 flex flex-col items-center">
          <img
            // src={station.image}
            // alt={`Imagen de ${station.name}`}
            className="w-full h-64 object-cover rounded-md shadow-md mb-6"
          />
          <button
            className="bg-blue-500 text-white py-2 px-6 rounded-lg hover:bg-blue-700 transition duration-200"
            // onClick={() => alert(`Reserva hecha para ${station.name}`)}
          >
            Reservar
          </button>
        </div>
      </div>
    </div>
  );
};

export default Detail;
