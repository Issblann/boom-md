import { Route, Routes } from 'react-router-dom';
import Home from '../components/home';
import About from '../components/home';
import List from '../components/list';
import Detail from '../components/detail';

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/descubre" element={<List />} />
      <Route path="/detalles" element={<Detail />} />
    </Routes>
  );
};

export default AppRoutes;
