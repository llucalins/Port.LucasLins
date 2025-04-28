import './App.css';
import TrueFocus from './components/TrueFocus';
import Sobre from './components/Sobre';
import Projetos from './components/Projetos';
import Habilidades from './components/Habilidades';
import Contato from './components/Contato';
import Aurora from './components/Aurora';

function App() {
  return (
    <div className="App">
      <Aurora
        colorStops={["#3A29FF", "#FF94B4", "#FF3232"]}
        blend={0.5}
        amplitude={1.0}
        speed={0.5}
      />
            <section id="home">
        <TrueFocus 
          sentence="Lucas Lins"
          manualMode={false}
          blurAmount={5}
          borderColor="red"
          animationDuration={2}
          pauseBetweenAnimations={1}
        />
      </section>
      <Sobre />
      <Projetos />
      <Habilidades />
      <Contato />
    </div>
  );
}

export default App;
