import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import ImageInput from './ImageInput'

class CreateContact extends Component
{
    render(){
        return (
            <div>
                <Link className="close-create-contact" to="/" >Close</Link>
                <form className="create-contact-form">
                    <ImageInput className="create-contact-avatar-input" maxHeight={64} name="avatarURL" />
                    <div className="create-contact-details">
                        <input type="text" name="name" placeholder="Name"/>
                        <input type="text" name="email" placeholder="Email"/>
                        <button>Submit</button>
                    </div>
                </form>
            </div>)
    }
}

export default CreateContact