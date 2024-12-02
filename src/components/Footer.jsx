import React from "react";
import { Box,Image,Text,Link,Flex,IconButton,Divider } from "@chakra-ui/react";
import { FaEnvelope,FaLinkedin,FaGithub } from "react-icons/fa";

const Footer = () => {
    return (
        <>
        <Box bgColor='#0E1116' p='2rem' height={{base:'55vh',xxm:'40vh',xm:'38vh',sm:'35vh',xmd:'30vh',md:'26vh',slg:'21vh',lg:'35vh',xl:'36vh',dm:'40vh',xxl:'27vh'}} >
            <Box ml='5rem'>
            <Image src='/Portfolio/Black White Minimalist Initials Monogram Jewelry Logo.png' alt='logo' borderRadius='50px' height='70px' ml={{base:'1rem',xxm:'2.5rem',xm:'3rem',sm:'3.5rem',xmd:'15rem',md:'17rem',slg:'22.5rem',lg:'30.8rem',xl:'35.5rem',dm:'33rem',xxl:'50rem'}} mt='rem' mb='0.5rem'/>
            </Box>
            <Text color='white' textAlign='center'>Lifelong learner.</Text>

            <Flex gap={{base:'4rem',xxm:'5rem',xm:'6rem',sm:'6.8rem',xmd:'',md:'',slg:'',lg:'',xl:'5rem',xxl:''}} ml={{base:'',xxm:'0.5rem',xm:'',sm:'',xmd:'11.5rem',md:'13.5rem',slg:'19.5rem',lg:'27.3rem',xl:'34rem',xxl:'43.5rem'}} mt={{base:'3rem',xxm:'',xm:'',sm:'',xmd:'',md:'',slg:'',lg:'',xl:'2rem',xxl:''}}>
                <Link href='mailto:mariamsenzia@gmail.com'>
                    <IconButton borderRadius='50px' ml={{dm:'5rem'}}>
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
            <Box ml={{dm:'5.5rem'}}>
            <Text color='white' ml={{base:'-1.5rem',xxm:'-0.2rem',xm:'0.8rem',sm:'1.5rem',xmd:'12rem',md:'14rem',slg:'21rem',lg:'28.5rem',xl:'33.5rem',xxl:'42rem'}} mt='0.5rem' width={{base:'50rem',xxm:'50rem',xm:'',sm:'',xmd:'',md:'',slg:'',lg:'',xl:'',xxl:''}} >&copy;Copyright {new Date().getFullYear()}. Made by Mariam Senzia</Text>
            </Box>
        </Box>
        </>
    )
}
export default Footer;