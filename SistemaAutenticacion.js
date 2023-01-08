export class SistemaAutenticacion {

    static login(usuario, clave) {
        //Me permite verificar si existe un metodo en una clase y no es un atributo
        if ("autenticable" in usuario && 
        usuario.autenticable instanceof Function) {
            return usuario.autenticable(clave);
        }else{
            return false
        }

    }

}