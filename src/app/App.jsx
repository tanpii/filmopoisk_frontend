import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import MoviesPage from '../pages/MoviesPage/MoviesPage';
import MoviePage from '../pages/MoviePage/MoviePage';
import Layout from '../shared/ui/Layout/Layout';

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
