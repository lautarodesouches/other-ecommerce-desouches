// Components
import NavBar from './components/NavBar';
import NotFound from './components/NotFound';
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer';
// Coustom Css
import './App.css';
// Bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle';
// React Router DOM
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path='/'                     element={<ItemListContainer />} />
        <Route path='/category/:idCategory' element={<ItemListContainer />} />
        <Route path='/item/:idItem'         element={<ItemDetailContainer />} />
        <Route path='*'                     element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;