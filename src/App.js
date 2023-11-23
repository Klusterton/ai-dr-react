import './App.css';
import { Route, Routes } from 'react-router-dom';
import Landing from './Routes/Landing';
import Auth from './Routes/Auth';
import Dashboard from './Routes/Dashboard';

function App() {
  return (
    <Routes>
      <Route exact path='/' element={<Landing />} />
      <Route path='/auth/*' element={<Auth />} />
      <Route path='/dashboard' element={<Dashboard />} />
    </Routes>
  );
}


//NAVIGATION ROUTES
// /auth = SIGNUP PAGE
// /auth/login = LOGIN PAGE
export default App;
