import { Flex } from "@chakra-ui/layout";
import { AuthRegBts } from "../Buttons/Buttons";


export const AuthNav = () => {
  return (
    <Flex
      as="nav"
      h={16}
      alignItems={'center'}
      justifyContent={'space-between'}
    >
      <AuthRegBts role={'Log In'} path={'login'} mlSize={1} />
      <AuthRegBts role={'Sign Up'} path={'register'} mlSize={1} />
    </Flex>
  );
};
