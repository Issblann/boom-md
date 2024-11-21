import { Route, Routes } from 'react-router-dom';
import Home from '../components/home';
import About from '../components/home';

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      {/* <Route path="/descubre" element={<List />} /> */}
    </Routes>
  );
};

export default AppRoutes;
