import style from './newItens.module.css';
import {PlusCircle} from '@phosphor-icons/react';

import { useState } from 'react';


export function NewItens({newTaks}){

      const [newTak, setNewTak] = useState('');

      function handleinputChange(event){
        event.target.setCustomValidity(''); //Limpa a mensagem de erro, permitindo ser válido na digitação
        setNewTak(event.target.value);

      }


      function handleSubmit(event){
        if(newTak.trim().length === 0){ //trim -> ignora espaço
            handleInvalid();
            return;
        } 

        event.preventDefault(); 

        const newTaksData = {
            id: crypto.randomUUID(), //Gerando id Aleatoriamente;
            description: newTak
        };

        newTaks(newTaksData);
        setNewTak('');
        
      }

      function handleInvalid(){
        alert('A tarefa está vazio'); 
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
                        onInvalid={handleInvalid}
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