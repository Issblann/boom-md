import React from 'react';
import estacion from '../assets/estaciones.jpg';
import { useDispatch, useSelector } from 'react-redux';
import DirectionsBikeIcon from '@mui/icons-material/DirectionsBike';
import { actions } from '../redux/slice/slice';
import { Link } from 'react-router-dom';
const List = () => {
  const dispatch = useDispatch();
  const { stations, selectedStation } = useSelector((state) => state.stations);

  const handlerFilter = (id) => {
    dispatch(actions.filterStationById(id));
  };

  return (
    <div className="container mx-auto p-4 m-[5%]">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {stations?.stations?.map((station) => (
          <Link to={`/detalles/${station.id}`}>
            <div
              onClick={() => handlerFilter(station.id)}
              key={station.id}
              className="bg-gradient-to-r cursor-pointer from-blue-500 to-blue-600 p-6 text-white rounded-xl shadow-xl transform transition-all h-full max-h-[450px] hover:scale-105 hover:shadow-2xl"
            >
              <h2 className="text-1xl font-semibold">{station.name}</h2>
              <img
                src={estacion}
                alt="Imagen Estación 2"
                className="w-full h-40 object-cover rounded-lg mt-4 transition-transform duration-300 hover:scale-105"
              />
              <p className="mt-3 text-sm text-gray-200">
                Ubicación:
                <a
                  target="_blank"
                  href={`https://www.google.com/maps/search/?api=1&query=${station.latitude},${station.longitude}`}
                  // href="https://www.google.com/maps"
                  className="text-blue-300 hover:underline"
                  onClick={(e) => e.stopPropagation()}
                >
                  Ver en el mapa
                </a>
              </p>
              <div className="flex items-center mt-2">
                <DirectionsBikeIcon />
                <span className="ml-2">{station.free_bikes}</span>
              </div>
              <Link
                to={`/detalles/${station.id}`}
                onClick={() => handlerFilter(station.id)}
                className="mt-4 inline-block bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 text-center transition-colors"
              >
                Detalles
              </Link>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default List;
