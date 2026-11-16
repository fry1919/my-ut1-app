import { useState } from 'react'

// Botón sencillo que cuenta cuántas veces se ha pulsado
function BotonContador() {
  const [clics, setClics] = useState(0)

  return (
    <div>
      <button onClick={() => setClics(clics + 1)}>
        Has pulsado {clics} {clics === 1 ? 'vez' : 'veces'}
      </button>
      <button onClick={() => setClics(0)}>Reiniciar</button>
    </div>
  )
}

export default BotonContador
