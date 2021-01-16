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

        const {query} = this.state
        const {contacts, removeContact} = this.props

        const shownContacts = query==''
                ?contacts
                :contacts.filter((c) => (
                    c.name.toLowerCase().includes(query.toLowerCase())
                ))

        return (
            <div className="list-contacts">
                <div className="list-contacts-top">
                    <input 
                        type="text" 
                        className="search-contacts"
                        defaultValue="Search Contacts"
                        value={query}
                        onChange={(event)=>this.updateQuery(event.target.value)}
                    />
                </div>
                <ol className='contact-list'>
                    {shownContacts.map((contact)=>(
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
                        <button className='contact-remove' onClick={()=>removeContact(contact)}>Remove</button>
                        </li>
                    ))}
                </ol>
            </div>
        );    
    }    
}


export default ListContacts;