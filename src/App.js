import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Categaries from './compo/Categaries';
import Product from './compo/Product';
import { Route, Routes } from 'react-router-dom';
import Singlepro from './compo/Singlepro';

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Categaries/>}></Route>
        <Route path='product' element={<Product/>}></Route>
        <Route path='single' element={<Singlepro/>}></Route>
      </Routes>
    </>
  );
}

export default App;
