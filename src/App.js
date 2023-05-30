import './App.css';

import PagHome from './componentes/paginas/PagHome';
import PagProjetos from './componentes/paginas/PagProjetos';
import {Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Routes>
          <Route exact path="/" element={<PagHome/>}></Route>
          <Route path="/projetos" element={<PagProjetos/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
