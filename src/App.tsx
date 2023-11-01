import React from 'react';
import './App.css';
import { Navbar } from './layouts/NavbarAndFooter/Navbar';
import { Footer } from './layouts/NavbarAndFooter/Footer';
import { HomePage } from './layouts/HomePage/HomePage';
import { SearchBooksPage } from './layouts/SearchBookpage/SearchBookPage';

export const App = () => {
  return (
    <div>
      <Navbar />
      <SearchBooksPage/>
      {/* <HomePage /> */}
      <Footer />
    </div>
  );
}

export default App;
