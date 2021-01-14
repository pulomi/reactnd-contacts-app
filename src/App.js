import React, { Component } from 'react';
import ListContacts from './ListContacts'


class App extends Component {

  state = {
    contacts: [
      {
        "id": "karen",
        "name": "Karen Isgrig",
        "handle": "karen_isgrig",
        "avatarURL": "http://localhost:5001/karen.jpg"
      },
      {
        "id": "richard",
        "name": "Richard Kalehoff",
        "handle": "richardkalehoff",
        "avatarURL": "http://localhost:5001/richard.jpg"
      },
      {
        "id": "tyler",
        "name": "Tyler McGinnis",
        "handle": "tylermcginnis",
        "avatarURL": "http://localhost:5001/tyler.jpg"
      }
     ]
  }

  removeContact = (contact) => {

    this.setState((currentState)=>(
        {
          contacts:this.state.contacts.filter(c=>c.id!==contact.id)
        }
      )
      
    ) 

  }

  render() {
    return (
      <div>
        <ListContacts contacts={this.state.contacts} removeContact={this.removeContact}/>
      </div>
    );
  }
}

export default App;
