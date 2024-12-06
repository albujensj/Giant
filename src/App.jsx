import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import './App.css';
import Comida from './componentes/Comida';
import Mexicana from './componentes/Mexicana';
import China from './componentes/China';
import Italiana from './componentes/Italiana';
import Bebidas from './componentes/Bebidas';
import Alcoholicas from './componentes/Alcoholicas';
import NoAlcoholicas from './componentes/NoAlcoholicas';
import Layout from './layouts/Layout';
import { CartProvider } from './context/CartContext';

function App() {
  return (
    <CartProvider>
      <div>
        <BrowserRouter>
          <Routes>
            <Route element={<Layout />}>
              {/* Raíz principal: Redirige a Comida */}
              <Route path="/" element={<Navigate to="/Comida" />} />

              {/* Menú principal */}
              <Route path="/Comida/*" element={<Comida />}>
                <Route path="" element={<Navigate to="Mexicana" />} />
                <Route path="Mexicana" element={<Mexicana />} />
                <Route path="Italiana" element={<Italiana />} />
                <Route path="China" element={<China />} />
              </Route>

              <Route path = "/Bebidas/*" element = {<Bebidas/>}>
                <Route path="" element={<Navigate to="Alcoholicas"/>} />
                <Route path="Alcoholicas" element={<Alcoholicas />} />
                <Route path="NoAlcoholicas" element={<NoAlcoholicas />} />
              </Route>
            </Route>
          </Routes>
        </BrowserRouter>
      </div>
    </CartProvider>
  );
}

export default App;
