import { Box, Flex, Image, Link } from "@chakra-ui/react";
import { H5 } from "./typography";
import email from "./assets/email.svg";

export default function Footer() {
  return (
    <Box marginTop={8} bgColor={"gray.100"} padding={4}>
      <Flex width={"100%"}>
        <Box
          display="flex"
          alignItems="center"
          textAlign="center"
          height="fit-content"
          width={"50%"}
          gap={1.5}
          as={Link}
          href="mailto:tasin0.net@gmail.com"
        >
          <Image src={email} width={"24px"} />
          <H5>tasin0.net@gmail.com</H5>
        </Box>
        <Box
          width={"50%"}
          display={"flex"}
          justifyContent={"flex-end"}
          alignItems={"center"}
          gap={2.5}
        >
          <Link href="https://www.linkedin.com/in/k-tasin/">
            <Image
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linkedin/linkedin-original.svg"
              width={"24px"}
            />
          </Link>
          <Link href="https://github.com/t-tasin">
            <Image
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg"
              width={"24px"}
            />
          </Link>
        </Box>
      </Flex>
    </Box>
  );
}
