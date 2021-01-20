import React, { Component } from 'react';
import ListContacts from './ListContacts'
import * as ContactsAPI from './utils/ContactsAPI'
import CreateContact from './CreateContact'
class App extends Component {

  state = {
    contacts: [],
    screen:'CreateContact'
  }

  componentDidMount(){
    ContactsAPI.getAll().then(contacts=>{
      this.setState({
        contacts
      })
    })
  }

  removeContact = (contact) => {

    this.setState((currentState)=>(
        {
          contacts:this.state.contacts.filter(c=>c.id!==contact.id)
        }
      )
    )
    
    ContactsAPI.remove(contact);

  }

  render() {
    return (
      <div>
        {this.state.screen=='List' && <ListContacts contacts={this.state.contacts} removeContact={this.removeContact}/>}
        {this.state.screen=='CreateContact' && <CreateContact/>}
        
      </div>
    );
  }
}

export default App;
