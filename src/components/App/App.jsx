import { Route, Routes } from 'react-router-dom'
import './App.css'
// import { useState } from 'react'
import HomePage from '../../pages/HomePage/HomePage.jsx'
import CatalogPage from '../../pages/CatalogPage/CatalogPage.jsx'
import ItemDetailsPage from '../../pages/ItemDetailsPage/ItemDetailsPage.jsx'
import NotFoundPage from '../../pages/NotFoundPage/NotFoundPage.jsx'
import Layout from '../Layout/Layout.jsx'
import Features from '../Features/Features.jsx'
import Reviews from '../Reviews/Reviews.jsx'

function App() {

  return (
    <Layout>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/catalog" element={<CatalogPage />} />
        <Route path="/catalog/:id" element={<ItemDetailsPage />} >
            <Route path="features" element={<Features />}/>
            <Route path="reviews" element={<Reviews />}/>

        </Route>
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </Layout>
  )
}

export default App
