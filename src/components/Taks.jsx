//CSS Module
import style from './Taks.module.css';

//Icone
import {Notepad, Trash } from '@phosphor-icons/react'; 

export function Taks({taks, handleDeleteTask}){

    const isTaks = taks.length === 0;

    function handleDelete(taskId){
        handleDeleteTask(taskId);
    }

    return(
        <>
        
            <header className={style.title}>
                <p className={style.titleCreate}>Tarefas Criadas <span>0</span></p>
                <p className={style.titleCompleted}>Concluídas <span>0</span></p>
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
                       <div className={style.tak} key={itens.id}>
                            <input type="checkbox"/>
                            <p>{itens.description}</p>
                            <Trash className={style.iconDelete} size={30} onClick={() => handleDelete(itens.id)}/>
                        </div>     
                    )
                })}
                </>
               
            )}
        </>
    )
}