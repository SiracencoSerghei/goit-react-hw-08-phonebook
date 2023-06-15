import { Box, Text } from '@chakra-ui/layout';

export const ContactsNotification = ({
  visibleContacts,
  savedContactsNumber,
}) => {
  return (
    <Box textAlign="center">
      {savedContactsNumber !== visibleContacts ? (
        <Text>
          Found contacts: <b>{visibleContacts}</b>
        </Text>
      ) : (
        <Text>
          Total number of contacts: <b>{savedContactsNumber}</b>
        </Text>
      )}
    </Box>
  );
};