import logo from './logo.svg';
import './App.css';
import NavBar from './Components/NavBar';
import { Outlet, ScrollRestoration, } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <NavBar/>
      <Outlet/>
      <ScrollRestoration/> 
      
        
    </div>
  );
}

export default App;
