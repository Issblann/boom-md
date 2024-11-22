import React from 'react';
import { LocationOn, CheckCircle, Cancel } from '@mui/icons-material';
import { Button } from '@mui/material';
import { useSelector } from 'react-redux';
import CircleIcon from '@mui/icons-material/Circle';
import estacion from '../assets/estaciones.jpg';

const Detail = () => {
  const { selectedStation } = useSelector((state) => state.stations);

  return (
    <div className="container mx-auto p-6">
      <div className="flex flex-col lg:flex-row items-center lg:items-start bg-white rounded-lg shadow-lg overflow-hidden">
        <div className="lg:w-1/2 p-6 text-gray-800">
          <h1 className="text-3xl font-bold mb-4">{selectedStation?.name}</h1>
          <p className="text-gray-600 mb-4 flex items-center">
            <LocationOn className="mr-2 text-blue-500" />
            Ubicación:{' '}
            <a
              href={`https://www.google.com/maps/search/?api=1&query=${selectedStation.latitude},${selectedStation.longitude}`}
              className="text-blue-500 hover:underline ml-1"
              target="_blank"
              rel="noopener noreferrer"
            >
              Ver en el mapa
            </a>
          </p>
          <p className="text-gray-700 mb-4 font-bold text-xl">
            {selectedStation?.extra?.address}
          </p>
          <div className="flex gap-1">
            <CircleIcon className="mr-1" color="primary" />
            <p className="text-gray-600 font-semibold mb-4 flex items-center">
              Slots:
              {selectedStation?.extra?.slots}
            </p>
          </div>
          <div className="flex gap-1">
            {!selectedStation?.free_bikes ? (
              <Cancel className="mr-1 text-red-500" />
            ) : (
              <CheckCircle className="mr-1 text-green-500" />
            )}

            <p className="text-gray-600 font-semibold mb-4 flex items-center">
              {!selectedStation?.free_bikes
                ? 'No hay bicicletas disponibles'
                : 'Bicicletas disponibles: ' + selectedStation?.free_bikes}
            </p>
          </div>
          <div className="flex gap-1">
            <CircleIcon className="mr-1" color="#f2f2f2" />
            <p className="text-gray-600 font-semibold mb-4 flex items-center">
              Slots ocupados:
              <span className="font-bold">{selectedStation?.empty_slots}</span>
            </p>
          </div>
        </div>

        <div className="lg:w-1/2 p-6 flex flex-col items-center">
          <img
            src={estacion}
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
