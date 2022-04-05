// Components
import NavBar from "./components/NavBar";
import ItemListContainer from "./components/ItemListContainer";
import ShowProducts from "./components/ShowProducts";
// Coustom Css
import './App.css';
// Bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle';

function App() {
  return (
    <>
      <NavBar />
      <ItemListContainer greeting="Hello World"/>
      <ShowProducts />
    </>
  );
}

export default App;