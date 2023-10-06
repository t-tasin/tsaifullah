import { Flex } from "@chakra-ui/react";
import { H1, H2 } from "./Typography";

export default function App() {
  return (
    <Flex
      width={"100%"}
      height={"100px"}
      bgColor={"gray.100"}
      justifyContent={"center"}
      alignItems={"center"}
    >
      <H1 textAlign={"center"}>KM Khalid Saifullah</H1>
    </Flex>
  );
}
