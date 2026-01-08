import logo from './logo.svg';
import './App.css';
import {MainLayout} from './layout/MainLayout';
import {Home} from './pages/Home';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import UnderDevelopment from "../components/UnderDevelopment";
function App() {
  return (
    <div className="App">
     {/* <Navbar /> */}
     <BrowserRouter>
       <MainLayout>
         <Routes>
            <Route path="/" element={<Home />} />
            <Route path="*" element={<UnderDevelopment />} />
         </Routes>
       </MainLayout>
     </BrowserRouter>
    </div>
  );
}

export default App;
