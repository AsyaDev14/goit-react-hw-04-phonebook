import React from "react";
import { Component } from "react";
import css from './ContactForm.module.css';


export class ContactForm extends Component {
  // const { name, handleNameChange, number, handleNumberChange, handleClick } = props;
  state = {
    name: '',
    number: ''
  }

  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value })
  }

  handleSubmit = e => {
    e.preventDefault();
    if (this.state.name && this.state.number) {
      if (this.props.checkName(this.state.name)) {
        alert(`${this.state.name} already in contact`)
      } else {
        this.props.addNewContact(this.state);
        this.reset()
      }
    }
  }

  reset = () => {
    this.setState({
      name: '',
      number: ''
    })
  };

  render() {
    console.log('name', this.state.name);
    console.log('num', this.state.number);
    return (
      <form autoComplete="off" onSubmit={this.handleSubmit} >
        <label htmlFor="name">
          <input
            className={css.input}
            value={this.state.name}
            onChange={this.handleChange}
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />
        </label>
        <label htmlFor="number">
          <input
            className={css.input}
            value={this.state.number}
            onChange={this.handleChange}
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
          />
        </label>
        <button type="submit" className={css.button_contact} >Add contact</button>
      </form>
    );
  }
};
