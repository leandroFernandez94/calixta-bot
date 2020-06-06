import applyHorariosListener from './horarios.js'
import applyMetodosListener from './metodos.js'
import applyServiciosListener from './servicios.js'
import applyUbicacionListener from './ubicacion.js'

const commandListeners = [applyHorariosListener, applyMetodosListener,applyServiciosListener, applyUbicacionListener]

export default function applyCommandListeners(bot) {
  commandListeners.forEach(cmdListener => cmdListener(bot))
}