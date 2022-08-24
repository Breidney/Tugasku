import Home from './Home/home';
import './App.css';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <>
      <ul>
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/profile'>Profile</Link></li>
        <li><Link to='/Gallery'>Gallery</Link></li>
        <li><Link to='/Music'>Music</Link></li>
        <li><Link to='/Film'>Film Favorite</Link></li>
      </ul>
      <Routes>
        <Route path='/' elements={<Home />} />
        <Route path='/Profile' element={<Profile />} />
        <Route path='/Gallery' element={<Gallery />} />
        <Route path='/Music' element={<Music />} />
        <Route path='/Film' element={<Film />} />
      </Routes>
    </>
  );
}

export default App;
