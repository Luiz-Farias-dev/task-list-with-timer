import { useState, useEffect } from 'react';
import Button from '../Button';
import Clock from './Clock';
import style from './Cronometro.module.scss';
import { tempoParaSegundos } from '../../common/utils/date';
import { Itarefa } from '../../types/tarefa';

type Props = {
  selected: Itarefa | undefined;
  finalizarTarefa: () => void;
}


export default function Cronometro({selected, finalizarTarefa}: Props) {
  const [tempo, setTempo] = useState<number>();

  useEffect(() => {
    if(selected?.tempo){
      setTempo(tempoParaSegundos(selected.tempo))
    }
  },[selected]);

  function regressiva(contador: number = 0){
    setTimeout(() => {
      if(contador > 0){
        setTempo(contador - 1)
        return regressiva(contador -1);
      }
      finalizarTarefa();
    }, 1000);
  };

  return(
    <div className={style.cronometro}>
      <p className={style.titulo}>Escolhe um card e inicie</p>
      <div className={style.relogioWrapper}>
        <Clock tempo={tempo}/>
      </div>
      <Button 
        onClick={()=> regressiva(tempo)}
        texto='Começar'
      />
    </div>
  );
}