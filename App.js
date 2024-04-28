import 'bootstrap/dist/css/bootstrap.min.css';
import Main from './pages/main';
import Login from './login/login';
import Register from './login/register';
import { Routes, BrowserRouter, Route } from 'react-router-dom';
export default function MyApp() {
  return ( 
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Main />} />
        <Route path="Login" element={<Login />} />
        {/* <Route path="Dashboard" element={<Dashboard />} /> */}
        <Route path="Register" element={<Register />} />
        {/* <Route path="TambahLayanan" element={<TambahLayanan />}/> */}
        {/* <Route path="Contact" element={<Contact />} /> */}
      </Routes>
    </BrowserRouter>
  );
}