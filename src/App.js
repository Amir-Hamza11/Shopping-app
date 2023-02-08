import 'rsuite/dist/rsuite.min.css';
import './styles/main.scss'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Category from './pages/Category';
import Checkout from './pages/Checkout';
import { ProductProvider } from './misc/Product.context';

function App() {
  return (
    <ProductProvider>
    <BrowserRouter >
      <Routes>
        <Route path='/' element={<Home/>} />

        <Route path='/category/:id' element={<Category/>} />
  
        <Route path='/checkout' element={<Checkout/>} />
      </Routes>
    </BrowserRouter>
    </ProductProvider>
  );
}

export default App;