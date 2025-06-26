import style from './newItens.module.css';
import {PlusCircle} from '@phosphor-icons/react';

export function NewItens(){
    return(
        <>
            <div className={style.box}>
                <div className={style.content}>
                    <input type="text" placeholder='Adicione uma nova Tarefa'/>
                    <button>Criar <PlusCircle size={20}/></button>
                </div>
            </div>
        </>

    )
}