import moment from 'moment';

export default function horarioDeSaida(entradaDia, entradaAlm, saidaAlm) {
  
  const ms = moment(entradaAlm,"HH:mm").subtract(entradaDia,"HH:mm").format("HH:mm");
  const rest = moment("08:48","HH:mm").subtract(ms,"HH:mm").format("HH:mm");
  const d = moment(saidaAlm,"HH:mm").add(rest,"HH:mm").format("HH:mm")

  return d;
}
