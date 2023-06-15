import { Flex } from "@chakra-ui/layout";
import { useAuth } from "src/hooks";
import { HeaderBtn } from "../Buttons/Buttons";


export const Navigation = () => {
  const { isLoggedIn } = useAuth();
  return (
    <Flex>
      <HeaderBtn role={'Home'} path={'/'} />
      {isLoggedIn && (
        <HeaderBtn role={'Contacts'} path={'/contacts'} mlSize={3} />
      )}
    </Flex>
  );
};
