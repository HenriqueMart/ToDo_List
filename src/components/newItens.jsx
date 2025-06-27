import style from './newItens.module.css';
import {PlusCircle} from '@phosphor-icons/react';

import { useState } from 'react';


export function NewItens({newTaks}){

      const [newTak, setNewTak] = useState('');

      function handleinputChange(event){
        event.target.setCustomValidity('');
        setNewTak(event.target.value);

      }

      
      function handleSubmit(event){
        event.preventDefault();

        const newTaksData = {
            id: crypto.randomUUID(),
            description: newTak
        };

        newTaks(newTaksData);
        setNewTak('');
      }

    return(
        <>
            <div className={style.box}>
                <div className={style.content}>
                    <input 
                        value={newTak}
                        onChange={handleinputChange} 
                        type="text" 
                        placeholder='Adicione uma nova Tarefa'
                        required 
                    />
                    <button type="submit" onClick={handleSubmit}>
                        Criar 
                        <PlusCircle size={20}/>
                    </button>
                </div>
            </div>
        </>

    )
}