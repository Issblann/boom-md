import { Route, Routes } from 'react-router-dom';
import Home from '../components/home';

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      {/* <Route path="/descubre" element={<About />} /> */}
    </Routes>
  );
};

export default AppRoutes;
