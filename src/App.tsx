import { Box, Flex, Image, chakra } from "@chakra-ui/react";
import { H1, H2, H4 } from "./Typography";
import ProPic from "./assets/propic.png";
import SkillSection from "./skill";
import Footer from "./footer";
import ProjectGYM from "./ProjectGYM";

export default function App() {
  return (
    <Box
      marginRight={{ base: 6, lg: "200px" }}
      marginLeft={{ base: 6, lg: "200px" }}
    >
      <Flex
        width={"100%"}
        height={"100px"}
        bgColor={"gray.100"}
        justifyContent={"center"}
        alignItems={"center"}
      >
        <H1 textAlign={"center"}>KM Khalid Saifullah</H1>
      </Flex>
      <Flex
        marginTop={24}
        width={"100%"}
        direction={{ base: "column", lg: "row" }}
      >
        <Box
          width={{ base: "100%", lg: "60%" }}
          paddingTop={8}
          paddingRight={6}
        >
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
          width={{ base: "100%", lg: "40%" }}
          justifyContent={"center"}
          alignItems={"center"}
        >
          <Box width={"fit-content"} position={"relative"}>
            <Image src={ProPic} borderRadius="full" boxSize="220px" />
            <Box
              borderRadius={"50%"}
              bgColor={"gray.100"}
              width={"120px"}
              height={"120px"}
              position={"absolute"}
              bottom={-5}
              right={-20}
              zIndex={-1}
            />
          </Box>
        </Flex>
      </Flex>
      <H2 margin={10} textAlign={"center"}>
        Experience
      </H2>
      <Box>
        <H4 fontWeight={600}>
          <chakra.span>Software Engineer Intern | </chakra.span>
          <chakra.span>Jomee Jomaa Inc.</chakra.span>
        </H4>
        <H4 fontSize={"16px"}>May 2023 - Present</H4>
        <H4 fontSize={"16px"} lineHeight={"20px"}>
          During my tenure as a Software Engineer Intern at Jomee Jomaa Inc. in
          Wilmington, Delaware, I fortified platform security by devising secret
          tokens, negating password storage, and crafting related APIs with
          Django Rest Framework. I streamlined user transactions by introducing
          the "Cash Balance" feature for quick property purchases and bank
          transfers. I enhanced user experience by designing a responsive
          profile page using ReactJS and Tailwind UI, integrating a one-tap
          "Offering" slider on the homepage, and incorporating a secure,
          time-bound OTP validation system.
        </H4>
      </Box>
      <Box marginTop={8}>
        <H4 fontWeight={600}>
          <chakra.span>Software Development Intern | </chakra.span>
          <chakra.span>Shiree Pvt. Ltd.</chakra.span>
        </H4>
        <H4 fontSize={"16px"}>January 2023 - April 2023</H4>
        <H4 fontSize={"16px"} lineHeight={"20px"}>
          As a Software Developer Intern at Shiree Pvt. Ltd., I spearheaded the
          creation of a user-centric dashboard in ReactJS, simplifying the
          hiring journey. My backend contributions, anchored in NodeJS and
          MongoDB, facilitated advanced data queries and robust statistics. I
          harnessed D3.js to integrate rich data visualization tools, delivering
          sharp analytics for recruiters. Committed to excellence, I conducted
          comprehensive tests across the platform using Jest, achieving a
          stellar 99.99% uptime and ensuring impeccable software integrity.
        </H4>
      </Box>
      <SkillSection />
      <H2 textAlign={"center"} margin={10}>
        Projects
      </H2>
      <Flex width={"100%"} justifyContent={"space-between"} wrap={"wrap"}>
        <ProjectGYM />
      </Flex>
      <Footer />
    </Box>
  );
}
