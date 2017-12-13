import React, { Component } from 'react';
import ListContacts from './ListContacts'

// This is used as an example of how to import a property:
// import ListContacts2 from './ListContacts'

class App extends Component {
    state = {
        searchbox: "",
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

    // If you notice I put the log message in the callback to setState
    // This guarantees that te
    handleChange = (event) => {
        this.setState({searchbox: event.target.value},
            () => {console.log('The searchbox now contains:' + this.state.searchbox)});
    }

    removeContact = (contact) => {
        this.setState((prevState) => ({
            contacts: prevState.contacts.filter(c => c.id !== contact.id)
        }))
    }

    /*
    // Just testing if I can make it only render after clicking the delete button when
    // the searchbox has the secret "delete" text.
    shouldComponentUpdate(){
        if(this.state.searchbox === "delete")
            return true
        return false
    }
    */

    // This is an example of using an ES6 function with an implicit return from ListContact.js
    // <ListContacts2 contacts={contacts}/>
    render() {
    return(
        <div>
            <input onChange={this.handleChange}></input>
            <ListContacts OnDeleteContact={this.removeContact} contacts={this.state.contacts}/>
        </div>
    )
  }
}

export default App;
