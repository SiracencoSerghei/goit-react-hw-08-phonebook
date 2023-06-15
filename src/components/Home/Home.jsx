import { Container, Heading, Stack, Text, Image } from "@chakra-ui/react";

export default function Home() {
  return (
    <Container maxW={"5xl"}>
      <Stack
        textAlign={"center"}
        align={"center"}
        spacing={{ base: 8, md: 5 }}
        py={{ base: 20, md: 28 }}
      >
        <Heading
          as={"h1"}
          fontWeight={600}
          fontSize={{ base: "3xl", sm: "4xl", md: "6xl" }}
          lineHeight={"110%"}
        >
          Contacts book
        </Heading>
        <Text color={"gray.500"} maxW={"3xl"}>
          Using the contact book has never been so easy. You can add contacts,
          see contacts and even delete them.
        </Text>
        <Image
          src="src/photo/myPhone.jpg"
          alt="My Image"
          width="200px"
          height="200px"
        />
      </Stack>
    </Container>
  );
}
