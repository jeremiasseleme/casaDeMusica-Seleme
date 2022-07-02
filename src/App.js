//@ts-check
import ItemListContainer from './Components/ItemListContainer/ItemListContainer';
import Nav from './Components/Nav/Nav';
import { BrowserRouter, Routes, Route} from "react-router-dom";
import ItemDetailContainer from './Components/ItemDetailContainer/ItemDetailContainer';
import Footer from './Components/Footer/Footer';

function App() {

  return (
  <>
  <BrowserRouter>
    <Nav />
    <Routes>
    <Route path="/" element={<ItemListContainer />} />
    <Route path="/category/:categoryID" element={<ItemListContainer />} />
    <Route path="/item/:instrumentoID" element={<ItemDetailContainer />} />
    </Routes>
    <Footer/>
    </BrowserRouter>
  </>
  )
}

export default App;
