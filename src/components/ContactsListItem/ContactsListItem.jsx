import React, { useState } from 'react';
import { BsTrash, BsFillPencilFill } from 'react-icons/bs';
import { toast } from 'react-hot-toast';

import { useDispatch } from 'react-redux';

export const ContactsListItem = ({ contact: { name, number, id } }) => {
  const [isModalOpen, setModalOpen] = useState(false); // Add useState hook

  const dispatch = useDispatch();
  const addContact = () => {
    console.log('props', props);
    dispatch(deleteContact(id));
  };

   const handleUpdate = () => {
    // Handle update logic here
  };

  return (
    <>
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
      {/* <Button onClick={() => setModalOpen(true)}>
        <BsFillPencilFill size={20} color='var(--chakra-colors-blue-500)' />
      </Button> */}

{/* {isModalOpen && (
      <Button onClick={() => setModalOpen(true)}>
        <BsFillPencilFill size={20} color='var(--chakra-colors-blue-500)' />
      </Button>
    )}
      <UpdateForm isOpen={isModalOpen} onClose={() => setModalOpen(false)} /> */}
      
      
      <Button onClick={addContact} color="#f44336">
        <BsTrash size={20} />
      </Button>


    </>
  );
};
