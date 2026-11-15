// @silkui/foldkit comes first: it provides the `document` Foldkit renders through.
import '@silkui/foldkit'
import { Runtime } from 'foldkit'

import { Model, init, update, view } from './main'

const application = Runtime.makeApplication({
  Model,
  init,
  update,
  view,
  container: document.getElementById('root'),
})

Runtime.run(application)

