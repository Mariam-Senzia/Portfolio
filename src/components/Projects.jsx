import React from "react";
import { Heading,Box,Flex,Image,Button,Text,Divider,Link } from "@chakra-ui/react";

const Projects = () => {

    const myProjects = [
        {
            image:'/Portfolio/Screenshot from 2024-09-05 16-40-14.png',
            title:'Safiri Africa',
            description:'Safiri Africa provides a centralized platform where travelers can access comprehensive and limited information about African travel destinations.It provides details about various African countries, including photos, maps, and currency information. This makes travel planning more accessible and engaging, particularly for those who may not be familiar with the continent.',
            live:'LIVE LINK',
            liveLink:'',
            github:'GITHUB',
            githubLink: 'https://github.com/Mariam-Senzia/Safiri-Africa'
        }
    ]

    return (
        <>
        <Box mt={{base:'103rem',xxm:'98rem',xm:'92rem',sm:'88rem',xmd:'85rem',md:'80rem',slg:'85rem',lg:'24.4rem',xl:'20.5rem',xxl:'24rem'}} bgColor='#F5F5F5' p='3rem' textAlign='center' height={{base:'150vh',xxm:'',xm:'',sm:'',xmd:'',md:'100vh',slg:'90vh',lg:'',xl:'90vh',xxl:''}} >
            <Heading>FEATURED PROJECTS</Heading>
            <Divider borderColor='red' borderWidth='2px' mt='0.5rem' width={{base:'4rem',xxm:'',xm:'',sm:'',xmd:'',md:'',slg:'',lg:'',xl:'10rem',xxl:''}} ml={{base:'5rem',xxm:'6rem',xm:'7rem',sm:'8rem',xmd:'18.5rem',md:'21rem',slg:'26rem',lg:'35rem',xl:'38rem',xxl:'44rem'}}/>

            {myProjects.map((project) => {
                return <Flex key={project.title} mt={{base:'3rem',xxm:'4rem',xm:'',sm:'',xmd:'5rem',md:'',slg:'',lg:'',xl:'5rem',xxl:''}} ml={{base:'',xxm:'',xm:'',sm:'',xmd:'7rem',md:'8.5rem',slg:'-0.5rem',lg:'7rem',xl:'10.5rem',xxl:'11rem'}} flexDirection={{base:'column',xxm:'',xm:'',sm:'',xmd:'',md:'',slg:'row',lg:'',xl:'row',xxl:''}}>

                <Image src={project.image} alt='image' width='450px' borderRadius='10px'/>

                <Box ml={{base:'-1.5rem',xxm:'',xm:'',sm:'-0.5rem',xmd:'',md:'',slg:'8rem',lg:'9rem',xl:'10rem',xxl:'21rem'}} textAlign='left'>
                    <Heading ml={{base:'3.5rem',xxm:'',xm:'4.5rem',sm:'5rem',xmd:'8.5rem',md:'',slg:'0',lg:'',xl:'0',xxl:''}} mt={{base:'1rem',xxm:'',xm:'',sm:'',xmd:'2rem',md:'',slg:'0',lg:'',xl:'',xxl:''}}>{project.title}</Heading>
                    <Text width={{base:'18.5rem',xxm:'20rem',xm:'21.7rem',sm:'24rem',xmd:'29rem',md:'',slg:'24rem',lg:'24.5rem',xl:'27rem',xxl:''}} mt='1rem'>{project.description}</Text>

                    <Flex mt='1rem' ml={{base:'3rem',xxm:'',xm:'3.8rem',sm:'4.5rem',xmd:'8.5rem',md:'',slg:'0',lg:'',xl:'0',xxl:''}} >
                        <Button bgColor='#F75E50' color='white' colorScheme='#F75E50'>{project.live}</Button>
                        <Link href={project.githubLink}>
                        <Button bgColor='#F75E50' ml='1rem' color='white' colorScheme='#F75E50'>{project.github}</Button>
                        </Link>
                    </Flex>
                </Box>

            </Flex>
            })}
            
        </Box>
        </>
    )
}
export default Projects;