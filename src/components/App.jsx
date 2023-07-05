import { Container, Section, Title } from './App.styled';
import ContactForm from './ContactForm/ContactForm';
import ContactList from './ContactList/ContactList';
import Filter from './Filter/Filter';
import { ToastContainer } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';

export default function App() {
  return (
    <Container>
      <Section title="Phonebook">
        <Title>Phonebook</Title>
        <ContactForm />
      </Section>

      <Section title="Contacts">
        <Title>Contacts</Title>
        <Filter />
        <ContactList />
      </Section>
      <ToastContainer />
    </Container>
  );
}
