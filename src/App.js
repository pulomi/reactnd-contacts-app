import React, { Component } from 'react';
import ListContacts from './ListContacts'
import * as ContactsAPI from './utils/ContactsAPI'
import CreateContact from './CreateContact'
class App extends Component {

  state = {
    contacts: [],
    screen:'list'
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

  onAddLinkClick = ()=>{
    this.setState(()=>({
      screen : 'create'
    }))
  }

  render() {
    return (
      <div>
        {this.state.screen=='list' && <ListContacts contacts={this.state.contacts} removeContact={this.removeContact} 
        onAddLinkClick={this.onAddLinkClick}/>}
        {this.state.screen=='create' && <CreateContact/>}
        
      </div>
    );
  }
}

export default App;
