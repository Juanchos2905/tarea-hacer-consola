const inquirer = require('inquirer')
const colors = require('colors')

const inquirerMenu = async () => {
  console.clear()
  console.log(colors.yellow('=============================='))
  console.log(
    colors.magenta('||'.yellow + '  Seleccione una opción   ' + '||'.yellow)
  )
  console.log(colors.yellow('=============================='))
  const preguntas = [
    {
      type: 'list',
      name: 'opcion',
      message: '¿Qué desea hacer?',
      choices: [
        {
          value: 1,
          name: `${'1.'.cyan} Crear una tarea`,
        },
        {
          value: 2,
          name: `${'2.'.cyan} Listar tareas`,
        },
        {
          value: 3,
          name: `${'3.'.cyan} Listar tareas completadas`,
        },
        {
          value: 4,
          name: `${'4.'.cyan} Listar tareas pendientes`,
        },
        {
          value: 5,
          name: `${'5.'.cyan} Completar tarea(s)`,
        },
        {
          value: 6,
          name: `${'6.'.cyan} Borrar tarea`,
        },
        {
          value: 7,
          name: `${'0.'.cyan} Salir`,
        },
      ],
    },
  ]

  const { opcion } = await inquirer.prompt(preguntas)
  return opcion
}

const pausa = async () => {
  const question = [
    {
      type: 'input',
      name: 'enter',
      message: `presion ${'enter'.red} para continuar`,
    },
  ]
  console.log('\n')
  await inquirer.prompt(question)
}

const leerInput = async (message) => {
  const question = [
    {
      type: 'input',
      name: 'desc',
      message, // En realidad es message : message solo que el vs lo entiende
      validate(value) {
        if (value.length === 0) {
          return 'Por favor ingrese un valor'
        }
        return true
      },
    },
  ]
  const { desc } = await inquirer.prompt(question)
  return desc
}

const listadoTareasBorrar = async (tareas = []) => {
  const choices = tareas.map((tarea, i) => {
    const idx = `${i + 1}.`.green
    return {
      value: tarea.id,
      name: `${idx} ${tarea.desc}`,
    }
  })

  const preguntas = [
    {
      type: 'list',
      name: 'id',
      message: 'Borrar',
      choices,
    },
  ]
  const { id } = await inquirer.prompt(preguntas)
  return id
}

module.exports = {
  inquirerMenu,
  pausa,
  leerInput,
  listadoTareasBorrar,
}
