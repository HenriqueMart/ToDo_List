//Elementos do React
import { useState } from 'react'

//Components
import {Header} from '../src/components/header.jsx'
import { NewItens } from './components/newItens.jsx'
import {Taks} from './components/Taks.jsx'



//CSS Global e Module
import './global.css';
import style from './app.module.css';


function App() {

  const [tasks, setTasks] = useState([
    {
      id: 1,
      description: 'Realizar a Planejamento de Estudo da faculdade, na materia de empreendedorismo e prova da matéria de engenharia de sofware e concluir atividade de padrões de projeto'
    }
  ]);
  
  const allTasks = tasks.length;
  const allCompleted = 0;

  

  function handleAddTask(taksObject){

      setTasks(prev  => [...tasks, taksObject]);
      
  }

  function handleDeleteTask(taskId){
    const seachTaksDelete = tasks.filter(tasks => {
      return tasks.id !== taskId;
    })

    setTasks(seachTaksDelete);
    
  }


  return (
    <>
      <div className={style.body}>
          <Header />
        <section className={style.newItens}>
          <NewItens newTaks={handleAddTask}/>
        </section>
        <main>
          <div className={style.box}>
            <div className={style.content}>
                <Taks taks={tasks} handleDeleteTask={handleDeleteTask} allTasks={allTasks}/>
            </div>
          </div>
        </main>
      </div>
    </>
  )
}

export default App
