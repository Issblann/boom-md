import React from 'react';
import { LocationOn, CheckCircle, Cancel } from '@mui/icons-material';
import { Button } from '@mui/material';

const Detail = () => {
  const station = {
    name: 'Estación Central',
    mapLink: 'https://www.google.com/maps',
    description: 'Una estación bien ubicada con accesibilidad a diversas rutas.',
    status: 'Disponible',
    image: 'https://via.placeholder.com/500x300',
  };

  return (
    <div className="container mx-auto p-6">
      <div className="flex flex-col lg:flex-row items-center lg:items-start bg-white rounded-lg shadow-lg overflow-hidden">
        <div className="lg:w-1/2 p-6 text-gray-800">
          <h1 className="text-3xl font-bold mb-4">{station.name}</h1>
          <p className="text-gray-600 mb-4 flex items-center">
            <LocationOn className="mr-2 text-blue-500" />
            Ubicación:{' '}
            <a
              href={station.mapLink}
              className="text-blue-500 hover:underline ml-1"
              target="_blank"
              rel="noopener noreferrer"
            >
              Ver en el mapa
            </a>
          </p>
          <p className="text-gray-700 mb-4">{station.description}</p>
          <p className="text-gray-600 font-semibold mb-4 flex items-center">
            Estado:{' '}
            <span
              className={`${
                station.status === 'Disponible' ? 'text-green-500' : 'text-red-500'
              } flex items-center`}
            >
              {station.status === 'Disponible' ? (
                <CheckCircle className="mr-2" />
              ) : (
                <Cancel className="mr-2" />
              )}
              {station.status}
            </span>
          </p>
        </div>

        <div className="lg:w-1/2 p-6 flex flex-col items-center">
          <img
            src={station.image}
            alt="Imagen de la estación"
            className="w-full h-64 object-cover rounded-md shadow-md mb-6"
          />
          <Button
            variant="contained"
            color="primary"
            className="hover:bg-blue-700 transition duration-300 transform hover:scale-105"
            onClick={() => alert('Reserva hecha')}
          >
            Reservar
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Detail;