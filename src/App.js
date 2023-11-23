import './App.css';
import { Route, Routes } from 'react-router-dom';
import Auth from './Routes/Auth';
import Dashboard from './Routes/Dashboard';
import ChatBot from './Routes/ChatBot';
import LandingRoutes from './components/Landing_components/landing-routes.component';

function App() {
  return (
    <Routes>
    {/* This route is for the landing page routes. The component will house any routes that will be on the landing page, like the about us, blog, etc. */}
      <Route exact path='/' element={<LandingRoutes />} />
      <Route path='/auth/*' element={<Auth />} />
      <Route path='/dashboard' element={<Dashboard />} />
      <Route path='/chat-bot' element={<ChatBot />} />
    </Routes>
  );
}


//NAVIGATION ROUTES
// /auth = SIGNUP PAGE
// /auth/login = LOGIN PAGE
// /auth/reset-password = RESET PASSWORD PAGE

export default App;
