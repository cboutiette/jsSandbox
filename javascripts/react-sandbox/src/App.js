import React, { Component } from 'react';
import ListContacts from './ListContacts'

// This is used as an example of how to import a property:
// import ListContacts2 from './ListContacts'

const contacts = [
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

class App extends Component {
    // This is an example of using the property component from ListContact.js
    // <ListContacts2 contacts={contacts}/>
    render() {
    return(
        <div>
            <ListContacts contacts={contacts}/>
        </div>
    )
  }
}

export default App;
