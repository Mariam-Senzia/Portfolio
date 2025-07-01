import { Image, Text, Box, Flex, Link, Button } from "@chakra-ui/react";

const Navbar = () => {
  return (
    <>
      <Box
        display="flex"
        position="fixed"
        bgColor="white"
        mt={{
          base: "-4.2rem",
          xxm: "",
          xm: "",
          sm: "",
          xmd: "",
          md: "",
          slg: "",
          lg: "",
          xl: "-5.1rem",
          xxl: "",
        }}
        width="100vw"
        zIndex="100"
      >
        <Link href="#home">
          <Image
            src="/Portfolio/Black White Minimalist Initials Monogram Jewelry Logo.png"
            alt="logo"
            borderRadius="50px"
            height={{
              base: "60px",
              xxm: "",
              xm: "",
              sm: "",
              xmd: "",
              md: "",
              slg: "",
              lg: "",
              xl: "70px",
              xxl: "",
            }}
            ml={{
              base: "1rem",
              xxm: "",
              xm: "1.5rem",
              sm: "2rem",
              xmd: "",
              md: "",
              slg: "5rem",
              lg: "9rem",
              xl: "12.5rem",
              dm: "13rem",
              xxl: "",
            }}
            mt="0.3rem"
            mb="0.3rem"
          />
        </Link>

        <Flex
          mr="rem"
          mt="1.7rem"
          ml={{
            base: "",
            xxm: "",
            xm: "",
            sm: "",
            xmd: "10rem",
            md: "13rem",
            slg: "19rem",
            lg: "23rem",
            xl: "26rem",
            xxl: "45rem",
          }}
          display={{
            base: "none",
            xxm: "",
            xm: "",
            sm: "",
            xmd: "flex",
            md: "",
            slg: "",
            lg: "",
            xl: "flex",
            xxl: "",
          }}
        >
          <Link href="#home" _hover={{ textDecoration: "none" }}>
            <Text
              mr={{ base: "5.5rem", xmd: "4.8rem", slg: "7rem", dm: "8rem" }}
              ml={{ dm: "rem" }}
              _hover={{ color: "#FF5A5F" }}
              fontSize="xl"
            >
              Home
            </Text>
          </Link>

          <Link href="#about" _hover={{ textDecoration: "none" }}>
            <Text
              mr={{ base: "5.5rem", xmd: "4.8rem", slg: "7rem", dm: "8rem" }}
              _hover={{ color: "#FF5A5F" }}
              fontSize="xl"
            >
              About
            </Text>
          </Link>

          <Link href="#projects" _hover={{ textDecoration: "none" }}>
            <Text
              mr={{ base: "5.5rem", xmd: "4.8rem", slg: "7rem", dm: "8rem" }}
              _hover={{ color: "#FF5A5F" }}
              fontSize="xl"
            >
              Projects
            </Text>
          </Link>

          <Link href="#contact" _hover={{ textDecoration: "none" }}>
            <Text _hover={{ color: "#FF5A5F" }} fontSize="xl">
              Contact
            </Text>
          </Link>
        </Flex>

        {/* mobile display only */}
        <Link
          href="#projects"
          display={{
            base: "",
            xxm: "",
            xm: "",
            sm: "",
            xmd: "none",
            md: "none",
            slg: "none",
            lg: "none",
            xl: "none",
            xxl: "none",
          }}
        >
          <Button
            variant="outline"
            bgColor="#FF474E"
            colorScheme="#FF474E"
            color="white"
            borderColor="#FF474E"
            ml={{ base: "8rem", xxm: "10.5rem", xm: "11.5rem", sm: "12rem" }}
            mt={{ base: "1rem", xxm: "", xm: "", sm: "" }}
            borderRadius="5px"
            _hover={{ color: "#FF474E", bgColor: "white" }}
          >
            Projects
          </Button>
        </Link>
      </Box>
    </>
  );
};

export default Navbar;
