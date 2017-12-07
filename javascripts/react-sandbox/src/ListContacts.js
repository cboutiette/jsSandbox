import React, {Component} from 'react'

/**
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
                    <button className='contact-remove'>
                        Remove
                    </button>
                </li>
            ))}
        </ol>
    )
}


/**
 * As a class component you can do the following:
 */
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

export default ListContacts
