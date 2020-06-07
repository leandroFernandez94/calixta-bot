import esculpidasCallbackListener from './esculpidas.js'
import semipermanenteCallbackListener from './semipermanente.js'
import clasicoCallbackListener from './clasico.js'
import perfiladoCallbackListener from './perfilado.js'
import retiroCallbackListener from './retiro.js'

const callbacks = [
  esculpidasCallbackListener,
  semipermanenteCallbackListener,
  clasicoCallbackListener,
  perfiladoCallbackListener,
  retiroCallbackListener
]

export default function applyCallbackOptionsListeners(bot) {
  callbacks.forEach(c => c(bot))
}