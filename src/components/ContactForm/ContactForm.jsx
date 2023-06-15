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
import { toast } from 'react-toastify';

export const ContactForm = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(state => state.phonebook.contacts.isLoading);
  
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const [nameError, setNameError] = useState('');
  const [numberError, setNumberError] = useState('');

  const validateForm = () => {
    let isValid = true;

    if (name.trim() === '') {
      setNameError('Name is required');
      isValid = false;
    } else {
      setNameError('');
    }

    if (number.trim() === '') {
      setNumberError('Phone number is required');
      isValid = false;
    } else {
      setNumberError('');
    }

    return isValid;
  };

  const newContact = () => {
      const contact = {
        name,
        number
      };
      
      console.log('Contact to be dispatched:', contact);
      dispatch(addContact(contact));
    };

  const handleSubmit = e => {
    e.preventDefault();

    if (validateForm()) {
      newContact();
          reset();
          console.log('Inside handleSubmit');
    }
  };

  const reset = () => {
    setName('');
    setNumber('');
  };

  useEffect(() => {
    console.log('Inside useEffect', dispatch);
    dispatch(fetchContacts());
  }, [dispatch]);

  // console.log('Before returning ContactForm', contact);
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
              onChange={e => setName(e.target.value)}
              placeholder="Enter name"
              w="17rem"
              fontSize="1em"
            />
          </InputGroup>
          {nameError && <div>{nameError}</div>}
          <InputGroup>
            <InputLeftAddon children="Number:" w="5.2rem" fontSize="1em" />
            <Input
              type="tel"
              name="number"
              value={number}
              onChange={e => setNumber(e.target.value)}
              placeholder="Enter phone number"
              w="17rem"
              fontSize="1em"
            />
          </InputGroup>
          {numberError && toast.error(numberError, {
  duration: 4000,
  position: 'top-center',})}
          <Button type="submit" disabled={isLoading} fontSize="l">
            Add contact
          </Button>
        </Stack>
      </form>
    </>
  );
};


