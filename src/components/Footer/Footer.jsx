import {
  Box,
  chakra,
  Container,
  Stack,
  Text,
  useColorModeValue,
  VisuallyHidden,
} from '@chakra-ui/react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

const SocialButton = ({ children, label, href }) => {
  return (
    <chakra.button
      bg={useColorModeValue('blackAlpha.100', 'whiteAlpha.100')}
      target="_blank"
      rounded={'full'}
      w={6}
      h={6}
      cursor={'pointer'}
      as={'a'}
      href={href}
      display={'inline-flex'}
      alignItems={'center'}
      justifyContent={'center'}
      transition={'background 0.3s ease'}
      _hover={{
        bg: useColorModeValue('blackAlpha.200', 'whiteAlpha.200'),
      }}
    >
      <VisuallyHidden>{label}</VisuallyHidden>
      {children}
    </chakra.button>
  );
};

export default function Footer() {
  return (
    <Box
      as="footer"
      bg={useColorModeValue('gray.100', 'gray.900')}
      color={useColorModeValue('gray.700', 'gray.200')}
    >
      <Container
        className="footerContainer"
        as={Stack}
        maxW={'6xl'}
        py={4}
        direction={{ base: 'column', md: 'row' }}
        spacing={4}
        justify={{ base: 'center', md: 'space-between' }}
        align={{ base: 'center', md: 'center' }}
      >
        <Text fontSize={'l'} as="b">
          2023 Siracenco Serghei 
        </Text>
        <Stack direction={'row'} spacing={6}>
          <SocialButton
            label={'LinkedIn'}
            href={'https://www.linkedin.com/in/siracenco-serghei/'}
          >
            <FaLinkedin size={30}
            
            style={{
              color: 'var(--chakra-colors-blue-500)'
            }} />
          </SocialButton>
          <SocialButton
            label={'Github'}
            href={'https://github.com/SiracencoSerghei'}
          >
            <FaGithub size={30} />
          </SocialButton>
        </Stack>
      </Container>
    </Box>
  );
}
