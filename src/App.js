import './App.css';
import { Route, Routes } from 'react-router-dom';
import Landing from './Routes/Landing';
import Auth from './Routes/Auth';
import Dashboard from './Routes/Dashboard';
import ChatBot from './Routes/ChatBot';

function App() {
  return (
    <Routes>
      <Route exact path='/' element={<Landing />} />
      <Route path='/auth/*' element={<Auth />} />
      <Route path='/dashboard' element={<Dashboard />} />
      <Route path='/chat-bot/*' element={<ChatBot />} />
    </Routes>
  );
}


//NAVIGATION ROUTES
// /auth = SIGNUP PAGE
// /auth/login = LOGIN PAGE
// /auth/reset-password = RESET PASSWORD PAGE

export default App;
