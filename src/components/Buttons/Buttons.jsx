import { MoonIcon, SunIcon } from '@chakra-ui/icons';
import {
  Button,
  Stack,
  useColorMode,
  useColorModeValue,
} from '@chakra-ui/react';
import { Link } from 'react-router-dom';

export const HeaderBtn = ({ role, path, mlSize }) => {
  const bgColor = useColorModeValue('blue.500', 'blue.600');
  const color = useColorModeValue('white', 'white');

  return (
    <Button
      as={Link}
      to={path}
      display={'inline-flex'}
      fontSize={'lg'}
      fontWeight={600}
      color={color}
      bg={bgColor}
      _hover={{
        bg: 'blue.400',
        color: 'white',
      }}
      ml={mlSize}
    >
      {role}
    </Button>
  );
};

export const AuthRegBts = ({ role, path, mlSize }) => {
  const bgColor = useColorModeValue('gray.200', 'gray.700');
  const color = useColorModeValue('black', 'white');

  return (
    <Button
      as={Link}
      to={path}
      display={'inline-flex'}
      fontSize={'lg'}
      fontWeight={600}
      color={color}
      bg={bgColor}
      _hover={{
        bg: 'blue.500',
        color: 'white',
      }}
      ml={mlSize}
    >
      {role}
    </Button>
  );
};

export const LogoutBTN = ({ handleLogOut }) => {
  const bgColor = useColorModeValue('gray.200', 'gray.700');
  const color = useColorModeValue('black', 'white');

  return (
    <Button
      onClick={handleLogOut}
      display={'inline-flex'}
      fontSize={'lg'}
      fontWeight={600}
      color={color}
      bg={bgColor}
      _hover={{
        bg: 'blue.500',
        color: 'white',
      }}
    >
      Log Out
    </Button>
  );
};

export const SwitchColorModeBTN = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <Stack direction={'row'} spacing={4} ml={1}>
      <Button
        onClick={toggleColorMode}
        _hover={{
          bg: 'blue.500',
          color: 'white',
        }}
      >
        {colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
      </Button>
    </Stack>
  );
};

export const HeroSignButtons = () => {
  return (
    <Stack spacing={6} direction={'row'}>
      <Button
        as={Link}
        to="/login"
        color="white"
        px={12}
        fontSize={{ base: 'lg', md: 'xl' }}
        bg={'blue.400'}
        _hover={{ bg: 'blue.500' }}
      >
        Login
      </Button>
      <Button
        as={Link}
        to="/register"
        fontSize={{ base: 'lg', md: 'xl' }}
        color="white"
        px={12}
        bg={'blue.400'}
        _hover={{ bg: 'blue.500' }}
      >
        Register
      </Button>
    </Stack>
  );
};
