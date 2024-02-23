import { HashRouter, Navigate, Route, Routes } from 'react-router-dom';
import { CssBaseline, ThemeProvider } from '@mui/material';
import { useThemeContext } from './theme/ThemeContext';
import Layout from './components/layout/Layout';
import HomePage from './components/pages/HomePage';
import PhonesPage from './components/pages/PhonesPage';
import { ProductPage } from './components/pages/ProductPage';
import TabletsPage from './components/pages/TabletsPage';
import AccesoriesPage from './components/pages/AccesoriesPage';
import NotFoundPage from './components/pages/NotFoundPage';
import FavouritesPage from './components/pages/FavouritesPage';
import CartPage from './components/pages/CartPage';
import './style.css';

function App() {
  const { theme } = useThemeContext();

  return (
    <>
      <ThemeProvider theme={theme}>
        <HashRouter>
          <CssBaseline />
          <Routes>
            <Route element={<Layout />}>
              <Route path="/" element={<HomePage />} />
              <Route path="home" element={<Navigate to="/" />} />

              <Route path="phones">
                <Route index element={<PhonesPage />} />
                <Route path=":itemId" element={<ProductPage />} />
              </Route>

              <Route path="tablets">
                <Route index element={<TabletsPage />} />
                <Route path=":itemId" element={<ProductPage />} />
              </Route>

              <Route path="accessories">
                <Route index element={<AccesoriesPage />} />
                <Route path=":itemId" element={<ProductPage />} />
              </Route>

              <Route path="favourites" element={<FavouritesPage />} />

              <Route path="cart" element={<CartPage />} />

              <Route path="*" element={<NotFoundPage />} />
            </Route>
          </Routes>
        </HashRouter>
      </ThemeProvider>
    </>
  );
}

export default App;
