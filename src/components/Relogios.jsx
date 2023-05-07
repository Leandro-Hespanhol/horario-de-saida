import React, { useEffect, useState } from 'react';
import './Relogios.scss';
import calculo from '../service/calculoDeHoras';

export default function Relogios() {
  const [jornada, setJornada] = useState({ horas: 8, minutos: 48})
  const [entradaDia, setEntradaDia] = useState({ horas: 8, minutos: 40 });
  const [entradaAlmoco, setEntradaAlmoco] = useState({ horas: 12, minutos: 0 });
  const [saidaAlmoco, setSaidaAlmoco] = useState({ horas: 13, minutos: 0 });
  const [saidaDia, setSaidaDia] = useState("0");

  const horaMinutoBuild = () => {
    const jorn = `${jornada.horas}:${jornada.minutos}`
    const entDia = `${entradaDia.horas}:${entradaDia.minutos}`
    const entAlm = `${entradaAlmoco.horas}:${entradaAlmoco.minutos}`
    const saidaAlm = `${saidaAlmoco.horas}:${saidaAlmoco.minutos}`

    setSaidaDia(calculo(jorn, entDia, entAlm, saidaAlm))
  };

  const validateTime = (value, state, setState) => {
    console.log("jornada", jornada);
    if (state.horas > 23) {
      console.log("dentro", jornada)
      return setState({...state, horas: 23 })
    }
    if (state.horas < 0) {
      return setState({...state, horas: 0 })
    }
    if (state.minutos > 59) {
      return setState({...state, minutos: 59 })
    }
    if (state.minutos < 0) {
      return setState({...state, minutos: 0 })
    }
    setState({ ...value})
  }

  useEffect(() => {
    horaMinutoBuild()
  }, [jornada, entradaDia, entradaAlmoco, saidaAlmoco])
  

  return (
    <div className="main-relogios">
      <label><p>Hora | Minuto</p></label>
        <label>{`Defina sua jornada diária: `}
            <input
              type="number"
              className="horas"
              value={jornada.horas}
              placeholder={jornada.horas + 'horas'}
              min="0"
              max="23"
              onChange={(e) =>
                validateTime(e.target.value, jornada, setJornada)
              }
            />
            <input
              type="number"
              className="minutos"
              value={jornada.minutos}
              min="0"
              max="59"
              onChange={(e) =>
                setJornada({ ...jornada, minutos: e.target.value })
              }
            />
        </label>
        <label>
          {`Entrada do dia: `}
          <input
            type="number"
            className="horas"
            value={entradaDia.horas}
            min="0"
            max="23"
            onChange={(e) =>
              setEntradaDia({ ...entradaDia, horas: e.target.value })
            }
          />
          <input
            type="number"
            className="minutos"
            value={entradaDia.minutos}
            min="0"
            max="59"
            onChange={(e) =>
              setEntradaDia({ ...entradaDia, minutos: e.target.value })
            }
          />
        </label>
        <label>
          {`Início do intervalo do Almoço: `}
            <input
              type="number"
              className="horas"
              value={entradaAlmoco.horas}
              min="0"
              max="23"
              onChange={(e) =>
                setEntradaAlmoco({ ...entradaAlmoco, horas: e.target.value })
              }
            />
            <input
              type="number"
              className="minutos"
              min="0"
              max="59"
              value={entradaAlmoco.minutos}
              onChange={(e) =>
                setEntradaAlmoco({ ...entradaAlmoco, minutos: e.target.value })
              }
            />
        </label>
        <label>
        {`Final do intervalo do almoço: `}
          <input
            type="number"
            className="horas"
            value={saidaAlmoco.horas}
            min="0"
            max="23"
            onChange={(e) =>
              setSaidaAlmoco({ ...saidaAlmoco, horas: e.target.value })
            }
          />
          <input
            type="number"
            className="minutos"
            min="0"
            max="59"
            value={saidaAlmoco.minutos}
            onChange={(e) =>
              setSaidaAlmoco({ ...saidaAlmoco, minutos: e.target.value })
            }
          />
        </label>
      <label className="horas-minutos">{`Você completará ${jornada.horas} horas e ${jornada.minutos} minutos às ${saidaDia}`}</label>
    </div>
  );
}
