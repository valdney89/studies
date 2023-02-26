import { useState } from 'react'
import Form from '../../components/Form'
import List from '../../components/List'
import styles from './Home.module.scss'
import { v4 as uuidv4 } from 'uuid';
import { ITarefa } from '../../shared/models/ITarefa';
import Timer from '../../components/Timer';

export default function Home() {

    const [tarefas, setTarefas] = useState<ITarefa[]>([]);
    const [selecionado, setSelecionado] = useState<ITarefa>();

    function addTarefa(newTarefa: ITarefa) {
        setTarefas(tarefas => [...tarefas, {...newTarefa, id: uuidv4()}])
    }

    function itemSelected(tarefaSelecionada: ITarefa){
        setSelecionado(tarefaSelecionada)

        setTarefas(tarefasAnteriores => tarefasAnteriores.map(tarefa => {
            return {...tarefa, selected: tarefa.id === tarefaSelecionada.id ? true : false}
        }))
    }

    function removeTarefa(){
        if(selecionado) {
            setTarefas(tarefasAnteriores =>
            tarefasAnteriores.map(tarefa => {
                if(tarefa.id === selecionado.id) {
                    return {
                        ...tarefa,
                        selected: false,
                        completed: true
                    }
                }
                console.log(tarefa)
                return tarefa;
            }))
        }
    }

    return (
        <div className={styles.HomeStyle}>
            <Form formSubmitted={addTarefa} />
            <List 
                tarefas={tarefas} 
                itemClicked={itemSelected}
            />
            <Timer 
                selecionado={selecionado} 
                completeTarefa={removeTarefa}
            />
        </div>
    )
}
