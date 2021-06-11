class Estudiante{
    constructor(nombre, apellido){ //argumentos
        this._nombre = nombre // los this. representan los atributos
        this._apellido = apellido
    }
    get nombre(){
        return this._nombre
    }
    set nombre(nombre){//argumento
        this._nombre = nombre //atributo = argumento
    }
    get apellido(){
        return this._apellido
    }
    set apellido(apellido){//argumento
        this._apellido = apellido //atributo = argumento
    }
}