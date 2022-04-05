// Components
import NavBar from "./components/NavBar";
import ItemListContainer from "./components/ItemListContainer";
// Coustom Css
import './App.css';
// Bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle';

function App() {
  return (
    <>
      <NavBar />
      <ItemListContainer />
    </>
  );
}

export default App;