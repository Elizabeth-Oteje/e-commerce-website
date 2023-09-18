import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import {Navbar} from './components/navbar';
import './components/navbar.css'
import {Shop} from './pages/shop/shop'
import {Cart} from './pages/cart/cart'
import { ShopContextProvider } from './context/shop-context';
import { Checkout } from './pages/cart/checkout';
import {SingleItem} from './pages/cart/single-item';

function App() {
  return (
    <div className="App">
      <ShopContextProvider>
      <Router>
        <Navbar/>
        <Routes>
          <Route path='/' element={<Shop/>}/>
          <Route path='/cart' element={<Cart/>}/>
          <Route path='/checkout' element={<Checkout/>}/>
          <Route path='/item/:id' element={<SingleItem/>}/>
        </Routes>
      </Router>
      </ShopContextProvider>
    </div>
  );
}

export default App;
