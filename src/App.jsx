import './App.css'
import Header from './Components/Headers/Header';
import ItemDetailContainer from './Components/Main/ItemDetailContainer';
import ItemListContainer from './Components/Main/ItemListContainer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { CartProvider } from './Context/CartContext';
import Cart from './Components/Headers/Cart/Cart';


function App() {
  return (
      <div className="App">
        <CartProvider>

          <BrowserRouter>
              <Header/>

              <Routes>
                <Route path='/' element={<ItemListContainer/>}/>
                <Route path='/item/:id' element={<ItemDetailContainer/>} />
                <Route path='/productos/:category' element={<ItemListContainer/>}/>
                <Route path='/cart' element={<Cart/>}/>
              </Routes>

          </BrowserRouter>
        </CartProvider>
      </div>
  );
}

export default App;
