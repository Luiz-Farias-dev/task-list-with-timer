
import style from './List.module.scss';
import Item from './Item';
import { Itarefa } from '../../types/tarefa';

type Props = {
  tarefa: Itarefa[],
  selecionaTarefa: (tarefaSelecionada: Itarefa) => void;

}

function List({ tarefa, selecionaTarefa } : Props) {
  
  return(
    <aside className={style.listaTarefas}>
      <h2>Estudos do dia</h2>
      <ul>
        {tarefa.map((tarefa)=>(
          <Item
            selecionaTarefa={selecionaTarefa}
            key={tarefa.id}
            {...tarefa}
          />
        ))}
      </ul>
    </aside>
  );
};

export default List;