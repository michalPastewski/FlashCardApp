import { Route, Routes } from 'react-router-dom';
import { LoginSection } from './views/loginSection/LoginSection';
import { TopBar } from './views/topBar/TopBar';
import { LearnSection } from './views/userSections/LearnSection';
import { MainView } from './views/userSections/MainView';
import { UserSection } from './views/userSections/UserSection';

import './App.scss';

function App() {
  return (
    <main className="main__container">
      <TopBar />
      <Routes>
        <Route path="/">
          <Route index element={<MainView />} />
          <Route path="login" element={<LoginSection />} />
          <Route path="user" element={<UserSection />} />
        </Route>
        <Route path="/learn" element={<LearnSection />} />
      </Routes>
      <footer className="footer">Footer</footer>
    </main>
  );
}

export default App;
