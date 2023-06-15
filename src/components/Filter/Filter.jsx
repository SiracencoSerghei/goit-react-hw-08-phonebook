
// import PropTypes from 'prop-types';
import { Flex } from '@chakra-ui/layout';
import { Input, InputGroup, InputLeftAddon } from '@chakra-ui/react';
import { useDispatch } from 'react-redux';
import { filterChange } from '../../redux/contacts/filterSlice';

export const Filter = () => {
  const dispatch = useDispatch();
  const onWrite = e => {
    dispatch(filterChange(e.currentTarget.value));
  };

  return (
    <Flex>
      <InputGroup>
        <InputLeftAddon children="Find contacts :" fontSize="1em" />
        <Input
          type="text"
          name="filter"
          placeholder="Find contacts by name"
          onChange={onWrite}
          fontSize="1em"
          mb={2}
        />
      </InputGroup>
    </Flex>
  );
};

// Label.propTypes = {
//   filter: PropTypes.string,
// };
