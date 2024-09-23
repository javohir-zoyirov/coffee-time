import './App.css';
import "bootstrap/dist/css/bootstrap.css"
import "bootstrap/dist/js/bootstrap.js"
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom';
import { HomePage } from './components/home-page';
import { Cofe } from './components/cofe';
import { Tea } from './components/tea';
import { Eat } from './components/eat';
import { Healthy } from './components/healthy';
import { AboutProduct } from './components/about-product';
import { Basket } from './components/basket';
import { Blog } from './components/blog';
import { User } from './components/user';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<HomePage/>}/>
        <Route path='/coffee' element={<Cofe/>} />
        <Route path='/tea' element={<Tea/>}/>
        <Route path='/eat' element={<Eat/>} />
        <Route path='/Healthy' element={<Healthy/>}/>
        <Route path='/about-product' element={<AboutProduct/>}/>
        <Route path='/basket' element={<Basket/>}/>
        <Route path='/blog' element={<Blog/>}/>
        <Route path='/user' element={<User/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
