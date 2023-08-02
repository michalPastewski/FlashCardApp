import { Route, Routes } from 'react-router-dom';
import './App.scss';
import { LearnSection } from './views/actionsSection/LearnSection';
import { Home } from './views/home/Home';
import { TopBar } from './views/topBar/TopBar';
import { WordSection } from './views/wordSection/WordSection';

function App() {
  return (
    <main className="main__container">
      <TopBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/learn" element={<LearnSection />} />
      </Routes>
      <footer className="footer">Footer</footer>
    </main>
  );
}

export default App;
