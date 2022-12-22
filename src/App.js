import './App.scss';

import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import { Outlet } from 'react-router-dom';

function App() {
  return (
    <div>
      <Header />
    </div>
  )
}

export default App;