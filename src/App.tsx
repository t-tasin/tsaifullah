import { Box, Flex, Image } from "@chakra-ui/react";
import { H1, H2, H4 } from "./Typography";
import ProPic from "./assets/propic.png";

export default function App() {
  return (
    <Box marginRight={"200px"} marginLeft={"200px"}>
      <Flex
        width={"100%"}
        height={"100px"}
        bgColor={"gray.100"}
        justifyContent={"center"}
        alignItems={"center"}
      >
        <H2 textAlign={"center"}>KM Khalid Saifullah</H2>
      </Flex>
      <Flex marginTop={24} width={"100%"}>
        <Box width={"60%"} paddingTop={8} paddingRight={6}>
          <H1 marginBottom={4}>Hey, This is Tasin</H1>
          <H4>
            I am a Junior at The College of Wooster majoring in Computer Science
            and Business Economics, I am deeply intrigued by the power of
            emerging technologies to shape our future. My academic pursuits lie
            at the intersection of tech and economics, where I aim to leverage
            interdisciplinary approaches to improve social welfare and quality
            of life.
          </H4>
        </Box>
        <Flex
          width={"40%"}
          justifyContent={"center"}
          alignItems={"center"}
          position={"relative"}
        >
          <Image src={ProPic} borderRadius="full" boxSize="220px" />
          <Box
            borderRadius={"50%"}
            bgColor={"gray.100"}
            width={"120px"}
            height={"120px"}
            position={"absolute"}
            bottom={0}
            right={10}
            zIndex={-1}
          />
        </Flex>
      </Flex>
    </Box>
  );
}
