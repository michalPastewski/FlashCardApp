import { Route, Routes } from 'react-router-dom';
import { LearnSection } from './views/LearnSection';
import { LoginSection } from './views/loginSection/LoginSection';
import { MainView } from './views/MainView';
import { TopBar } from './views/topBar/TopBar';
import { UserSection } from './views/UserSection';

import './App.scss';

function App() {
  return (
    <main className="main__container">
      <TopBar />
      <Routes>
        <Route path="/">
          <Route index element={<MainView loginState={true} />} />
          <Route path="signin" element={<LoginSection />} />
          <Route path="signup" element={<LoginSection loginState={false} />} />
          <Route path="user" element={<UserSection />} />
        </Route>
        <Route path="/learn" element={<LearnSection />} />
      </Routes>
      <footer className="footer">Footer</footer>
    </main>
  );
}

export default App;
