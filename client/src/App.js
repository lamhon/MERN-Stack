// import './App.css';
import Footer from './components/footer/Footer.js';
import Header from './components/header/Header.js';
import Redirect from './router/Redirect.js';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { DataProvider } from './GlobalState';

function App() {
  return (
    <DataProvider>
      <Router>
        <Header />
        <Redirect />
        <Footer />
      </Router>
    </DataProvider>
  );
}

export default App;
