import ItemCount from './Components/ItemCount/ItemCount';
import ItemListContainer from './Components/ItemListContainer/ItemListContainer';
import Nav from './Components/Nav/Nav';
import TestPromise from './Components/TestPromise';


function App() {

  let initial = 1
  let stock = 5

  function onAdd(valor){
   alert("Usted agrego " + valor +  " producto/s al carrito de compras!")
  }

  return (
  <>
    <Nav />
    <ItemListContainer greeting="Bienvenido a mi lista de productos" />
    <ItemCount stock={stock} initial={initial} onAdd={onAdd}/>
    <TestPromise/> {/* Solo queria dejarte esto como un ejemplo! */}
  </>
  )
}

export default App;
