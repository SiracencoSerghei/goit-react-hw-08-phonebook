import { Heading } from "@chakra-ui/layout";
import { RegisterForm } from "src/components/RegisterForm/RegisterForm";


export default function Register() {
  return (
    <div>
      <Heading>
        <title>Registration</title>
      </Heading>
      <RegisterForm />
    </div>
  );
}