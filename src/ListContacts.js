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

    clearQuery= () => {
        this.updateQuery('');
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
                    <a className="add-contact" href='#createContat' onClick={this.props.onAddLinkClick}>Add Contact</a>
                </div>
                {shownContacts.length!=contacts.length && (
                    <div className="showing-contacts">
                    <span>showing {shownContacts.length} of {contacts.length}</span>
                    <button onClick={this.clearQuery}>ShowAll</button>
                    </div>
                )}
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