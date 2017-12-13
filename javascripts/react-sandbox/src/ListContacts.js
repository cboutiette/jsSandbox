import React, {Component} from 'react'
import PropTypes from 'prop-types'
import escapeRegExp from 'escape-string-regexp'
import sortBy from 'sort-by'

/**
 * Precondition: You only require a render method
 * As a stateless function you can do this:
 */
class ListContacts extends Component {
    static propTypes = {
        contacts: PropTypes.array.isRequired,
        onDeleteContact: PropTypes.func.isRequired
    }

    state = {
        query: ''
    }

    updateQuery = (query) => {
        this.setState({query: query.trim()})
    }

    render() {
        let showingContacts

        if (this.state.query){
            // if there are any special characters in our query we will escape
            // so that way we will use those characters as a string literal
            // rather than the special regex characters and 'i' ignores the case
            const match = new RegExp(escapeRegExp(this.state.query), 'i')
            showingContacts = this.props.contacts.filter((c) => match.test(c.name))
        } else {
            showingContacts = this.props.contacts
        }

        // .sort is javascript on arrays but sortBy allows to sort by specific property
        // an array of objects
        showingContacts.sort(sortBy('name'))

        return (
            <div className='list-contacts'>
                <div className='list-contacts-top'>
                    <input
                        className='search-contacts'
                        type='text'
                        placeholder='Search Contacts'
                        value={this.state.query}
                        onChange={(event) => this.updateQuery(event.target.value)}
                    />
                </div>
                <ol className='contact-list'>
                    {showingContacts.map((contact) => (
                        <li key={contact.id} className='contact-list-item'>
                            <div className='contact-avatar' style={{
                                backgroundImage: `url(${contact.avatarURL})`
                            }}/>
                            <div className='contact-details'>
                                <p>{contact.name}</p>
                                <p>{contact.email}</p>
                            </div>
                            <button onClick={() => this.props.onDeleteContact(contact)} className='contact-remove'>
                                Remove
                            </button>
                        </li>
                    ))}
                </ol>
            </div>
        )
    }
}

/**
 * Even more compact example of the ES6 function with an implicit return
 * This also shows how to export a function inline
 */
export const ContactsList2 = (props) => (
    <ol className='contact-list' >
        {props.contacts.map((contact) => (
            <li key={contact.id} className='contact-list-item'>
                <div className='contact-avatar' style={{
                    backgroundImage: `url(${contact.avatarURL})`
                }}/>
                <div className='contact-details'>
                    <p>{contact.name}</p>
                    <p>{contact.email}</p>
                </div>
                <button className='contact-remove'>
                    Remove
                </button>
            </li>
        ))}
    </ol>
);

/**
 * Usage: If you require more than a render method this may be the preferred method
 * As a class component you can do the following:
 */
/*
class ListContactsClassComponent extends Component
{
    render() {
        console.log('Props', this.props)
        return (
            <ol className='contact-list' >
                {this.props.contacts.map((contact) => (
                    <li key={contact.id} className='contact-list-item'>
                        <div className='contact-avatar' style={{
                            backgroundImage: `url(${contact.avatarURL})`
                        }}/>
                        <div className='contact-details'>
                            <p>{contact.name}</p>
                            <p>{contact.email}</p>
                        </div>
                        <button className='contact-remove'>
                            Remove
                        </button>
                    </li>
                ))}
            </ol>
        )
    }
}
*/



export default ListContacts
