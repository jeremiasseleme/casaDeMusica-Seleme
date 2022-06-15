import './App.css';
import ItemListContainer from './Components/ItemListContainer/ItemListContainer';
import Nav from './Components/Nav/Nav';


function App() {
  return (
  <>
    <Nav />
    <ItemListContainer greeting="Bienvenido a mi lista de productos" />
  </>
  )
}

export default App;
