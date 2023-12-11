import React, { Component } from 'react';
import { nanoid } from 'nanoid';
import { ContactForm } from './contactForm/ContactForm'
import { Section } from './section/Section';
import { Filter } from './filter/Filter';
import { ContactList } from './contactList/ContactList';


export class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie', number: '459-12-56' },
      { id: 'id-2', name: 'Hermion', number: '443-89-12' },
      { id: 'id-3', name: 'Eden', number: '645-17-79' },
      { id: 'id-4', name: 'Annie', number: '227-91-26' },
    ],

    filter: ''
  };

  // 
  componentDidMount() {
    console.log('App componentDidMount');
    const contacts = localStorage.getItem("contacts");
    const parseContacts = JSON.parse(contacts);

    if (parseContacts) {
      this.setState({ contacts: parseContacts });
    }
  }

  componentDidUpdate(prevProps, prevState) {
    console.log('App componentDidUpdate');

    if (this.state.contacts !== prevState.contacts) {
      localStorage.setItem("contacts", JSON.stringify(this.state.contacts));
    }
  }

  handleFilterChange = event => {
    this.setState({ filter: event.target.value })
  }

  contactFilter = () => {
    return this.state.contacts.filter(contact => contact.name.toLowerCase().includes(this.state.filter.toLowerCase()))
  }

  addNewContact = (contactProps) => {
    this.setState(prev => ({
      contacts: [...prev.contacts, { id: nanoid(), ...contactProps }]
      // name: contactProps.name, number: contactProps.number( ...contactProps)
    }))
  }

  deleteContact = (id) => {
    this.setState(prev => ({
      contacts: prev.contacts.filter(contact => contact.id !== id)
    }));
  };

  checkName = (name) => {
    return this.state.contacts.some((contact) => {
      return contact.name.toLowerCase() === name.toLowerCase()
    });
  };

  // render page
  render() {
    return (
      <>
        <Section title='Phonebook'>
          <ContactForm
            addNewContact={this.addNewContact}
            checkName={this.checkName}
          />
        </Section>
        <Section title='Contacts'>
          <Filter
            filter={this.state.filter}
            handleFilterChange={this.handleFilterChange}
          />
          <ContactList
            id={this.state.id}
            name={this.state.name}
            number={this.state.number}
            contactFilter={this.contactFilter}
            deleteContact={this.deleteContact}
          />
        </Section>
      </>
    );
  }
}

export default App;
