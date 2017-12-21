import React, { Component } from 'react';
import ListContacts from './ListContacts'
import * as ContactsAPI from './utils/ContactsAPI'
import CreateContact from './CreateContact'

// This is used as an example of how to import a property:
// import ListContacts2 from './ListContacts'

class App extends Component {
    state = {
        screen: 'list', // list, create
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
            {this.state.screen === 'list' && (
                <ListContacts
                    onDeleteContact={this.removeContact}
                    onNavigate={() => {
                        this.setState({screen : 'create' })
                    }}
                    contacts={this.state.contacts}/>
            )}

            {this.state.screen === 'create' && (
                <CreateContact />
            )}
        </div>
    )
  }
}

export default App;
