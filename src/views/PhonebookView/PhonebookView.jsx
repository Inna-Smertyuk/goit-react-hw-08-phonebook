import ContactForm from '../../components/ContactForm/ContactForm';
import ContactList from '../../components/ContactList/ContactList';
import Filter from '../../components/Filter/Filter';
import s from './phonebookView.module.css';

export default function Phonebook() {
  return (
    <div className={s.phonebook}>
      <div className={s.form}>
        <h2>Add new contact</h2>
        <ContactForm />
      </div>
      <div>
        <h2>Contacts</h2>
        <Filter />
        <ContactList />
      </div>
    </div>
  );
}
