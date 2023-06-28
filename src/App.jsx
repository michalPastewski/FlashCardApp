import './App.css';
import {TopBar} from './components/topBar/TopBar'

function App() {

  return (
    <main className='main__container'>
      <TopBar />
      {/* <section className='top__bar'>
        <div className='top__bar--logo'>FiszkaApp</div>
        <div className='top__bar--search'>Search</div>
      </section> */}
      <section className='content'>
        <article className='content__menu'>
          <div>add new word</div>
          <div>learn</div>
        </article>
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
