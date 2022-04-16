import logo from './logo.svg';
import './App.css';
import Header from './pages/Header/Header';
import 'bootstrap/dist/css/bootstrap.min.css';
import Headerbody from './pages/Headerbody/Headerbody';
import { Route, Routes } from 'react-router-dom';
import Breakfast from './Breakfast';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Headerbody></Headerbody>
      <Routes>
        <Route path='/breakfast' element={<Breakfast></Breakfast>}></Route>
        <Route></Route>
        <Route></Route>
      </Routes>
    </div>
  );
}

export default App;
