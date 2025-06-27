//CSS Module
import { useState } from 'react';
import style from './Taks.module.css';

//Icone
import {Notepad, Trash } from '@phosphor-icons/react'; 

export function Taks({taks, handleDeleteTask, allTasks}){

    const [tasksCompleted, setTasksCompleted] = useState([]);
    const isTaks = taks.length === 0;
    

    function handleDelete(taskId){
        handleDeleteTask(taskId);
        
        //Caso eu excluia um itens que foi concluido e precisse atualizar seu valor
        if(tasksCompleted.includes(taskId));
            handleCheck(taskId);
        }

    function handleCheck(taskIdCompleted){
       const isAlreadyCompleted = tasksCompleted.includes(taskIdCompleted);

        if(isAlreadyCompleted){
            const update = tasksCompleted.filter(id => id !== taskIdCompleted);
            setTasksCompleted(update);
        }else{
            setTasksCompleted(prev => [...prev, taskIdCompleted]);
        }
    }

    return(
        <>
            <header className={style.title}>
                <p className={style.titleCreate}>Tarefas Criadas <span>{allTasks}</span></p>
                <p className={style.titleCompleted}>Concluídas <span>{tasksCompleted.length}</span></p>
            </header>


            {isTaks ? (
                <section className={style.taks}>
                <Notepad className={style.icone} size={60}/>
                <p className={style.titleEmpty}>Você ainda não tem tarefas cadastradas</p>
                <p className={style.titleHelp}>Crie tarefas e organize seus itens a fazer</p>
            </section>
            ):(
                <>
                {taks.map(itens => {
                       return( 
                       <div 
                        className={style.tak} 
                        key={itens.id}
                        >
                            <input 
                                type="checkbox" 
                                onChange={() => handleCheck(itens.id)}/>
                            <p>{itens.description}</p>
                            <Trash 
                                className={style.iconDelete} 
                                size={30} 
                                onClick={() => handleDelete(itens.id)}/>
                        </div>     
                    )
                })}
                </>
            )}
        </>
    )
}