//@ts-check
import ItemListContainer from './Components/ItemListContainer/ItemListContainer';
import Nav from './Components/Nav/Nav';
import { BrowserRouter, Routes, Route} from "react-router-dom";
import ItemDetailContainer from './Components/ItemDetailContainer/ItemDetailContainer';
import Footer from './Components/Footer/Footer';
import CartContext from './Contexts/CartContext/CartContext';

function App() {

  return (
  <>
  <CartContext>
  <BrowserRouter>
    <Nav />
    <Routes>
    <Route path="/" element={<ItemListContainer />} />
    <Route path="/category/:categoryID" element={<ItemListContainer />} />
    <Route path="/item/:instrumentoID" element={<ItemDetailContainer />} />
    </Routes>
    <Footer/>
    </BrowserRouter>
    </CartContext>
  </>
  )
}

export default App;
