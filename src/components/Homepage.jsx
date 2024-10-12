import React from "react";
import { Box,Text,Heading,Image,Flex,Link,IconButton} from "@chakra-ui/react";
import { FaEnvelope,FaLinkedin,FaGithub } from "react-icons/fa";

const Homepage = () => {
    return (
        <>
        <Box bgColor='#F5F5F5' mt={{base:'4.2rem',xxm:'',xm:'',sm:'',xmd:'',md:'',slg:'',lg:'',xl:'5.1rem',xxl:''}} p='3rem' height={{base:'',xxm:'',xm:'',sm:'',xmd:'',md:'',slg:'',lg:'90vh',xl:'88.5vh',xxl:''}} >
            <Flex>
                <Box display={{base:'none',xxm:'',xm:'',sm:'',xmd:'flex',md:'',slg:'',lg:'',xl:'flex',xxl:''}} flexDirection='column' bgColor='#0E1116' ml='-3rem' mt={{base:'2rem',xxm:'',xm:'',sm:'',xmd:'16rem',md:'21rem',slg:'28rem',lg:'12rem',xl:'10rem',xxl:'18rem'}} borderRadius='px' p='0.5rem' height={{base:'',xxm:'',xm:'',sm:'',xmd:'21vh',md:'18.5vh',slg:'12.5rem',lg:'26.5vh',xl:'25vh',xxl:'19vh'}} >
                    <Link href='mailto:mariamsenzia@gmail.com' >
                        <IconButton borderRadius='50px'  mt='1rem'>
                            <FaEnvelope color='#FF474E' size='1.5rem'/>
                        </IconButton>
                    </Link>
                    <Link href='https://www.linkedin.com/in/mariamsenzia/'>
                        <IconButton borderRadius='50px' mt='1rem'>
                            <FaLinkedin color='#FF474E'  size='1.5rem'/>
                        </IconButton>
                    </Link>
                    <Link href='https://github.com/Mariam-Senzia'>
                        <IconButton borderRadius='50px' mt='1rem'>
                            <FaGithub color='#FF474E'  size='1.5rem'/>
                        </IconButton>
                    </Link>
                </Box>

            <Box ml={{dm:'6.5vw'}}>
                <Heading ml={{base:'-2rem',xxm:'-2.1rem',xm:'-1.5rem',sm:'-2.5rem',xmd:'3.5rem',md:'4.5rem',slg:'12rem',lg:'20rem',xl:'26.5rem',xxl:'30rem'}} size={{base:'lg',xxm:'lg',xm:'lg',sm:'xl',xmd:'2xl',md:'2xl',slg:'2xl',lg:'2xl',xl:'2xl',xxl:'3xl'}} width={{base:'100vw',xxm:'102vw',xm:'',sm:'',xmd:'',md:'',slg:'',lg:'',xl:'',xxl:''}}>HI, I'M MARIAM SENZIA</Heading>

                <Text ml={{base:'-2rem',xxm:'',xm:'-1rem',sm:'',xmd:'5rem',md:'6rem',slg:'13.5rem',lg:'21rem',xl:'20.5rem',xxl:'25rem'}} width={{base:'18rem',xxm:'20rem',xm:'',sm:'21.7rem',xmd:'30rem',md:'',slg:'rem',lg:'32rem',xl:'45rem',xxl:''}} textAlign='center' fontSize='lg' mt='1rem'>A passionate Full Stack Developer and DevOps Engineer committed to driving innovation through technology and delivering efficient, scalable solutions.</Text>

                <Image src='https://cdn.pixabay.com/photo/2024/05/20/13/28/ai-generated-8775232_1280.png' alt='coding' height={{base:'',xxm:'',xm:'55vh',sm:'',xmd:'60vh',md:'65vh',slg:'',lg:'56vh',xl:'58vh',xxl:'65vh'}} width={{base:'',xxm:'',xm:'',sm:'',xmd:'',md:'60vh',slg:'',lg:'50vw',xl:'105vh',xxl:''}}  ml={{base:'-2rem',xxm:'-2.2rem',xm:'-2.4rem',sm:'-2rem',xmd:'3rem',md:'2rem',slg:'3rem',lg:'17rem',xl:'18.5rem',xxl:'14rem'}} mt={{base:'1rem',xxm:'',xm:'',sm:'3rem',xmd:'4rem',md:'',slg:'8rem',lg:'3rem',xl:'3rem',xxl:''}} borderRadius='100px'/>
            </Box>

            </Flex>
        </Box>
        </>
    )
}

export default Homepage;