const getState = ({ getStore, getActions, setStore }) => {
    // getStore devuelve todos los atributos del objeto store
    // getActions devuelve todos los metodos existentes detno del objecto actions
    // setStore permite actualizar los atributos declarados en el objecto store
    return {
        store: {
            name: 'Luis Javier',
            lastname: '',
            age: 0,
            saludo: '',
        }, // definir todas las variables que queremos o utilizaremos
        actions: {
            handleChange: e => {
                setStore({
                    [e.target.name]: e.target.value
                })
            },
            setHola: () => {
                return "Hola";
            },
            setMundo: () => {
                return getActions().setHola() + " Mundo";
            },
            setValores: () => {
                setStore({
                    saludo: getActions().setMundo()
                })
            },
        } // definir todos los metodos o funciones que queremos utilizar
    }
}

export default getState;