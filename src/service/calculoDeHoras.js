import moment from 'moment';

export default function horarioDeSaida(jornada = "8:48", entradaDia, entradaAlm, saidaAlm) {
  
  const ms = moment(entradaAlm,"HH:mm").subtract(entradaDia,"HH:mm").format("HH:mm");
  const rest = moment(jornada,"HH:mm").subtract(ms,"HH:mm").format("HH:mm");
  const d = moment(saidaAlm,"HH:mm").add(rest,"HH:mm").format("HH:mm")

  return d;
}
