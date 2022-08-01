import React, { useState } from 'react';
import Form from '../Components/Form';
import List from '../Components/List';
import style from './App.module.scss';
import Cronometro from '../Components/Cronometro';
import {Itarefa} from '../types/tarefa';

export default function App () {
  const [tarefas, setTarefas] = useState<Itarefa[] | []>([]);
  const [selected, setSelected] = useState<Itarefa | undefined>();

  function selecionaTarefa(tarefaSelecionada: Itarefa) {
    setSelected(tarefaSelecionada);
    setTarefas(tarefasAnteriores => tarefasAnteriores.map(tarefa => ({
      ...tarefa,
      selecionado: tarefa.id === tarefaSelecionada.id ? true : false
    })))
  }
  
  function finalizarTarefa(){
    if(selected){
      setSelected(undefined);
      setTarefas(tarefasAnteriores => tarefasAnteriores.map(tarefa => {
        if(tarefa.id === selected.id) {
          return {
            ...tarefa,
            selecionado: false,
            completado: true
          }
        }
        return tarefa;
      }));
    }
  }

  return (
    <div className={style.AppStyle}>
      <Form setTarefas={setTarefas}/>
      <List 
      tarefa={tarefas}
      selecionaTarefa={selecionaTarefa} 
      />
      <Cronometro  
      selected={selected}
      finalizarTarefa={finalizarTarefa}
      />
    </div>
  );
};

