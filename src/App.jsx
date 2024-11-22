import { BrowserRouter } from 'react-router-dom';
import './App.css';
import AppRoutes from './routes/routes';
import { useDispatch, useSelector } from 'react-redux';
import './App.css';
import { useEffect } from 'react';
import { thunks } from './redux/slice/thunks';
import { actions } from './redux/slice/slice';
import Home from './components/home';
import Navbar from './components/navbar';
import Layout from './layout/layout';
import Plans from './components/plans';

function App() {
  const dispatch = useDispatch();
  const { plansData, vehiclesTypesData } = useSelector(
    (state) => state.stations
  );

  useEffect(() => {
    dispatch(thunks.getInformationCity('encicla'));
  }, []);

  console.log(plansData, 'plansData');
  console.log(vehiclesTypesData);

  return (
    <>
      <BrowserRouter>
        <Layout>
          <AppRoutes />
        </Layout>
      </BrowserRouter>
      <Plans/>

    </>
  );
}

export default App;
