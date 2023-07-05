import './App.scss';
import { ActionsSection } from './views/actionsSection/ActionsSection';
import { TopBar } from './views/topBar/TopBar';

function App() {

  return (
    <main className='main__container'>
      <TopBar />
      <section className='content'>
        <ActionsSection />
        <article className='content__words'>
          <div className='content__words'>Words List</div>
          <div className='content__words--container'>
            <div className='content__words--item'>word 1</div>
            <div className='content__words--item'>word 2</div>
            <div className='content__words--item'>word 3</div>
          </div>
        </article>
      </section>
    </main>
  )
}

export default App
