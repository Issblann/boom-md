import { useDispatch, useSelector } from 'react-redux';
import './App.css';
import { useEffect } from 'react';
import { thunks } from './redux/slice/thunks';
import { actions } from './redux/slice/slice';

function App() {
  const dispatch = useDispatch();
  const { stations, plansData, vehiclesTypesData, selectedStation } =
    useSelector((state) => state.stations);

  useEffect(() => {
    dispatch(thunks.getInformationCity('tembici-bogota'));
    dispatch(thunks.getPricingPlans());
    dispatch(thunks.getVehiclesTypes());
  }, []);

  console.log(stations);
  console.log(plansData, 'plansData');
  console.log(vehiclesTypesData);

  const handlerFilter = (id) => {
    dispatch(actions.filterStationById(id));
  };

  console.log(selectedStation, 'selectedStation');
  return (
    <>
      {/* <div>
        <h1>Stations</h1>
        <ul>
          {stations?.stations?.map((station) => (
            <>
              <li key={station.id}>{station.name}</li>
              <button
                onClick={() => handlerFilter(station.id)}
                className="bg-red-500 p-2 rounded-md"
              >
                info por estacion
              </button>
              <br />
            </>
          ))}
        </ul>
      </div> */}
      <h1>Principal</h1>
    </>
  );
}

export default App;
