import styles from './List.module.scss';
import { ITarefa } from '../../shared/models/ITarefa';

interface ListProps {
    tarefas: ITarefa[];
    itemClicked: (tarefa: ITarefa) => void;
}

export default function List({ tarefas, itemClicked }: ListProps) {

    return (
        <aside className={styles.listaTarefas}>
            <h2>Estudos do dia</h2>
            <ul>
                {
                    tarefas.map(tarefa => (
                        <li 
                            key={tarefa.id}
                            className={`
                                ${styles.item} 
                                ${tarefa.selected ? styles.itemSelecionado: ''}
                                ${tarefa.completed ? styles.itemCompletado: ''}
                            `}
                            onClick={() => !tarefa.completed && itemClicked(tarefa)}
                        >
                            <h3>{tarefa.name}</h3>
                            <span>{tarefa.time}</span>
                            {
                                tarefa.completed 
                                    && <span 
                                            className={styles.concluido} 
                                            aria-label="tarefa completada"
                                        ></span>
                            }
                        </li>
                    ))
                }
            </ul>
        </aside>
    )
}
