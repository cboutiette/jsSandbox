import React, { Component } from 'react';
import ListContacts from './ListContacts'
import * as ContactsAPI from './utils/ContactsAPI'
import CreateContact from './CreateContact'
import { Route } from 'react-router-dom'

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

    createContact = (contact) => {
        ContactsAPI.create(contact).then(contact => {
            this.setState(state => ({
                contacts: state.contacts.concat(contact)
            }))
        })
    }

    // This is an example of using an ES6 function with an implicit return from ListContact.js
    // <ListContacts2 contacts={contacts}/>
    render() {
    return(
        <div>
            <Route
                exact path='/' // Exact path is used because we need to make sure this is only rendered when you are at the base url
                render={() => (<ListContacts
                    onDeleteContact={this.removeContact}
                    contacts={this.state.contacts}/>)}
            />
            <Route // You don't need to use render because you are not passing properties to the component
                exact path='/create'
                render={({ history }) => (
                    <CreateContact
                        onCreateContact={(contact) => {
                            this.createContact(contact)
                            history.push('/')
                        }}/>
                )}
            />
        </div>
    )
  }
}

export default App;
