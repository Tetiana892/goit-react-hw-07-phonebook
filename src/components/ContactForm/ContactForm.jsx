import { useState } from 'react';
import { nanoid } from 'nanoid';
import {
  FormContainer,
  InputContainer,
  LabelInput,
  Input,
  Button,
} from './ContactForm.styled';
import {
  useGetContactsQuery,
  useCreateContactMutation,
} from 'redux/contactsApi';
import { toast } from 'react-toastify';

export default function ContactForm() {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');

  const { data: contacts } = useGetContactsQuery();
  const [createContact] = useCreateContactMutation();

  const changeName = e => setName(e.target.value);
  const changeNumber = e => setPhone(e.target.value);

  const handleSubmit = e => {
    e.preventDefault();
    const newContact = {
      name,
      phone,
      id: nanoid(),
    };
    contacts.find(contact => contact.name.toLowerCase() === name.toLowerCase())
      ? toast.warn(`${name} : ${phone} is already in contacts`)
      : createContact(newContact);

    reset();
  };

  const reset = () => {
    setName('');
    setPhone('');
  };

  return (
    <FormContainer onSubmit={handleSubmit}>
      <InputContainer>
        <LabelInput>
          Name
          <Input
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+([' \-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
            value={name}
            onChange={changeName}
            placeholder="Enter name"
            autoComplete="off"
          />
        </LabelInput>

        <LabelInput>
          Number
          <Input
            type="tel"
            name="number"
            phonePattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
            value={phone}
            onChange={changeNumber}
            placeholder="Enter phone number"
            autoComplete="off"
          />
        </LabelInput>
      </InputContainer>

      <Button type="submit">Add contact</Button>
    </FormContainer>
  );
}
