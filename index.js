/*Importación de clases*/
import { Empleado } from './Empleados/Empleado.js'
import { Gerente } from './Empleados/Gerente.js'
import { Director } from './Empleados/Director.js'
import { SistemaAutenticacion } from './SistemaAutenticacion.js';
import { Cliente } from './Cliente.js';


const empleado = new Empleado('Segundo Pantoja', '112320399', 10000)
const gerente = new Gerente('Jose Pantoja', '2035620', 14000)
// const director = new Director('Jennyfer', '8596985',25000)
console.log('***********Empleado**************');
console.log(empleado.verBonificacion());
empleado.asignarClave('222')
console.log('Empleado logueado',SistemaAutenticacion.login(empleado,'222'));
console.log('***********Gerente**************');
console.log(gerente.verBonificacion());
gerente.asignarClave('333')
console.log('Gerente logueado',SistemaAutenticacion.login(gerente,'333'));

// console.log(director.verBonificacion());
console.log('***********Cliente**************');
const cliente = new Cliente('Segundo Pantoja', '112320399', '10000')
cliente.asignarClave('555')
console.log('Cliente logueado',SistemaAutenticacion.login(cliente,'555'));


