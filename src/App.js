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
        <Route path='/'                         element={<ItemListContainer /> } />
        <Route path='/categories/:categoryName' element={<ItemListContainer /> } />
        <Route path='/item/:itemId'             element={<ItemDetailContainer /> } />
        <Route path='*'                         element={<NotFound error='Página no encontrada' />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;