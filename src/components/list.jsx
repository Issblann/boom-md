import React from 'react';
import estacion from '../assets/estaciones.jpg';
import { useDispatch, useSelector } from 'react-redux';
import DirectionsBikeIcon from '@mui/icons-material/DirectionsBike';
import { actions } from '../redux/slice/slice';
const List = () => {
  const dispatch = useDispatch();
  const { stations, selectedStation } = useSelector((state) => state.stations);

  console.log(stations, 'stations');

  const handlerFilter = (id) => {
    dispatch(actions.filterStationById(id));
  };

  console.log(selectedStation, 'selectedStations');
  return (
    <div className="container mx-auto p-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {stations?.stations?.map((station) => (
          <div
            onClick={() => handlerFilter(station.id)}
            key={station.id}
            className="bg-blue-200 p-6 cursor-pointer text-slate-800 rounded-lg shadow-md"
          >
            <h2 className="text-xl font-semibold">{station.name}</h2>
            <img
              src={estacion}
              alt="Estación 1"
              className="w-full h-32 object-cover rounded-md mt-4"
            />
            <p className="mt-2">
              Ubicación:
              <a
                target="_blank"
                href={`https://www.google.com/maps/search/?api=1&query=${station.latitude},${station.longitude}`}
                className="text-blue-500 hover:underline"
              >
                Ver en el mapa
              </a>
            </p>
            <div className="flex items-center mt-2">
              <DirectionsBikeIcon />
              <span className="ml-2">{station.free_bikes}</span>
            </div>
            <a
              onClick={() => handlerFilter(station.id)}
              href="/detalles"
              className="mt-4 inline-block bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-700 text-center"
            >
              Detalles
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default List;
