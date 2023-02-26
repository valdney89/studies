import React, { useState } from 'react';
import { ITarefa } from '../../shared/models/ITarefa';
import Button from '../Button';
import styles from './Form.module.scss';

interface FormProps {
    formSubmitted: (tarefa: ITarefa) => void;
}

export default function Form({ formSubmitted }: FormProps) {

    const [tarefa, setTarefa] = useState<string>("")
    const [tempo, setTempo] = useState<string>("00:00")

    function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault();
        formSubmitted({
            time: tempo, 
            name: tarefa,
            selected: false,
            completed: false
        });

        setTarefa("");
        setTempo("00:00");
    }

    return (
        <form 
            onSubmit={event => handleSubmit(event)} 
            className={styles.novaTarefa}
        >
        <div className={styles.inputContainer}>
            <label htmlFor="tarefa">Tarefa</label>
            <input
            id="tarefa"
            value={tarefa}
            onChange={event => setTarefa(event.target.value)}
            type="text"
            name="tarefa"
            placeholder="O que você quer estudar"
            required
            />
        </div>
        <div className={styles.inputContainer}>
            <label htmlFor="tempo">Tempo</label>
            <input
            id="tempo"
            step="1"
            value={tempo}
            onChange={event => setTempo(event.target.value)}
            type="time"
            name="tempo"
            min="00:00:00"
            max="01:30:00"
            required
            />
        </div>
        <Button type="submit">Adicionar</Button>
        </form>
    );
}
