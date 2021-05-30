import './App.css';
import Intro from "./components/Intro";
import Projects from './components/Projects/Projects';

const App = () => {
  return (
    <div className="app">
      <Intro />
      <Projects />
    </div>
  );
}

export default App;
