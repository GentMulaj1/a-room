import './App.css';
import Header from './component/Header';
import Footer from './component/Footer';
import Home from './pages/Home/Home';
import OurBlog from './pages/OurBlog/OurBlog';
import OurService from './pages/OurService/OurService';
import Programs from './pages/Programs/Programs';
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {



  return (
    <div className="app">
      <BrowserRouter> 
      <Header/>

        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/service' element={<OurService/>}/>
          <Route path='/programs' element={<Programs/>}/>
          <Route path='/blog' element={<OurBlog/>}/>
        </Routes>
        
        <Footer/>

      </BrowserRouter>
    </div>
  );
}

export default App;
