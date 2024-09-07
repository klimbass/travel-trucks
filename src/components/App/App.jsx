import { Route, Routes } from 'react-router-dom';
import HomePage from '../../pages/HomePage/HomePage.jsx';
import CatalogPage from '../../pages/CatalogPage/CatalogPage.jsx';
import ItemDetailsPage from '../../pages/ItemDetailsPage/ItemDetailsPage.jsx';
import NotFoundPage from '../../pages/NotFoundPage/NotFoundPage.jsx';
import Layout from '../Layout/Layout.jsx';
import Features from '../Features/Features.jsx';
import Reviews from '../Reviews/Reviews.jsx';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchTrucks } from '../../redux/operations.js';
import { ThemeProvider } from '@mui/material';
import theme from '../../schemas/schemaMUIthem.jsx';
import { getStatusFilter } from '../../redux/selectors.js';

function App() {
  const filters = useSelector(getStatusFilter);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchTrucks(filters));
  }, [dispatch, filters]);

  return (
    <ThemeProvider theme={theme}>
      <Layout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/catalog" element={<CatalogPage />} />
          <Route path="/catalog/:id" element={<ItemDetailsPage />}>
            <Route path="features" element={<Features />} />
            <Route path="reviews" element={<Reviews />} />
          </Route>
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Layout>
    </ThemeProvider>
  );
}

export default App;
