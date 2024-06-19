
import './App.css';

import { BrowserRouter } from 'react-router-dom';

import RouteContent from './routing/Routes';
function App() {
  return <div className = 'container'>
      <BrowserRouter>
      <RouteContent/>
      
      </BrowserRouter>
  </div>
}

export default App;
