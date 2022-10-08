const color = require('colors')
const Tarea = require('./tarea')

class Tareas {
  _listado = {}

  constructor() {
    this._listado = {}
  }

  get getListadoArr() {
    const listado = []
    Object.keys(this._listado).forEach((key) => {
      const tarea = this._listado[key]
      listado.push(tarea)
    })
    return listado
  }

  crearTarea(desc = '') {
    const tarea = new Tarea(desc)
    this._listado[tarea.id] = tarea
  }

  cargarTareasFromArr(tareas = []) {
    tareas.map((tarea) => {
      this._listado[tarea.id] = tarea
    })
  }

  listadoCompleto() {
    this.getListadoArr.forEach((tarea, i) => {
      const idx = `${i + 1}.`.cyan
      const { desc, completadoEn } = tarea
      const estado = completadoEn ? 'Completada'.cyan : 'Pendiente'.red

      console.log(`${idx} ${desc} :: ${estado}}`)
    })
  }

  listarPendientesCompletadas(completadas = true) {
    let contador = 0
    this.getListadoArr.forEach((tarea, i) => {
      const { desc, completadoEn } = tarea
      const estado = completadoEn ? 'Completada'.cyan : 'Pendiente'.red

      if (completadas && estado === 'Completada'.cyan) {
        contador++
        console.log(`${(contador + '.').cyan} ${desc} :: ${completadoEn}`)
      }

      if (!completadas && estado === 'Pendiente'.red) {
        contador++
        console.log(`${(contador + '.').red} ${desc} :: ${estado}`)
      }
    })
  }
  borrarTarea(id = '') {
    if (this._listado[id]) {
      delete this._listado[id]
    }
  }
}

module.exports = Tareas
