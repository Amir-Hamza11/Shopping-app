import 'rsuite/dist/rsuite.min.css';
import './styles/main.scss'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Category from './pages/Category';
import Checkout from './pages/Checkout';
import { CartProvider } from './context/Cart.context';
import { ProductProvider } from './context/Product.context';

function App() {
  return (
    <ProductProvider>
      <CartProvider >
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<Home />} />

            <Route path='/category/:id' element={<Category />} />

            <Route path='/checkout' element={<Checkout />} />
          </Routes>
        </BrowserRouter>
      </CartProvider>
    </ProductProvider>
  );
}

export default App;
