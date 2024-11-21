import { useDispatch, useSelector } from 'react-redux';
import './App.css';
import { useEffect } from 'react';
import { thunks } from './redux/slice/thunks';
import { actions } from './redux/slice/slice';
import Home from './components/home';
import Navbar from './components/navbar';

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
      <Navbar />
      <Home />
    </>
  );
}

export default App;
