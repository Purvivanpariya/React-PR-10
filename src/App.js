import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Fetch from './Fetch/Fetch';
import Axios from './Axios/Axios';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          
          <Route path='/axios' element={<Axios/>}/>
          <Route path='/' element={<Fetch/>}/>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
