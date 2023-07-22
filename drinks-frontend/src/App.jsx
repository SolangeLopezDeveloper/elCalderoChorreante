import { AppRoutes } from './routes';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { MainLayout } from './layouts';
import { AuthProvider } from './context/AuthProvider';
import { CategoriesProvider } from './context/CategoriesProvider';
import { DrinksProvider } from './context/DrinksProvider';
import { CartProvider } from './context/CartProvider';
import { BrowserRouter } from 'react-router-dom';

import "primereact/resources/themes/lara-light-indigo/theme.css";
import "primereact/resources/primereact.min.css";
import './App.css';
import { Bienvenida } from './pages/Bienvenida';

function App() {

  return (
    <BrowserRouter>
      <AuthProvider>
        <CategoriesProvider>
          <DrinksProvider>
            <CartProvider>
            <MainLayout>
              <Bienvenida >
                  <AppRoutes />
              </Bienvenida  >
              </MainLayout>
            </CartProvider>
          </DrinksProvider>
        </CategoriesProvider>
      </AuthProvider>
    </BrowserRouter>


  )
}

export default App
