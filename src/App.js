import { useContext } from 'react';
import { Route, Routes } from 'react-router-dom';

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import Home from './pages/HomePage';
import CocktailList from './pages/CocktailListPage';
import CocktailDetail from './pages/CocktailDetailPage';
import NavBarComponent from './components/Navbar/Navbar';
import CocktailCreate from './pages/CocktailCreatePage';
import CocktailUpdate from './pages/CocktailUpdatePage';
import Registro from './pages/RegistroPage';
import Login from './pages/LoginPage';
import UserPage from './pages/UserPage';

import { AuthContext } from './context/auth.context';
import IsPrivate from './components/Routes/IsPrivate';

function App() {
  const { user } = useContext(AuthContext);

  console.log(user);

  return (
    <div>
      <NavBarComponent />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route
          path='/me'
          element={
            <IsPrivate>
              <UserPage />
            </IsPrivate>
          }
        />
        <Route path='/registro' element={<Registro />} />
        <Route path='/login' element={<Login />} />
        <Route path='/galery' element={<CocktailList />} />
        <Route path='/create' element={<CocktailCreate />} />
        <Route path='/cocktail/:id' element={<CocktailDetail />} />
        <Route path='/cocktail/edit/:id' element={<CocktailUpdate />} />
      </Routes>
    </div>
  );
}

export default App;
