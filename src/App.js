import './App.scss';

import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import { Outlet } from 'react-router-dom';

function App() {
  return (
    <>
      <div className='header'><Header /></div>
      <div className='outlet'><Outlet /></div>
      <div className='footer'><Footer /></div>
    </>
  )
}

export default App;