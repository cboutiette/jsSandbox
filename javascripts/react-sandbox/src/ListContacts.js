import React from 'react'
import PropTypes from 'prop-types'

/**
 * Precondition: You only require a render method
 * As a stateless function you can do this:
 */
function ListContacts (props)
{
    return (
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
                    <button onClick={() => props.OnDeleteContact(contact)} className='contact-remove'>
                        Remove
                    </button>
                </li>
            ))}
        </ol>
    )
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

ListContacts.propTypes = {
    contacts: PropTypes.array.isRequired,
    OnDeleteContact: PropTypes.func.isRequired
}

export default ListContacts
