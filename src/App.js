import './App.css';
import Register from './components/Register';
import Login from './components/Login';
import { BrowserRouter, Route, Routes } from 'react-router-dom';


function App() {
  return (
    <BrowserRouter>
    <div class='box'>
      <Routes>
        <Route index element={<Login />} />
        <Route path="Register" element={<Register />} />
      </Routes>
      {/* <Register/> */}
    </div>
  </BrowserRouter>

  );
}

export default App;
