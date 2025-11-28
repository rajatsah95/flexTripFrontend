import { Privateroute } from "./components/privateRoute";
import { Dashboard } from "./pages/dashboard";
import LandingPage from "./pages/landingPage";
import { Login } from "./pages/login";
import { Route, Routes } from 'react-router-dom'

function App() {
  return (
    <div>
    
    <Routes>
      <Route path='/' element={<LandingPage/>} />
      <Route path='/login' element={<Login/>} />
      <Route path='/dashboard' element={<Privateroute><Dashboard/></Privateroute>} />
     </Routes>
    </div>
  );
}

export default App;
