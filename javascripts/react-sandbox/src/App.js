import React, { Component } from 'react';
import ListContacts from './ListContacts'

// This is used as an example of how to import a property:
// import ListContacts2 from './ListContacts'

class App extends Component {
    state = {
        contacts: [
            {
                "id": "ryan",
                "name": "Ryan Florence",
                "email": "ryan@reacttraining.com",
                "avatarURL": "http://localhost:5001/ryan.jpg"
            },
            {
                "id": "michael",
                "name": "Michael Jackson",
                "email": "michael@reacttraining.com",
                "avatarURL": "http://localhost:5001/michael.jpg"
            },
            {
                "id": "tyler",
                "name": "Tyler McGinnis",
                "email": "tyler@reacttraining.com",
                "avatarURL": "http://localhost:5001/tyler.jpg"
            }
        ]
    }

    removeContact = (contact) => {
        this.setState((prevState) => ({
            contacts: prevState.contacts.filter(c => c.id !== contact.id)
        }))
    }

    // This is an example of using an ES6 function with an implicit return from ListContact.js
    // <ListContacts2 contacts={contacts}/>
    render() {
    return(
        <div>
            <ListContacts OnDeleteContact={this.removeContact} contacts={this.state.contacts}/>
        </div>
    )
  }
}

export default App;
