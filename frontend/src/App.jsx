import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import { SearchProvider } from './context/SearchContext';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import AppRoutes from './routes/AppRoutes';
import './styles/globals.css';

function App() {
  return (
    <BrowserRouter>
        <SearchProvider>
          <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
            <Navbar />
            <main style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
              <AppRoutes />
            </main>
            <Footer />
          </div>
        </SearchProvider>
    </BrowserRouter>
  );
}

export default App;
