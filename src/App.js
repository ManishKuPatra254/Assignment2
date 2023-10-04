import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Navbar } from './Navbar/Navbar';
import { NewYork } from './NewYork/NewYork';
import { Mumbai } from './Mumbai/Mumbai';
import { Paris } from './Paris/Paris';
import { London } from './London/London';
import { Property } from './Property/Property';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<NewYork />} />
          <Route path='/mumbai' element={<Mumbai />} />
          <Route path='/paris' element={<Paris />} />
          <Route path='/london' element={<London />} />
          <Route path='/property/:id' element={<Property />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
