import { Flex } from "@chakra-ui/react";
import { H1 } from "./Typography";

export default function App() {
  return (
    <Flex
      width={"100%"}
      height={"100px"}
      bgColor={"gray.100"}
      justifyContent={"center"}
      alignItems={"center"}
    >
      <H1 textAlign={"center"}>KM Khalid Saifullah | Software Engineer</H1>
    </Flex>
  );
}
