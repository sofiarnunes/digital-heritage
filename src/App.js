import './App.css';
import NavBar from './Components/Navbar/NavBar';
import { Routes, Route, Navigate }from 'react-router-dom';
import { BrowserRouter }from 'react-router-dom';
import {createBrowserHistory} from 'history';
import About from './Components/About/About';
import HomePage from './Components/Homepage/HomePage';

function App() {
  const history = createBrowserHistory({});

  return (
    <BrowserRouter history={history}>
      <div>
        <NavBar/>
        <Routes>
          <Route path="/" element={<Navigate to="/home" />} />
          <Route path="/home" element={<HomePage />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </div>
    </BrowserRouter>

  );
}

export default App;
