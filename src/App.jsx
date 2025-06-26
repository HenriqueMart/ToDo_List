//Elementos do React
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

//Components
import {Header} from '../src/components/header.jsx'
import { NewItens } from './components/newItens.jsx'
import {Taks} from './components/Taks.jsx'



//CSS Global e Module
import './global.css';
import style from './app.module.css';


function App() {

  const lists = [
    {
      id: 1,
      descrition: 'Realizar a Planejamento de Estudo da faculdade, na materia de empreendedorismo e prova da matéria de engenharia de sofware e concluir atividade de padrões de projeto'
    },
    {
      id: 2,
      descrition: 'Arrumar Casa'
    },
    {
      id: 3,
      descrition: 'Postar sobre esse projeto no LinkedIn'
    }
    
  ]


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
                <Taks lists={lists}/>
            </div>
          </div>
        </main>
      </div>
    </>
  )
}

export default App
