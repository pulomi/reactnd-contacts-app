import React, { Component } from 'react';
import ListContacts from './ListContacts'
import * as ContactsAPI from './utils/ContactsAPI'
import {Link} from 'react-router-dom'
import ImageInput from './ImageInput'
import serializeForm from 'form-serialize'
class CreateContact extends Component {

  onFormSubmit = (event)=>{
    event.preventDefault();
    const formValues = serializeForm(event.target, {hash:true});
    console.log(formValues)
    if(this.props.onCreateContact){
      this.props.onCreateContact(formValues)
    }
  }


  render() {
    return (
      <div>
        <Link className='close-create-contact' to='/' />
        <form className='create-contact-form' onSubmit={this.onFormSubmit}>
          <ImageInput 
              className='create-contact-avatar-input'
              name="avatarURL"
              maxHeight={64}
          />
          <div className='create-contact-details'>
            <input type='text' name='name' placeholder='Name'/>
            <input type='text' name='handle' placeholder='Handle'/>
            <button>Add Contact</button>
          </div>
        </form>
      </div>
    );
  }
}

export default CreateContact;
