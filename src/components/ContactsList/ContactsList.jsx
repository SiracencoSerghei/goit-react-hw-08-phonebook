
import { List } from '@chakra-ui/react';
import { ContactsListItem } from '../ContactsListItem/ContactsListItem';

export const ContactsList = ({ contacts }) => {

  

  return (
    <>
      <List spacing={2} w={{ base: '384px', lg: '450px' }}>
        {contacts.map(({ id, name, number }) => (
          <ContactsListItem key={id} w="100%" display="flex" alignItems="center" contact = {{ id, name, number }} contacts={contacts} />
        ))}
      </List>
    </>
  );
};