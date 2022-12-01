import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/HomePage';
import CocktailList from './pages/CocktailListPage';
import CocktailDetail from './pages/CocktailDetailPage';
import NavBarComponent from './components/Navbar/Navbar';
import CocktailCreate from './pages/CocktailCreatePage';
import CocktailUpdate from './pages/CocktailUpdatePage';

function App() {
  return (
    <div>
      <NavBarComponent />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/galery' element={<CocktailList />} />
        <Route path='/create' element={<CocktailCreate />} />
        <Route path='/cocktail/:id' element={<CocktailDetail />} />
        <Route path='/cocktail/edit/:id' element={<CocktailUpdate />} />
      </Routes>
    </div>
  );
}

export default App;
