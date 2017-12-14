import React, { Component } from 'react';
import ListContacts from './ListContacts'
import * as ContactsAPI from './utils/ContactsAPI'

// This is used as an example of how to import a property:
// import ListContacts2 from './ListContacts'

class App extends Component {
    state = {
        contacts: []
    }

    componentDidMount(){
        ContactsAPI.getAll().then((contacts) => {
            this.setState({contacts})
        })
    }

    removeContact = (contact) => {
        this.setState((prevState) => ({
            contacts: prevState.contacts.filter(c => c.id !== contact.id)
        }))
        ContactsAPI.remove(contact)
    }

    // This is an example of using an ES6 function with an implicit return from ListContact.js
    // <ListContacts2 contacts={contacts}/>
    render() {
    return(
        <div>
            <ListContacts onDeleteContact={this.removeContact} contacts={this.state.contacts}/>
        </div>
    )
  }
}

export default App;
