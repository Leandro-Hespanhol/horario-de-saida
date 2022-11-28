import React, { useEffect, useState } from 'react';
import './Relogios.scss';
import calculo from '../service/calculoDeHoras';

export default function Relogios() {
  const [jornada, setJornada] = useState({ horas: 8, minutos: 48})
  const [entradaDia, setEntradaDia] = useState({ horas: 0, minutos: 0 });
  const [entradaAlmoco, setEntradaAlmoco] = useState({ horas: 0, minutos: 0 });
  const [saidaAlmoco, setSaidaAlmoco] = useState({ horas: 0, minutos: 0 });
  const [saidaDia, setSaidaDia] = useState("0");

  const horaMinutoBuild = () => {
    const jorn = `${jornada.horas}:${jornada.minutos}`
    const entDia = `${entradaDia.horas}:${entradaDia.minutos}`
    const entAlm = `${entradaAlmoco.horas}:${entradaAlmoco.minutos}`
    const saidaAlm = `${saidaAlmoco.horas}:${saidaAlmoco.minutos}`

    setSaidaDia(calculo(jorn, entDia, entAlm, saidaAlm))
  };

  const noNegativeValue = (horaOuMinuto) => {
    // A função recebe o parâmetro horaOuMinuto que representa o valor de horas ou minutos de cada um dos campos
    // Escreva uma solução para que impedir que o valor de horaOuMinuto fique negativo
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
                setJornada({ ...jornada, horas: noNegativeValue(e.target.value) })
              }
            />
            <input
              type="number"
              className="minutos"
              value={jornada.minutos}
              onChange={(e) =>
                setJornada({ ...jornada, minutos: noNegativeValue(e.target.value) })
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
              setEntradaDia({ ...entradaDia, horas: noNegativeValue(e.target.value) })
            }
          />
          <input
            type="number"
            className="minutos"
            value={entradaDia.minutos}
            onChange={(e) =>
              setEntradaDia({ ...entradaDia, minutos: noNegativeValue(e.target.value) })
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
                setEntradaAlmoco({ ...entradaAlmoco, horas: noNegativeValue(e.target.value) })
              }
            />
            <input
              type="number"
              className="minutos"
              value={entradaAlmoco.minutos}
              onChange={(e) =>
                setEntradaAlmoco({ ...entradaAlmoco, minutos: noNegativeValue(e.target.value) })
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
              setSaidaAlmoco({ ...saidaAlmoco, horas: noNegativeValue(e.target.value) })
            }
          />
          <input
            type="number"
            className="minutos"
            value={saidaAlmoco.minutos}
            onChange={(e) =>
              setSaidaAlmoco({ ...saidaAlmoco, minutos: noNegativeValue(e.target.value) })
            }
          />
        </label>
      <label className="horas-minutos">{`Você completará ${jornada.horas} horas e ${jornada.minutos} minutos às ${saidaDia}`}</label>
    </div>
  );
}
