import { converterParaMinutosESegundos } from '../../../shared/utils/time'
import styles from './Ticker.module.scss'

interface TickerProps {
    tempo: number | undefined
}

export default function Ticker({ tempo = 0 }: TickerProps) {

  const [
    minutosDezena1, 
    minutosDezena2, 
    segundosDezena1, 
    segundosDezena2
  ] = converterParaMinutosESegundos(tempo);

  return (
    <>
        <span className={styles.relogioNumero}>{minutosDezena1}</span>
        <span className={styles.relogioNumero}>{minutosDezena2}</span>
        <span className={styles.relogioDivisao}>:</span>
        <span className={styles.relogioNumero}>{segundosDezena1}</span>
        <span className={styles.relogioNumero}>{segundosDezena2}</span>
    </>
  )
}
