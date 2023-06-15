import React from 'react';
import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    Box, Button,
    Input,
    InputGroup,
    InputLeftAddon,
    Stack,
  } from '@chakra-ui/react'
  import { useDisclosure } from '@chakra-ui/react';
  import { BsFillPencilFill } from 'react-icons/bs';


export function UpdateForm() {
  const { isOpen, onOpen, onClose } = useDisclosure()

  const initialRef = React.useRef(null)
  const finalRef = React.useRef(null)
  
    return (
      <>
      <Button onClick={onOpen}><BsFillPencilFill size={20} color='var(--chakra-colors-blue-500)' /></Button>
      

      <Modal
        initialFocusRef={initialRef}
        finalFocusRef={finalRef}
        isOpen={isOpen}
        onClose={onClose}
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Update your contact</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
          <Stack as="form" spacing={2}
            //  onSubmit={handleAddContact}
              mb={4}>
        <InputGroup>
          <InputLeftAddon children="Name:" w="5.2rem" fontSize="1em" />
          <Input
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Only letters, apostrophe, dash and spaces."
            required
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
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
            placeholder="Enter phone number"
            w="17rem"
            fontSize="1em"
          />
        </InputGroup>
      </Stack>
          </ModalBody>

          <ModalFooter>
            <Button colorScheme='blue' mr={3}
            type="submit"
            >
              Save
            </Button>
            <Button onClick={onClose}>Cancel</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>

</>
    )
  }