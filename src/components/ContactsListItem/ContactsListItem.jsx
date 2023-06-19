import {
  Button,
  Text,
  Modal,
  ModalBody,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  Stack,
  InputGroup,
  InputLeftAddon,
  Input,
  ModalFooter,
  Flex,
} from "@chakra-ui/react";
import React, { useState, useRef } from "react";
import { BsTrash, BsFillPencilFill } from "react-icons/bs";
import { useDispatch } from "react-redux";
import { deleteContact, updateContact } from "../../redux/contacts/operations";

import { UpdateForm } from '../UpdateForm/UpdateForm';

export const ContactsListItem = ({ contact: { name, number, id } }) => {
  console.log("contact", name, number, id);

  const initialRef = useRef(null);
  const finalRef = useRef(null);
  const [isOpen, setIsOpen] = useState(false);
  const [updatedName, setUpdatedName] = useState(name);
  const [updatedNumber, setUpdatedNumber] = useState(number);

  const onOpen = () => setIsOpen(true);
  const onClose = () => setIsOpen(false);

  const dispatch = useDispatch();

  const deleteContactHandler = () => {
    dispatch(deleteContact(id));
  };

  const handleUpdate = (event) => {
    event.preventDefault();
    console.log("click on save");
    const form = event.target;
    dispatch(
      updateContact({
        id: id,
        contact: {
          name: form.name.value,
          number: form.number.value,
        },
      })
    );
    form.reset();
    onClose();
  };
  const handleChange = (event) => {
    const { name, value } = event.target;
    switch (name) {
      case "name":
        setUpdatedName(value);
        break;
      case "number":
        setUpdatedNumber(value);
        break;
      default:
        return;
    }
  };

  return (
    <>
      <Flex alignItems="center">
        <Text
          ml={"5%"}
          mr={"auto"}
          fontSize={{ md: "lg", lg: "lg" }}
          fontWeight={"500"}
        >
          {name}
        </Text>
        <Text
          ml={"auto"}
          mr={"5%"}
          fontWeight={"500"}
          fontSize={{ md: "lg", lg: "lg" }}
        >
          {number}
        </Text>

        <Button onClick={onOpen}>
          <BsFillPencilFill size={20} color="var(--chakra-colors-blue-500)" />
        </Button>

        <Button onClick={deleteContactHandler} color="#f44336">
          <BsTrash size={20} />
        </Button>


        <Modal
          initialFocusRef={initialRef}
          finalFocusRef={finalRef}
          isOpen={isOpen}
          onClose={onClose}
        >
          <ModalOverlay />

          <ModalContent>
            <UpdateForm
             updatedName={updatedName}
             updatedNumber={updatedNumber}
             handleUpdate={handleUpdate}
             handleChange={handleChange}
             onClose={onClose}

            />
          </ModalContent>

      </Modal>
    </Flex>
    </>
  );
};
