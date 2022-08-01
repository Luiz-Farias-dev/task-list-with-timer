
import React, { useState, Dispatch, SetStateAction } from 'react';
import Botão from '../Button';
import style from './Form.module.scss';
import { Itarefa } from '../../types/tarefa';
import { v4 as uuidv4 } from 'uuid';
type Props = {
  setTarefas:Dispatch<SetStateAction<Itarefa[] | []>> 
}

const Form = (props : Props) => {
  const {setTarefas} = props
  const [time, setTime] = useState<string>("00:00:00")
  const [task, setTask] = useState<string>("")
  function addTask(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setTarefas((tarefasAntigas: Itarefa[]) => [
      ...tarefasAntigas, 
      {tarefa: task, 
        tempo: time, 
        selecionado: false, 
        completado: false, 
        id: uuidv4()
      }] )
    setTime("00:00:00");
    setTask("");
  };

  return (
    <form className={style.novaTarefa} onSubmit={addTask}>
      <div className={style.inputContainer}>
        <label htmlFor='tarefa'>
          Adicione uma tarefa.
        </label>
        <input 
        type="text"
        name="tarefa"
        id='tarefa'
        placeholder='O que você quer estudar ?'
        onChange={e => setTask(e.target.value)}
        required
        />
      </div>
      
      <div className={style.inputContainer}>
        <label htmlFor='tempo'>
          Tempo
        </label>
        <input
        type="text"
        name="tempo"
        step="1"
        value={time}
        onChange={e=>setTime(e.target.value)}
        id='tempo'
        min="00:00:00"
        max="01:30:00"
        required
        />
      </div>
      <Botão
        type="submit"
        texto="Adicionar"
      />
    </form>
  )
};

export default Form;