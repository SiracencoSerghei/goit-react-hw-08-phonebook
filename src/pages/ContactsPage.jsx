import { Filter } from '../components/Filter/Filter';
import { ContactsList } from '../components/ContactsList/ContactsList';
import { ContactForm } from '../components/ContactForm/ContactForm';
import { useDispatch, useSelector } from 'react-redux';
import {
  selectContacts,
  selectIsLoading,
  selectError,
  selectFilteredContacts,
} from '../redux/contacts/selectors';
import { fetchContacts, addContact } from '../redux/contacts/operations';
import { useEffect } from 'react';
import { Flex, Heading } from '@chakra-ui/layout';
import { useColorModeValue } from '@chakra-ui/react';
import { FcContacts, FcList } from 'react-icons/fc';

export default function ContactsPage() {
  const bgColor = useColorModeValue('gray.50', 'gray.700');
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);
  const filter = useSelector(selectFilteredContacts);
  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <Flex
      name="flex"
      direction="column"
      align="center"
      pt={10}
      px={10}
      bg={bgColor}
      h="100%"
    >
      <Heading
  as={'h1'}
  fontSize={'2xl'}
  display="flex"
  alignItems="flex-end"
  mb={2}
>
  Phonebook
 
</Heading>
  <ContactForm />
      
      <Filter />
      <div title={`Contacts list`}>
        {isLoading && <p>Loading contacts...</p>}
        {error && <p>{error}</p>}
        {contacts.length > 0 && 
        <ContactsList contacts={filter} />
        }
      </div>
    </Flex>
  );
}