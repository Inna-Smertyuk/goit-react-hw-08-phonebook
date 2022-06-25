import { useState } from "react";
import {
  useGetContactsQuery,
  useCreateContactMutation,
} from "../../redux/slice";
import { toast } from "react-toastify";
import s from "./ContactForm.module.css";

function ContactForm() {
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");

  const { data: contacts } = useGetContactsQuery();
  const [createContact, { isLoading }] = useCreateContactMutation();

  const changeName = (e) => {
    setName(e.target.value);
  };

  const handleChange = (e) => {
    setNumber(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = { name, number };
    if (
      contacts.find(
        (contact) => contact.name.toLowerCase() === name.toLowerCase()
      )
    ) {
      toast.info(`${name} is already in contacts`); //
      return;
    }
    if (
      contacts.find(
        (contact) => contact.number.toLowerCase() === number.toLowerCase()
      )
    ) {
      toast.info(`${number} is already in contacts`); //
      return;
    }
    createContact(data);
    reset();
    toast.success(`New contact added to phonebook`); //
  };
  const reset = () => {
    setName("");
    setNumber("");
  };

  return (
    <form className={s.wrapForm} onSubmit={handleSubmit}>
      <label className={s.lableForm}>Name</label>

      <input
        value={name}
        type="text"
        name="name"
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        required
        onChange={changeName}
      />
      <label className={s.lableForm}>Number</label>

      <input
        value={number}
        type="tel"
        name="number"
        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
        required
        onChange={handleChange}
      />
      <button className={s.addButton} type="submit" disabled={isLoading}>
        Add contact
      </button>
    </form>
  );
}

export default ContactForm;
