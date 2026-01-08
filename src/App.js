import logo from './logo.svg';
import {useState,useEffect} from 'react';
import './App.css';
import {MainLayout} from './layout/MainLayout';
import {Home} from './pages/Home';
import {BrowserRouter, Routes, Route,Navigate} from 'react-router-dom';
import UnderDevelopment from "./components/UnderDevelopment";
import PageLoader from "./components/PageLoader";
function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // simulate app load
    setTimeout(() => setLoading(false), 1500);
  }, []);
  return (
    <div className="App">
      {loading && <PageLoader />}
     {/* <Navbar /> */}
     {!loading && (
     <BrowserRouter>
       <MainLayout>
         <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Navigate to="/" replace />} />
            <Route path="*" element={<UnderDevelopment />} />
         </Routes>
       </MainLayout>
     </BrowserRouter>) }
    </div>
  );
}

export default App;
