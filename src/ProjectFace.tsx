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

export default function ProjectFace() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <Box>
      <Card direction={{ base: "column", lg: "row" }}>
        <Image
          src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original-wordmark.svg"
          alt="AI GYM Trainer"
          maxW={{ base: "100%", sm: "150px" }}
          maxH={{ base: "170px", sm: "100%" }}
          padding={6}
        />
        <Stack>
          <CardBody>
            <Center marginBottom={"4"}></Center>
            <Heading size="md">Automated Classroom Attendance System</Heading>
            <H6>
              An automated Python tool using face recognition to log student
              attendance in real-time from video input.
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
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg"
                    width={"16px"}
                    height={"auto"}
                  />
                  <chakra.span>Python</chakra.span>
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
                  <Image
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/numpy/numpy-original.svg"
                    width={"16px"}
                    height={"auto"}
                  />
                  <chakra.span>NumPy</chakra.span>
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
                  <Image
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/opencv/opencv-original.svg"
                    width={"16px"}
                    height={"auto"}
                  />
                  <chakra.span>OpenCV</chakra.span>
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
                  <chakra.span>Computer Vision</chakra.span>
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
                  <chakra.span>Image Processing</chakra.span>
                </H4>
              </Box>
            </Flex>
          </CardBody>
          <CardFooter width={"100%"} gap={3} paddingTop={0}>
            <Button onClick={onOpen} width={"50%"}>
              Details
            </Button>
            <Button
              as={Link}
              width={"50%"}
              href="https://github.com/t-tasin/Classroom_Attandance"
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
                  Automated Classroom Attendance System <H7>September 2022</H7>
                </ModalHeader>
                <ModalCloseButton />
                <ModalBody paddingBottom={4}>
                  <H6>
                    Utilizing face recognition technology, Classroom Attendance
                    is an innovative Python application designed to automate
                    student attendance logging. Through real-time video
                    analysis, it identifies students and instantly captures
                    their presence in a CSV file, ensuring an efficient and
                    modernized approach to classroom management. The system is
                    customizable, accommodating diverse student sets and
                    adjustable recognition thresholds.
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
                          src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg"
                          width={"16px"}
                          height={"auto"}
                        />
                        <chakra.span>Python</chakra.span>
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
                        <Image
                          src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/numpy/numpy-original.svg"
                          width={"16px"}
                          height={"auto"}
                        />
                        <chakra.span>NumPy</chakra.span>
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
                        <Image
                          src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/opencv/opencv-original.svg"
                          width={"16px"}
                          height={"auto"}
                        />
                        <chakra.span>OpenCV</chakra.span>
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
                        <chakra.span>Computer Vision</chakra.span>
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
                        <chakra.span>Image Processing</chakra.span>
                      </H4>
                    </Box>
                  </Flex>
                  <Link href="https://github.com/t-tasin/Classroom_Attandance">
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
