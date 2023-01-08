
export class Empleado {
    #nombre;
    #dni;
    #salario;
    #clave

    constructor(nombre, dni, salario) {
        this.#nombre = nombre;
        this.#dni = dni;
        this.#salario = salario;
        this.#clave = '';
    }

    asignarClave(clave){
        this.#clave = clave;
    }

    autenticable(clave){
        return clave == this.#clave;
    } 

    verBonificacion(){
        return this.#salario;
       // throw new Error('Debe implementar el metodo retirarDeCuenta en su clase')
    }
    _verBonificacion(bono){
        return this.#salario + (this.#salario * bono/100)
    }
}