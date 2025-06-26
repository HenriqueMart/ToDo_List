import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

import {Header} from '../src/components/header.jsx'
import { NewItens } from './components/newItens.jsx'

import {Notepad} from '@phosphor-icons/react'; 

import './global.css';
import style from './app.module.css';

function App() {

  return (
    <>
      <div className={style.body}>
          <Header />
        <section className={style.newItens}>
          <NewItens/>
        </section>
        <main>
          <div className={style.box}>
            <div className={style.content}>
                <header>
                  <p className={style.titleCreate}>Tarefas Criadas <span>0</span></p>
                  <p className={style.titleCompleted}>Concluídas <span>0</span></p>
                </header>
                <section>
                  <Notepad className={style.icone} size={60}/>
                  <p className={style.titleEmpty}>Você ainda não tem tarefas cadastradas</p>
                  <p className={style.titleHelp}>Crie tarefas e organize seus itens a fazer</p>
                </section>
            </div>
          </div>
        </main>
      </div>
    </>
  )
}

export default App
