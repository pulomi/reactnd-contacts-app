import React, { Component } from 'react'
import PropTypes from 'prop-types'


class ListContacts extends Component{

    static propTypes = {
        contacts : PropTypes.array.isRequired,
        removeContact: PropTypes.func.isRequired
    }

    state = {
        query:""
    }

    updateQuery = (queryText) => {
        this.setState(()=>({
            query : queryText.trim()
        }))
    }

    render(){
        return (
            <div className="list-contacts">
                <div className="list-contacts-top">
                    <input 
                        type="text" 
                        className="search-contacts"
                        defaultValue="Search Contacts"
                        value={this.state.query}
                        onChange={(event)=>this.updateQuery(event.target.value)}
                    />
                </div>
                <ol className='contact-list'>
                    {this.props.contacts.map((contact)=>(
                        <li key={contact.id} className='contact-list-item'>

                        <div className='contact-avatar' style={
                            {
                                backgroundImage: `url(${contact.avatarURL})`
                            }
                        }>
                        </div>
                        <div className='contact-details'>
                            <p>{contact.name}</p>
                            <p>{contact.handle}</p>
                        </div>
                        <button className='contact-remove' onClick={()=>this.props.removeContact(contact)}>Remove</button>
                        </li>
                    ))}
                </ol>
            </div>
        );    
    }    
}


export default ListContacts;