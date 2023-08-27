import Inicio from "./Componentes/Inicio/Inicio";
import Nav from "./Componentes/Nav/Nav";
import Servicos from "./Componentes/Servicos";
import Sobre from "./Componentes/Sobre";
function App() {
  return (
    <main className="portifolio">
     <Nav/>
     <Inicio/>
     <Sobre/>
     <Servicos/>
    </main>
  );
}

export default App;
