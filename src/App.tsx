import { Box, Flex, Image, chakra } from "@chakra-ui/react";
import { H1, H2, H4 } from "./typography";
import ProPic from "./assets/propic.png";
import SkillSection from "./skill";
import Footer from "./footer";
import ProjectGYM from "./ProjectGYM";
import ProjectFace from "./ProjectFace";
import ProjectParking from "./ProjectParking";
import ProjectPizza from "./ProjectPizza";

export default function App() {
  return (
    <Flex justifyContent={"center"}>
      <Flex width={{ base: "100%", lg: "600px" }} direction={"column"}>
        <Flex
          width={"100%"}
          height={"100px"}
          //bgColor={"gray.100"}
          justifyContent={"center"}
          alignItems={"center"}
        >
          <H1 textAlign={"center"}>KM Khalid Saifullah</H1>
        </Flex>
        <Flex
          marginTop={{ base: 8, lg: 24 }}
          width={"100%"}
          direction={{ base: "column", lg: "row" }}
          paddingLeft={{ base: 6, lg: 0 }}
          paddingRight={{ base: 6, lg: 0 }}
          gap={5}
        >
          <Flex
            width={{ base: "100%", lg: "40%" }}
            justifyContent={"center"}
            alignItems={"center"}
          >
            <Box width={"fit-content"} position={"relative"}>
              {/* <Box
                borderRadius={"50%"}
                bgColor={"gray.100"}
                width={"50px"}
                height={"50px"}
                position={"absolute"}
                top={-10}
                right={-5}
                zIndex={-1}
              /> */}
              <Image src={ProPic} borderRadius="full" boxSize="220px" />
              {/* <Box
                borderRadius={"50%"}
                bgColor={"gray.100"}
                width={"120px"}
                height={"120px"}
                position={"absolute"}
                bottom={-5}
                left={-20}
                zIndex={-1}
              /> */}
            </Box>
          </Flex>
          <Box
            width={{ base: "100%", lg: "60%" }}
            paddingTop={{ base: 4, lg: 8 }}
            paddingRight={6}
            marginBottom={{ base: 6, lg: 0 }}
          >
            <H1 marginBottom={6}>Hey, This is Tasin</H1>
            <H4 fontSize={"16px"}>
              I am a Junior at The College of Wooster majoring in Computer
              Science and Business Economics, I am deeply intrigued by the power
              of emerging technologies to shape our future. My academic pursuits
              lie at the intersection of tech and economics, where I aim to
              leverage interdisciplinary approaches to improve social welfare
              and quality of life.
            </H4>
          </Box>
        </Flex>
        <H2 margin={10} textAlign={"center"}>
          Experience
        </H2>
        <Box paddingLeft={{ base: 6, lg: 0 }} paddingRight={{ base: 6, lg: 0 }}>
          <H4 fontSize={"20px"} fontWeight={600} marginBottom={1}>
            <chakra.span>Software Engineer Intern | </chakra.span>
            <chakra.span>Jomee Jomaa Inc.</chakra.span>
          </H4>
          <H4 fontSize={"16px"} marginBottom={2.5} color={"gray.500"}>
            May 2023 - Present
          </H4>
          <H4 fontSize={"16px"} lineHeight={"20px"}>
            During my tenure as a Software Engineer Intern at Jomee Jomaa Inc.
            in Wilmington, Delaware, I fortified platform security by devising
            secret tokens, negating password storage, and crafting related APIs
            with Django Rest Framework. I streamlined user transactions by
            introducing the "Cash Balance" feature for quick property purchases
            and bank transfers. I enhanced user experience by designing a
            responsive profile page using ReactJS and Tailwind UI, integrating a
            one-tap "Offering" slider on the homepage, and incorporating a
            secure, time-bound OTP validation system.
          </H4>
        </Box>
        <Box
          marginTop={8}
          paddingLeft={{ base: 6, lg: 0 }}
          paddingRight={{ base: 6, lg: 0 }}
        >
          <H4 fontWeight={600} fontSize={"20px"} marginBottom={1}>
            <chakra.span>Software Development Intern | </chakra.span>
            <chakra.span>Shiree Pvt. Ltd.</chakra.span>
          </H4>
          <H4 fontSize={"16px"} marginBottom={2.5} color={"gray.500"}>
            January 2023 - April 2023
          </H4>
          <H4 fontSize={"16px"} lineHeight={"20px"}>
            As a Software Developer Intern at Shiree Pvt. Ltd., I spearheaded
            the creation of a user-centric dashboard in ReactJS, simplifying the
            hiring journey. My backend contributions, anchored in NodeJS and
            MongoDB, facilitated advanced data queries and robust statistics. I
            harnessed D3.js to integrate rich data visualization tools,
            delivering sharp analytics for recruiters. Committed to excellence,
            I conducted comprehensive tests across the platform using Jest,
            achieving a stellar 99.99% uptime and ensuring impeccable software
            integrity.
          </H4>
        </Box>
        <Box paddingLeft={{ base: 6, lg: 0 }} paddingRight={{ base: 6, lg: 0 }}>
          <SkillSection />
        </Box>
        <H2 textAlign={"center"} margin={10}>
          Projects
        </H2>
        <Flex
          width={"100%"}
          justifyContent={"center"}
          wrap={"wrap"}
          gap={8}
          paddingLeft={{ base: 6, lg: 0 }}
          paddingRight={{ base: 6, lg: 0 }}
        >
          <ProjectGYM />
          <ProjectFace />
          <ProjectParking />
          <ProjectPizza />
        </Flex>
        <Footer />
      </Flex>
    </Flex>
  );
}
