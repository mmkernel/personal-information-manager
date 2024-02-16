import { BrowserRouter } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import AppMain from './apps/AppMain';
import Footer from './components/Footer';

const App = () => {
  return (
    <>
        <BrowserRouter>
          <Navbar />
          <AppMain />
          <Footer />
        </BrowserRouter>
    </>
  );
}

export default App;
