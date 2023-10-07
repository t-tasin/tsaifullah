import {
  Box,
  Button,
  Card,
  CardBody,
  CardFooter,
  Center,
  Flex,
  Heading,
  Image,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  Stack,
  useDisclosure,
  chakra,
  Link,
} from "@chakra-ui/react";
import { H4, H5, H6, H7 } from "./typography";

export default function ProjectPizza() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <Box>
      <Card direction={{ base: "column", lg: "row" }}>
        <Image
          src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original-wordmark.svg"
          alt="Computerized Pizza Delivery System"
          maxW={{ base: "100%", sm: "150px" }}
          maxH={{ base: "170px", sm: "100%" }}
          padding={6}
        />
        <Stack>
          <CardBody>
            <Center marginBottom={"4"}></Center>
            <Heading size="md">Computerized Pizza Delivery System</Heading>
            <H6>
              A C++ OOP solution that streamlines pizza delivery through
              efficient order and driver management using advanced data
              structures.
            </H6>
            <Flex marginTop={3} wrap={"wrap"} gap={2.5}>
              <Box
                bgColor={"gray.100"}
                borderRadius={"5px"}
                width={"fit-content"}
                padding={1.5}
              >
                <H4
                  display="flex"
                  alignItems="center"
                  textAlign="center"
                  height="fit-content"
                  fontSize={"12px"}
                  lineHeight={"16px"}
                  fontWeight={600}
                  gap={1}
                  my={0}
                >
                  <Image
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg"
                    width={"16px"}
                    height={"auto"}
                  />
                  <chakra.span>C++</chakra.span>
                </H4>
              </Box>
              <Box
                bgColor={"gray.100"}
                borderRadius={"5px"}
                width={"fit-content"}
                padding={1.5}
              >
                <H4
                  display="flex"
                  alignItems="center"
                  textAlign="center"
                  height="fit-content"
                  fontSize={"12px"}
                  lineHeight={"16px"}
                  fontWeight={600}
                  gap={1}
                  my={0}
                >
                  <chakra.span>Data Structures & Algorithm</chakra.span>
                </H4>
              </Box>
              <Box
                bgColor={"gray.100"}
                borderRadius={"5px"}
                width={"fit-content"}
                padding={1.5}
              >
                <H4
                  display="flex"
                  alignItems="center"
                  textAlign="center"
                  height="fit-content"
                  fontSize={"12px"}
                  lineHeight={"16px"}
                  fontWeight={600}
                  gap={1}
                  my={0}
                >
                  <chakra.span>OOP</chakra.span>
                </H4>
              </Box>
            </Flex>
          </CardBody>
          <CardFooter width={"100%"} gap={3} paddingTop={5}>
            <Button onClick={onOpen} width={"50%"}>
              Details
            </Button>
            <Button
              as={Link}
              width={"50%"}
              href="https://github.com/t-tasin/automated_pizza_delivery"
            >
              <H4
                display="flex"
                alignItems="center"
                textAlign="center"
                height="fit-content"
                fontSize={"14px"}
                lineHeight={"24px"}
                fontWeight={600}
                gap={1}
              >
                <Image
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg"
                  width={"24px"}
                  height={"auto"}
                />
                <chakra.span>GitHub</chakra.span>
              </H4>
            </Button>

            <Modal isOpen={isOpen} onClose={onClose} isCentered>
              <ModalOverlay />
              <ModalContent>
                <Center marginBottom={"2.5"} marginTop={4}>
                  <Image
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original-wordmark.svg"
                    alt="AI GYM Trainer"
                    height={"100px"}
                  />
                </Center>
                <ModalHeader>
                  Computerized Pizza Delivery System <H7>December 2022</H7>
                </ModalHeader>
                <ModalCloseButton />
                <ModalBody paddingBottom={4}>
                  <H6>
                    Utilizing C++, Object-Oriented Programming, and Data
                    Structures, I created the "Dominato's Computerized Delivery
                    System" to optimize the pizza delivery process for
                    restaurants. The system efficiently manages orders, delivery
                    drivers, and delivery tracking using design patterns for
                    scalability. Notably, I incorporated a doubly-linked list
                    with a queue data structure, achieving a time efficiency
                    boost of O(n) for operations over traditional array or
                    singly linked list implementations. This solution includes
                    modules to manage time logs, orders, driver activities, and
                    restaurant operations, offering a seamless integration into
                    existing restaurant management systems, thereby enhancing
                    efficiency and user experience.
                  </H6>
                  <H5 fontSize={"14px"} marginTop={3}>
                    Techstack:{" "}
                  </H5>
                  <Flex marginTop={3} marginBottom={3} wrap={"wrap"} gap={2.5}>
                    <Box
                      bgColor={"gray.100"}
                      borderRadius={"5px"}
                      width={"fit-content"}
                      padding={1.5}
                    >
                      <H4
                        display="flex"
                        alignItems="center"
                        textAlign="center"
                        height="fit-content"
                        fontSize={"12px"}
                        lineHeight={"16px"}
                        fontWeight={600}
                        gap={1}
                        my={0}
                      >
                        <Image
                          src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg"
                          width={"16px"}
                          height={"auto"}
                        />
                        <chakra.span>C++</chakra.span>
                      </H4>
                    </Box>
                    <Box
                      bgColor={"gray.100"}
                      borderRadius={"5px"}
                      width={"fit-content"}
                      padding={1.5}
                    >
                      <H4
                        display="flex"
                        alignItems="center"
                        textAlign="center"
                        height="fit-content"
                        fontSize={"12px"}
                        lineHeight={"16px"}
                        fontWeight={600}
                        gap={1}
                        my={0}
                      >
                        <chakra.span>Data Structures & Algorithm</chakra.span>
                      </H4>
                    </Box>
                    <Box
                      bgColor={"gray.100"}
                      borderRadius={"5px"}
                      width={"fit-content"}
                      padding={1.5}
                    >
                      <H4
                        display="flex"
                        alignItems="center"
                        textAlign="center"
                        height="fit-content"
                        fontSize={"12px"}
                        lineHeight={"16px"}
                        fontWeight={600}
                        gap={1}
                        my={0}
                      >
                        <chakra.span>OOP</chakra.span>
                      </H4>
                    </Box>
                  </Flex>
                  <Link href="https://github.com/t-tasin/automated_pizza_delivery">
                    <Button width={"100%"}>
                      <H4
                        display="flex"
                        alignItems="center"
                        textAlign="center"
                        height="fit-content"
                        fontSize={"14px"}
                        lineHeight={"24px"}
                        fontWeight={600}
                        gap={1}
                      >
                        <Image
                          src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg"
                          width={"24px"}
                          height={"auto"}
                        />
                        <chakra.span>GitHub</chakra.span>
                      </H4>
                    </Button>
                  </Link>
                </ModalBody>
              </ModalContent>
            </Modal>
          </CardFooter>
        </Stack>
      </Card>
    </Box>
  );
}
