import React, { Component } from "react";
import Form from "./components/Form/form";
import ContactList from "./components/ContactList/contactList";
import Filter from "./components/Filter/filter";
import shortid from "shortid";
// import contacts from "./num.json";

class App extends Component {
  state = {};

  // formSubmitHandler = (name, number) => {
  //   const { contacts } = this.state;

  //   const newContact = {
  //     id: shortid.generate(),
  //     name,
  //     number,
  //   };
  //   if (contacts.find((contact) => contact.name === newContact.name)) {
  //     alert(`${newContact.name} is already in contacts.`);
  //     return;
  //   }

  //   this.setState(({ contacts }) => ({
  //     contacts: [newContact, ...contacts],
  //   }));
  // };

  // changeFilter = (e) => {
  //   this.setState({ filter: e.currentTarget.value });
  // };

  // getContacts = () => {
  //   const { filter, contacts } = this.state;
  //   const normalizedFilter = filter.toLowerCase();

  //   return contacts.filter((contact) =>
  //     contact.name.toLowerCase().includes(normalizedFilter)
  //   );
  // };

  // deleteContact = (contactId) => {
  //   this.setState((prevState) => ({
  //     contacts: prevState.contacts.filter(
  //       (contact) => contact.id !== contactId
  //     ),
  //   }));
  // };

  // componentDidMount() {
  //   const contacts = localStorage.getItem("contacts");
  //   const parsedContacts = JSON.parse(contacts);

  //   if (parsedContacts) {
  //     this.setState({ contacts: parsedContacts });
  //   }
  // }

  // componentDidUpdate(prevProps, prevState) {
  //   // console.log('App componentDidUpdate');

  //   const oldContact = this.state.contacts;
  //   const newContact = prevState.contacts;

  //   if (oldContact !== newContact) {
  //     console.log("Обновился контакт");
  //     localStorage.setItem("contacts", JSON.stringify(oldContact));
  //   }
  // }

  render() {
    // const { filter } = this.state;
    // const visibleContacts = this.getContacts();
    return (
      <>
        <h1>Phonebook</h1>
        <Form />
        <h2>Contacts</h2>
        <Filter />
        <ContactList
        // contacts={visibleContacts}
        // onDeleteContact={this.deleteContact}
        />
      </>
    );
  }
}

export default App;
