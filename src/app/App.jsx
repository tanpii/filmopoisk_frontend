import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import MoviesPage from '../pages/MoviesPage/MoviesPage';
import MoviePage from '../pages/MoviePage/MoviePage';
import Layout from './Layout/Layout';
import LoginModal from '../features/LoginModal/LoginModal';

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<MoviesPage />} />
          <Route path="/movie/:id" element={<MoviePage />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
