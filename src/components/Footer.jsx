import React from "react";
import { Box,Image,Text,Link,Flex,IconButton,Divider } from "@chakra-ui/react";
import { FaEnvelope,FaLinkedin,FaGithub } from "react-icons/fa";

const Footer = () => {
    return (
        <>
        <Box bgColor='#0E1116' p='2rem' height={{base:'55vh',xxm:'40vh',xm:'38vh',sm:'35vh',xmd:'30vh',md:'26vh',slg:'21vh',lg:'35vh',xl:'40vh',dm:'40vh',xxl:'30vh'}} >
            <Box display='flex' justifyContent='center'>
                <Box>
                    <Image src='/Portfolio/Black White Minimalist Initials Monogram Jewelry Logo.png' alt='logo' borderRadius='50px' height='70px' mt='rem' mb='0.5rem'/>
                </Box>
            </Box>
            <Text color='white' textAlign='center'>Lifelong learner.</Text>

            <Flex justifyContent='center' gap={{base:'4rem',xxm:'5rem',xm:'6rem',sm:'6.8rem',xmd:'',md:'',slg:'',lg:'',xl:'5rem',xxl:''}} mt={{base:'3rem',xxm:'',xm:'',sm:'',xmd:'',md:'',slg:'',lg:'',xl:'2rem',xxl:''}}>
                <Link href='mailto:mariamsenzia@gmail.com'>
                    <IconButton borderRadius='50px'>
                        <FaEnvelope color='#FF474E' size='1.5rem'/>
                    </IconButton>
                </Link>
                <Link href='https://www.linkedin.com/in/mariamsenzia/'>
                    <IconButton borderRadius='50px'>
                        <FaLinkedin color='#FF474E'  size='1.5rem'/>
                    </IconButton>
                </Link>
                <Link href='https://github.com/Mariam-Senzia'>
                    <IconButton borderRadius='50px'>
                        <FaGithub color='#FF474E'  size='1.5rem'/>
                    </IconButton>
                </Link>
            </Flex>

            <Divider mt={{base:'1rem',xxm:'',xm:'',sm:'',xmd:'',md:'',slg:'',lg:'',xl:'2rem',xxl:''}}/>
            <Box width='100%' display='flex' justifyContent='center' alignItems='center'> 
                <Text textAlign='center' color='white' mt='0.5rem' width={{base:'50rem',xxm:'50rem',xm:'',sm:'',xmd:'',md:'',slg:'',lg:'',xl:'',xxl:''}} >&copy;Copyright {new Date().getFullYear()}. Made by Mariam Senzia</Text>
            </Box>
        </Box>
        </>
    )
}
export default Footer;