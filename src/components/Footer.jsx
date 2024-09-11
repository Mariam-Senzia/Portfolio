import React from "react";
import { Box,Image,Text,Link,Flex,IconButton,Divider } from "@chakra-ui/react";
import { FaEnvelope,FaLinkedin,FaGithub } from "react-icons/fa";

const Footer = () => {
    return (
        <>
        <Box bgColor='#0E1116' p='2rem' height={{base:'55vh',xxm:'40vh',xm:'38vh',sm:'35vh',xmd:'30vh',md:'26vh',slg:'21vh',lg:'35vh',xl:'36vh',xxl:'27vh'}}>
            <Image src='/Portfolio/Black White Minimalist Initials Monogram Jewelry Logo.png' alt='logo' borderRadius='50px' height='70px' ml={{base:'6rem',xxm:'7rem',xm:'8rem',sm:'9rem',xmd:'19.5rem',md:'21.5rem',slg:'27.5rem',lg:'35.5rem',xl:'41.5rem',xxl:'48rem'}} mt='rem' mb='0.5rem'/>
            <Text color='white' textAlign='center'>Lifelong learner.</Text>

            <Flex gap={{base:'4rem',xxm:'5rem',xm:'6rem',sm:'6.8rem',xmd:'',md:'',slg:'',lg:'',xl:'5rem',xxl:''}} ml={{base:'',xxm:'0.5rem',xm:'',sm:'',xmd:'11rem',md:'13rem',slg:'19.5rem',lg:'27.3rem',xl:'35rem',xxl:'41.5rem'}} mt={{base:'3rem',xxm:'',xm:'',sm:'',xmd:'',md:'',slg:'',lg:'',xl:'2rem',xxl:''}}>
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
            <Text color='white' ml={{base:'-1.5rem',xxm:'-0.2rem',xm:'0.8rem',sm:'1.5rem',xmd:'12rem',md:'14rem',slg:'21rem',lg:'28.5rem',xl:'34.5rem',xxl:'40.5rem'}} mt='0.5rem' width={{base:'50rem',xxm:'50rem',xm:'',sm:'',xmd:'',md:'',slg:'',lg:'',xl:'',xxl:''}} >&copy;Copyright {new Date().getFullYear()}. Made by Mariam Senzia</Text>
        </Box>
        </>
    )
}
export default Footer;