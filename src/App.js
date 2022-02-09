import './App.css';
import NavBar from './Components/Navbar/NavBar';
import { Routes, Route, Navigate }from 'react-router-dom';
import { BrowserRouter }from 'react-router-dom';
import {createBrowserHistory} from 'history';
import About from './Components/About/About';
import HomePage from './Components/Homepage/HomePage';
import Contact from './Components/Contact/Contact';
import Services from './Components/Services/Services';
import Gallery from './Components/Gallery/Gallery';

function App() {
  const history = createBrowserHistory({});

  return (
    <BrowserRouter history={history}>
      <div>
        <NavBar/>
        <Routes>
          <Route exact path="/" element={<Navigate to="/home" />} />
          <Route exact path="/home" element={<HomePage  history={history} />} />
          <Route exact path="/about" element={<About />} />
          <Route exact path="/gallery" element={<Gallery />} />
          <Route exact path="/services" element={<Services />} />
          <Route exact path="/contact" element={<Contact />} />
        </Routes>
        {/* <Footer/> */}
      </div>
    </BrowserRouter>

  );
}

export default App;
