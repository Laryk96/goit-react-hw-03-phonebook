import React, { Component } from 'react';
import { Report } from 'notiflix';

import Filter from '../Filter';
import ContactForm from 'components/ContactForm';
import ContactList from 'components/ContactList';
import { Title, Container, SubTitle } from './App.styled';

const KEY_CONTACTS = 'name/tell';

class App extends Component {
  state = {
    contacts: [],
    filter: '',
  };

  componentDidMount() {
    const savedContacts = JSON.parse(localStorage.getItem(KEY_CONTACTS));

    if (savedContacts) {
      this.setState({ contacts: savedContacts });
    }
  }
  componentDidUpdate(_, prevState) {
    if (prevState.contacts !== this.state.contacts) {
      localStorage.setItem(KEY_CONTACTS, JSON.stringify(this.state.contacts));
    }
  }

  getContactForm = contact => {
    const restulChack = this.chackName(contact.name);

    if (restulChack) {
      this.setState(({ contacts }) => ({
        contacts: [...contacts, contact],
      }));
    }
  };

  handleFilter = e => {
    const filter = e.currentTarget.value;

    this.setState({ filter: filter });
  };

  chackName = newName => {
    if (this.state.contacts.some(({ name }) => name === newName)) {
      Report.warning(`${newName} is already in contacts`);
      return false;
    }

    return true;
  };

  deleteContact = contactId => {
    this.setState(({ contacts }) => ({
      contacts: contacts.filter(({ id }) => id !== contactId),
    }));
  };

  getVisibleContacts = () => {
    const { filter, contacts } = this.state;

    const normalizzedFilter = filter.toLowerCase();

    return contacts.filter(
      ({ name, number }) =>
        name.toLowerCase().includes(normalizzedFilter) ||
        number.includes(normalizzedFilter)
    );
  };

  render() {
    const { filter } = this.state;
    const visibleFilter = this.getVisibleContacts();
    return (
      <Container>
        <Title>Phonebook</Title>
        <ContactForm onSubmit={this.getContactForm} />
        <SubTitle>Contacts</SubTitle>
        <Filter value={filter} toFilter={this.handleFilter} />
        <ContactList
          renderItems={visibleFilter}
          deleteContact={this.deleteContact}
        />
      </Container>
    );
  }
}

export default App;
