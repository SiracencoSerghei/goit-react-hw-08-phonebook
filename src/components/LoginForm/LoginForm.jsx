import {
  Input,
  InputGroup,
  InputRightElement,
  Button,
  FormControl,
  FormLabel,
  Stack,
  useColorModeValue,
  Box,
  Heading,
  Text,
  Flex,
  Link,
} from '@chakra-ui/react';
import { ViewIcon, ViewOffIcon } from '@chakra-ui/icons';
import { NavLink } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { logIn } from 'src/redux/auth/operations';

export const LoginForm = () => {
  const [showPassword, setShowPassword] = useState(false);
  const bgColor = useColorModeValue('gray.200', 'gray.700');
  const dispatch = useDispatch();

  const handleLogin = e => {
    e.preventDefault();
    const form = e.currentTarget;
    dispatch(
      logIn({
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
  };

  return (
    <Flex className="loginForm" justify={'center'} bg={bgColor}>
      <Stack spacing={1} mx={'auto'} maxW={'lg'} py={3} px={3}>
        <Stack align={'center'}>
          <Heading fontSize={'2xl'}>Sign in to your account </Heading>
          <Text fontSize={'lg'} color={'gray.600'}>
            to enjoy your Phone Book✌️
          </Text>
        </Stack>
        <Box
          rounded={'lg'}
          bg={useColorModeValue('white', 'gray.700')}
          boxShadow={'lg'}
          p={8}
        >
          <Stack spacing={2} as="form" onSubmit={handleLogin}>
            <FormControl id="email" isRequired>
              <FormLabel>Email address</FormLabel>
              <Input type="email" name="email" placeholder="Enter your email" />
            </FormControl>
            <FormControl id="password" isRequired>
              <FormLabel>Password</FormLabel>
              <InputGroup>
                <Input
                  type={showPassword ? 'text' : 'password'}
                  name="password"
                  pattern="(?=.*\d).{7,}"
                  placeholder="7 characters or more, please"
                />
                <InputRightElement h={'full'}>
                  <Button
                    variant={'ghost'}
                    onClick={() =>
                      setShowPassword(showPassword => !showPassword)
                    }
                  >
                    {showPassword ? <ViewIcon /> : <ViewOffIcon />}
                  </Button>
                </InputRightElement>
              </InputGroup>
            </FormControl>
            <Stack spacing={2}>
              <Stack
                direction={{ base: 'column', sm: 'row' }}
                align={'start'}
                justify={'space-between'}
              ></Stack>
              <Button
                type="submit"
                bg={'blue.400'}
                color={'white'}
                _hover={{
                  bg: 'blue.500',
                }}
              >
                Sign in
              </Button>
            </Stack>
            <Stack pt={1}>
              <Text align={'center'}>
                Need an account? Register now!
                <Link
                  as={NavLink}
                  to="/register"
                  color={'blue.400'}
                  fontSize={'lg'}
                  ml="1"
                >
                  Sign Up
                </Link>
              </Text>
            </Stack>
          </Stack>
        </Box>
      </Stack>
    </Flex>
  );
};
