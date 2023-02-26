export function converterParaSegundos(tempo: string): number {
    const [horas = '0', minutos = '0', segundos = '0'] = tempo.split(":");

    const horasEmSegundos = Number(horas) * 3600;
    const minutosEmSegundos = Number(minutos) * 60;
    return horasEmSegundos + minutosEmSegundos + Number(segundos);
}

export function converterParaMinutosESegundos(segundos: number): string[] {
    const minutos = Math.floor(segundos / 60);
    const segundosRestantes = segundos % 60;
    const minutosDezena1 = String(Math.floor(minutos / 10));
    const minutosDezena2 = String(minutos % 10);
    const segundosDezena1 = String(Math.floor(segundosRestantes / 10));
    const segundosDezena2 = String(segundosRestantes % 10);
    return [minutosDezena1, minutosDezena2, segundosDezena1, segundosDezena2];
  }