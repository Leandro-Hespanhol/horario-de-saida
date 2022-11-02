import React, { useEffect, useState } from 'react';
import './Relogios.scss';
import calculo from '../service/calculoDeHoras';

export default function Relogios() {
  const [entradaDia, setEntradaDia] = useState({ horas: 0, minutos: 0 });
  const [entradaAlmoco, setEntradaAlmoco] = useState({ horas: 0, minutos: 0 });
  const [saidaAlmoco, setSaidaAlmoco] = useState({ horas: 0, minutos: 0 });
  const [saidaDia, setSaidaDia] = useState("0");

  const horaMinutoBuild = () => {
    const entDia = `${entradaDia.horas}:${entradaDia.minutos}`
    const entAlm = `${entradaAlmoco.horas}:${entradaAlmoco.minutos}`
    const saidaAlm = `${saidaAlmoco.horas}:${saidaAlmoco.minutos}`

    setSaidaDia(calculo(entDia, entAlm, saidaAlm))
  };

  useEffect(() => {
    horaMinutoBuild()
  }, [entradaDia, entradaAlmoco, saidaAlmoco])
  

  return (
    <div className="main-relogios">
      <div className="horas-minutos">
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
            onChange={(e) =>
              setEntradaDia({ ...entradaDia, minutos: e.target.value })
            }
          />
        </label>
      </div>
      <div className="horas-minutos">
        <label>
        {`Entrada do Almoço: `}
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
            value={entradaAlmoco.minutos}
            onChange={(e) =>
              setEntradaAlmoco({ ...entradaAlmoco, minutos: e.target.value })
            }
          />
        </label>
      </div>
      <div className="horas-minutos">
        <label>
        {`Saída do almoço: `}
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
            value={saidaAlmoco.minutos}
            onChange={(e) =>
              setSaidaAlmoco({ ...saidaAlmoco, minutos: e.target.value })
            }
          />
        </label>
      </div>
      <div className="horas-minutos">{`Você completará 8:48 às ${saidaDia}`}</div>
    </div>
  );
}
