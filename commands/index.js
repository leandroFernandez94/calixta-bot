import applyHorariosListener from './horarios.js'
import applyMetodosListener from './metodos.js'
import applyServiciosListener from './servicios.js'
import applyUbicacionListener from './ubicacion.js'
import applyTurnosListener from './turnos.js'
import applyStartListener from './start.js'

const commandListeners = [
  applyStartListener,
  applyHorariosListener,
  applyMetodosListener,
  applyServiciosListener,
  applyUbicacionListener,
  applyTurnosListener
]

export default function applyCommandListeners(bot) {
  commandListeners.forEach(cmdListener => cmdListener(bot))
}