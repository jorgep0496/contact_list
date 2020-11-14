const getState = ({ getStore, getActions, setStore }) => {
    // getStore devuelve todos los atributos del objeto store
    // getActions devuelve todos los metodos existentes dentro del objecto actions
    // setStore permite actualizar los atributos declarados en el objecto store
    return {
        store: {
            apiUrl: "https://assets.breatheco.de/apis/fake/contact/",
            contact: null,
            contacts: null,
            agenda: "jorgep0496"
        }, // definir todas las variables que queremos o utilizaremos
        actions: {
            getSchedules: () => {
                const store = getStore();
                fetch(`${store.apiUrl}/agenda/${store.agenda}`)
                    .then((resp) => {
                        return resp.json()
                    })
                    .then(data => {
                        setStore({
                            contacts: data
                        });
                    })
                    .catch((err) => console.log(err.message))
            },

            addContact: async (contact, history) => {
                const store = getStore();
                const resp = await fetch(store.apiUrl, {
                    method: "POST",
                    body: JSON.stringify(contact),
                    headers: {
                        "Content-Type": "application/json"
                    }
                })
                const data = await resp.json()

                if (resp.status < 200 || resp.status > 299) {
                    if (resp.status > 399 || resp.status < 499) {
                        console.log(data.msg)
                    }
                } else {
                    getActions().getSchedules()
                    history.push("/")
                }
            },

            editContact: async (urlID, contact, history) => {
                const store = getStore();
                const resp = await fetch(store.apiUrl + urlID, {
                    method: "PUT",
                    body: JSON.stringify(contact),
                    headers: {
                        "Content-Type": "application/json"
                    }
                })
                const data = await resp.json()

                if (resp.status < 200 || resp.status > 299) {
                    if (resp.status > 399 || resp.status < 499) {
                        console.log(data.msg)
                    }
                } else {
                    getActions().getSchedules()
                    history.push("/")
                }
            },

            deleteContact: urlID => {
                const store = getStore();
                fetch(store.apiUrl + urlID, {
                    method: "DELETE",
                    headers: {
                        "Content-Type": "application/json"
                    }
                })
                    .then((resp) => {
                        return resp.json()
                    })
                    .then(data => {
                        getActions().getSchedules();
                    })
            }
        }
    };
};

export default getState;