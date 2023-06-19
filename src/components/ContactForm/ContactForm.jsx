import { useState } from 'react';
import {
  Button,
  Input,
  InputGroup,
  InputLeftAddon,
  Stack,
} from '@chakra-ui/react';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { fetchContacts, addContact } from 'src/redux/contacts/operations';
import { selectContacts, selectIsLoading } from 'src/redux/contacts/selectors';
import { showErrorToast, showSuccessToast } from 'src/utils/messages';

export const ContactForm = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const contacts = useSelector(selectContacts);

  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const handleChange = (event) => {
    event.preventDefault()
    const { name, value } = event.currentTarget;
    switch (name) {
      case 'name':
        const isNameExists = contacts.some(
          (contact) => value.toLowerCase() === contact.name.toLowerCase()
        );
        if (isNameExists) {
          showErrorToast(`Sorry ${value} already exist!`);
          return;
        }
        setName(value);
        break;

      case 'number':
      const isNumberExists = contacts.some(
        (contact) => value.toLowerCase() === contact.number.toLowerCase()
      );
      if (isNumberExists) {
        showErrorToast(`Sorry ${value} already exist!`);
        return;
      }
        setNumber(value);
        break;

      default:
        break;
    }
  };

  const newContact = () => {
    const contact = {
      name,
      number,
    };
    try {
      dispatch(addContact(contact));
      // console.log('contact', contact)
      showSuccessToast(`Contact: ${contact.name} is added to your book`)
      reset();
    } catch (error) {
      console.log('error', error);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !number) {
      showErrorToast('Please fill in all fields');
      return;
    }
    newContact();
  };

  const reset = () => {
    setName('');
    setNumber('');
  };

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <>
      <form onSubmit={handleSubmit}>
        <Stack spacing={2} mb={4}>
          <InputGroup>
            <InputLeftAddon children="Name:" w="5.2rem" fontSize="1em" />
            <Input
              type="text"
              name="name"
              value={name}
              onChange={handleChange}
              placeholder="Enter name"
              w="17rem"
              fontSize="1em"
            />
          </InputGroup>
          <InputGroup>
            <InputLeftAddon children="Number:" w="5.2rem" fontSize="1em" />
            <Input
              type="tel"
              name="number"
              value={number}
              onChange={handleChange}
              placeholder="Enter phone number"
              w="17rem"
              fontSize="1em"
            />
          </InputGroup>
          <Button type="submit" disabled={isLoading} fontSize="l">
            Add contact
          </Button>
        </Stack>
      </form>
    </>
  );
};