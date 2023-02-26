import { useEffect, useState } from 'react'
import { ITarefa } from '../../shared/models/ITarefa'
import { converterParaSegundos } from '../../shared/utils/time'
import Button from '../Button'
import Ticker from './Ticker'
import styles from './Timer.module.scss'

interface TimerProps {
    selecionado: ITarefa | undefined;
    completeTarefa: () => void
}

export default function Timer({ selecionado, completeTarefa }: TimerProps) {

    const [tempo, setTempo] = useState<number>();

    useEffect(() => {
        if(selecionado?.time) {
            setTempo(converterParaSegundos(selecionado.time))
        }
    }, [selecionado])

    function regressive(counter: number = 0){
        setTimeout(() => {
            if(counter > 0){
                setTempo(counter - 1)
                return regressive(counter - 1)
            }

            return completeTarefa()
        }, 1000);

    }

    return (
        <section className={styles.cronometro}>
            <p className={styles.titulo}>Escolha um card e inicie o cronômetro</p>
            <div className={styles.relogioWrapper}>
                <Ticker tempo={tempo} />
            </div>
            <Button clickEmmiter={() => regressive(tempo)}>Começar</Button>
        </section>
    )
}
