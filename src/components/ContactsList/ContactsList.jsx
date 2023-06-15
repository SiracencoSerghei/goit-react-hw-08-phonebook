import { List, ListIcon, ListItem, Text, Button } from '@chakra-ui/react';
import { BsPhone, BsTrash } from 'react-icons/bs';
import { useDispatch, useSelector } from 'react-redux';
import { deleteContact } from 'src/redux/contacts/operations';
import { selectFilter } from 'src/redux/contacts/selectors';

export const ContactsList = ({ contacts }) => {
  const dispatch = useDispatch();
  return (
    <>
      <List spacing={2} w={{ base: '384px', lg: '450px' }}>
        {contacts.map(({ id, name, number }) => (
          <ListItem key={id} w="100%" display="flex" alignItems="center">
            <ListIcon
              as={BsPhone}
              boxSize={{ base: 5, md: 6, lg: 7 }}
              color="blue.500"
            />
            <Text
              ml={'5%'}
              mr={'auto'}
              fontSize={{ md: 'lg', lg: 'lg' }}
              fontWeight={'500'}
            >
              {name}
            </Text>
            <Text
              ml={'auto'}
              mr={'5%'}
              fontWeight={'500'}
              fontSize={{ md: 'lg', lg: 'lg' }}
            >
              {number}
            </Text>
            <Button onClick={() => dispatch(deleteContact(id))} color="#f44336">
              <BsTrash size={20} />
            </Button>
          </ListItem>
        ))}
      </List>
    </>
  );
};