//
// Onze lokale 'in memory database'.
// We simuleren een asynchrone database met een array van objecten.
// De array bevat een aantal dummy records.
// De database heeft twee methoden: get en add.
// Opdracht: Voeg de overige methoden toe.
//
const database = {
    // het array met dummy records. Dit is de 'database'.
    _data: [
        {
            id: 0,
            firstName: 'Hendrik',
            lastName: 'van Dam',
            emailAdress: 'hvd@server.nl'
            // Hier de overige velden uit het functioneel ontwerp
        },
        {
            id: 1,
            firstName: 'Marieke',
            lastName: 'Jansen',
            emailAdress: 'm@server.nl'
            // Hier de overige velden uit het functioneel ontwerp
        }
    ],

    // Ieder nieuw item in db krijgt 'autoincrement' index.
    // Je moet die wel zelf toevoegen aan ieder nieuw item.
    _index: 2,
    _delayTime: 500,

    getAll(callback) {
        // Simuleer een asynchrone operatie
        setTimeout(() => {
            // Roep de callback aan, en retourneer de data
            callback(null, this._data)
        }, this._delayTime)
    },

    getById(id, callback) {
        // Simuleer een asynchrone operatie
        setTimeout(() => {
            if (id < 0 || id >= this._data.length) {
                callback({ message: `Error: User with id ${id} does not exist!` }, null)
            } else {
                callback(null, this._data[id])
            }
        }, this._delayTime)
    },

    add(item, callback) {
        // Simuleer een asynchrone operatie
        setTimeout(() => {
            // const email = item.emailAdress;
            // if (!(isEmailAvailable(email, this._data))) {
            //     callback({message: "Error: User with this email address already exists in the database.", status: 400}, null);
            // } else {
                // Voeg een id toe en voeg het item toe aan de database
                item.id = this._index++
                // Voeg item toe aan de array
                this._data.push(item)

                // Roep de callback aan het einde van de operatie
                // met het toegevoegde item als argument, of null als er een fout is opgetreden
                callback(null, item)
            // }
        }, this._delayTime)
    },

    put(item, callback) {
        setTimeout(() => {
            for (let i = 0; i < this._data.length; i++) {
                if (item.id === this._data[i].id) {
                    this._data[i].firstName = item.firstName
                    this._data[i].lastName = item.lastName
                    this._data[i].emailAdress = item.emailAdress
                }
            }
            callback(null, this._data[item.id])
        })
    },

    delete(id, callback) {
        setTimeout(() => {
            // for (let i = 0; i < this._data.length; i++) {
            //     if (id === this._data[i].id) {
            //         delete this._data[i]
            //     }
            // }
            this._data.splice(id, 1)
            callback(null, id)
        }, this._delayTime)
    }

    // const:isEmailAvailable = (email, data) => {
    //     for (let index = 0; index < data.length; index++) {
    //         if (data[index].emailAdress === email) {
    //             return false
    //         }
    //     }
    //     return true
    // }

    // const: isEmailAvailable = (email) => {
    //     for (const user of this._data.entries()) {
    //         if (user.email === email) {
    //             return false;
    //         }
    //     }
    //     return true;
    // }


    // Voeg zelf de overige database functionaliteit toe
}

module.exports = database
// module.exports = database.index;
