const inquirer = require('inquirer')
const colors = require('colors')
const preguntas = [
  {
    type: 'list',
    name: 'opcion',
    message: '¿Qué desea hacer?',
    choices: [
      {
        value: 1,
        name: `${'1.'.red} Crear una tarea`,
      },
      {
        value: 2,
        name: `${'2.'.red} Listar tareas`,
      },
      {
        value: 3,
        name: `${'3.'.red} Listar tareas completadas`,
      },
      {
        value: 4,
        name: `${'4.'.red} Listar tareas pendientes`,
      },
      {
        value: 5,
        name: `${'5.'.red} Completar tarea(s)`,
      },
      {
        value: 6,
        name: `${'6.'.red} Borrar tarea`,
      },
      {
        value: 7,
        name: `${'0.'.red} Salir`,
      },
    ],
  },
]

const inquirerMenu = async () => {
  console.clear()
  console.log(colors.yellow('=============================='))
  console.log(
    colors.magenta('||'.yellow + '  Seleccione una opción   ' + '||'.yellow)
  )
  console.log(colors.yellow('=============================='))

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

module.exports = {
  inquirerMenu,
  pausa,
}
