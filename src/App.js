import './App.css';
import { Routes, Route } from 'react-router-dom';
import PagHome from './componentes/paginas/PagHome';
import PagProjetos from './componentes/paginas/PagProjetos';

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
