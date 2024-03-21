import logo from './logo.svg';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import Home from './Components/Home';
import Wheel from './Components/Wheel';


function App() {
  return (
    <div className="App">
    <Routes>
  <Route path='/' element= {<Home />} />
  <Route path="/wheel" element={<Wheel />} />
    </Routes>
    
    </div>
  );
}

export default App;
