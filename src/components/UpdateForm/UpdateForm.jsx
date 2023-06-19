import React from "react";
import {
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  Input,
  InputGroup,
  InputLeftAddon,
  Stack,
} from "@chakra-ui/react";

export function UpdateForm({
  handleUpdate,
  updatedName,
  updatedNumber,
  handleChange,
  onClose,
}) {
  return (
    <>
      <Stack as="form" spacing={2} onSubmit={handleUpdate} mb={4}>
        <ModalHeader>Update your contact</ModalHeader>
        <ModalCloseButton />
        <ModalBody pb={6}>
          <InputGroup>
            <InputLeftAddon children="Name:" w="5.2rem" fontSize="1em" />
            <Input
              type="text"
              name="name"
              value={updatedName}
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Only letters, apostrophe, dash and spaces."
              required
              placeholder="Enter name"
              w="17rem"
              fontSize="1em"
              onChange={handleChange}
            />
          </InputGroup>
          <InputGroup>
            <InputLeftAddon children="Number:" w="5.2rem" fontSize="1em" />
            <Input
              type="tel"
              name="number"
              value={updatedNumber}
              pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
              title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
              required
              placeholder="Enter phone number"
              w="17rem"
              fontSize="1em"
              onChange={handleChange}
            />
          </InputGroup>
        </ModalBody>

        <ModalFooter>
          <Button colorScheme="blue" mr={3} type="submit">
            Save
          </Button>
          <Button onClick={onClose}>Cancel</Button>
        </ModalFooter>
      </Stack>
    </>
  );
}
