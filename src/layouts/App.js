import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import '../styles/App.css';
import Header from './Header'
import Footer from './Footer'
import Page from './Page'

const App = () => {
  return ( 
    <Router basename={process.env.PUBLIC_URL}>
      <header>
        <Header />
      </header>
      <main>
        <Page />
      </main>
      <footer>
        <Footer />
      </footer>
    </Router>
   );
}
 
export default App;