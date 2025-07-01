import {
  Box,
  Text,
  Heading,
  Image,
  Link,
  IconButton,
  Button,
  Divider,
} from "@chakra-ui/react";
import { FaEnvelope, FaLinkedin, FaGithub } from "react-icons/fa";

const Homepage = () => {
  return (
    <>
      <Box
        bgColor="#F5F5F5"
        height={{
          base: "",
          xxm: "",
          xm: "",
          sm: "",
          xmd: "",
          md: "",
          slg: "",
          lg: "90vh",
          xl: "88.5vh",
          xxl: "",
        }}
        mt={{
          base: "4.2rem",
          xxm: "",
          xm: "",
          sm: "",
          xmd: "",
          md: "",
          slg: "",
          lg: "",
          xl: "5.1rem",
          xxl: "",
        }}
        display={{ base: "", lg: "flex" }}
        justifyContent="space-between"
      >
        <Box
          mt={{ xmd: "5rem", lg: "9rem", xl: "12rem" }}
          width={{ base: "", lg: "52vw", xl: "45vw" }}
          p={{ base: "2rem", lg: "0rem" }}
          textAlign={{ base: "center", lg: "left" }}
          pt={{ xmd: "5rem", xl: "0" }}
        >
          <Heading
            ml={{ lg: "9.4rem", xl: "13rem", dm: "12.8rem" }}
            size={{ base: "xl", xmd: "3xl", lg: "2xl", xl: "2xl", dm: "3xl" }}
          >
            Hi, I&apos;m Mariam Senzia
          </Heading>

          <Text
            mt="1rem"
            ml={{ lg: "9.5rem", xl: "13rem" }}
            fontSize={{ base: "lg", xmd: "2xl", lg: "xl", xl: "xl", dm: "2xl" }}
            color="#93959F"
          >
            A passionate Full Stack Developer and DevOps Engineer dedicated to
            building high-quality web applications that solve real business
            problems.
          </Text>

          <Box
            mt="1rem"
            ml={{ lg: "9.5rem", xl: "13rem" }}
            display="flex"
            gap="10"
            justifyContent={{ base: "center", lg: "left" }}
          >
            <Link href="https://github.com/Mariam-Senzia">
              <IconButton
                borderRadius="50px"
                mt="1rem"
                backgroundColor="#3A3B41"
                colorScheme="#010409"
                _hover={{ backgroundColor: "black" }}
              >
                <FaGithub color="white" size="1.5rem" />
              </IconButton>
            </Link>
            <Link href="https://www.linkedin.com/in/mariamsenzia/">
              <IconButton
                borderRadius="50px"
                mt="1rem"
                backgroundColor="#0a66c2"
                colorScheme="#010409"
                _hover={{ backgroundColor: "black" }}
              >
                <FaLinkedin color="white" size="1.5rem" />
              </IconButton>
            </Link>
            <Link href="mailto:mariamsenzia@gmail.com">
              <IconButton
                borderRadius="50px"
                mt="1rem"
                backgroundColor="#FF474E"
                colorScheme="#010409"
                _hover={{ backgroundColor: "black" }}
              >
                <FaEnvelope color="white" size="1.5rem" />
              </IconButton>
            </Link>
          </Box>

          <Divider
            display={{ base: "none", xmd: "block" }}
            mt={{ xmd: "2rem", xl: "2rem" }}
            ml={{ lg: "9.5rem", xl: "13rem" }}
            borderColor="#D4D5D9"
            width={{ xmd: "", lg: "38vw", xl: "33.5vw" }}
          />

          <Box
            mt="2rem"
            ml={{ lg: "9.5rem", xl: "13rem" }}
            display="flex"
            gap="8"
            justifyContent={{ base: "center", lg: "left" }}
          >
            <Link href="#projects" display={{ base: "none", xmd: "block" }}>
              <Button
                variant="outline"
                backgroundColor="#FF474E"
                colorScheme="#FF474E"
                color="white"
                _hover={{
                  backgroundColor: "white",
                  color: "#FF474E",
                  borderColor: "#FF474E",
                }}
                size="lg"
              >
                MY PROJECTS
              </Button>
            </Link>

            <Button
              as="a"
              href="/Portfolio/public/Mariam Senzia Resume.pdf"
              download
              variant="outline"
              backgroundColor="#FF474E"
              colorScheme="#FF474E"
              color="white"
              _hover={{
                backgroundColor: "white",
                color: "#FF474E",
                borderColor: "#FF474E",
              }}
              size="lg"
            >
              DOWNLOAD MY RESUME
            </Button>
          </Box>
        </Box>
        <Box
          mr={{ lg: "6rem", xl: "7rem", dm: "11rem" }}
          mt={{ lg: "3rem", xl: "4.5rem" }}
        >
          <Image
            src="/Portfolio/public/girl-code-removebg-preview.png"
            alt="coding"
            height={{ xl: "65vh" }}
            ml={{ xmd: "auto", lg: "0" }}
            mr={{ xmd: "auto" }}
          />
        </Box>
      </Box>
    </>
  );
};

export default Homepage;
