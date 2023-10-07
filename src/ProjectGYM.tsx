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
} from "@chakra-ui/react";
import { H4, H6 } from "./Typography";

export default function ProjectGYM() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <Box>
      <Card maxW={"sm"}>
        <CardBody>
          <Center marginBottom={"4"}>
            <Image
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original-wordmark.svg"
              alt="AI GYM Trainer"
              height={"100px"}
            />
          </Center>
          <Stack>
            <Heading size="md">AI GYM Trainer</Heading>
            <H6>
              A real-time Python tool leveraging computer vision to track and
              visualize exercise progress via webcam input.
            </H6>
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
                  <chakra.span>Mediapipe</chakra.span>
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
          </Stack>
        </CardBody>
        <CardFooter>
          <Button onClick={onOpen}>Details</Button>
          <Modal isOpen={isOpen} onClose={onClose} isCentered>
            <ModalOverlay />
            <ModalContent>
              <ModalHeader>AI GYM Trainer</ModalHeader>
              <ModalCloseButton />
              <ModalBody>
                <H6>
                  Harnessing the power of computer vision and pose estimation,
                  the AI-GYM Trainer is a dynamic Python application tailored to
                  monitor exercise progress in real-time. Integrating OpenCV and
                  Mediapipe, it processes live webcam footage, detecting body
                  poses, calculating joint angles, and tracking repetitions –
                  offering users an immediate visual on their workout
                  performance. Its modular architecture, consisting of a video
                  input processor and a pose detector, ensures efficient
                  performance, while the adaptability of the framework enables
                  tracking of varied exercises. Dive deeper into its workings or
                  customize it further here.
                </H6>
              </ModalBody>
            </ModalContent>
          </Modal>
        </CardFooter>
      </Card>
    </Box>
  );
}
