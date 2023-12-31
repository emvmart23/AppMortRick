import './App.css';
import { BrowserRouter, useRoutes } from 'react-router-dom';
import NavBar from '../../components/NavBar';
import CharacterPersonProvider from '../../Counter/context';
import Home from '../Home';
import Favorite from '../Favorite';
import InfoPerson from '../InfoPerson';

const AppRoutes = () => {
  let routes = useRoutes([
    { path: '/', element: <Home /> },
    { path: '/favorite', element: <Favorite /> },
    { path: '/info', element: <InfoPerson /> },
  ]);
  return routes;
};

const App = () => {
  return (
    <CharacterPersonProvider>
      <BrowserRouter>
        <NavBar />
        <AppRoutes />
      </BrowserRouter>
    </CharacterPersonProvider>
  );
};

export default App;
