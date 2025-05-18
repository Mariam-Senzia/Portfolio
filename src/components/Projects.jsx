import { Heading,Box,Flex,Image,Button,Text,Divider,Link } from "@chakra-ui/react";

const Projects = () => {

    const myProjects = [
        {
            image:'/Portfolio/Screenshot from 2025-05-18 12-41-59.png',
            title:'DukaNext',
            description:'An eCommerce platform that enables shop owners to create, customize, and manage their own online stores. Built using the MERN stack, where I contributed by developing new features, enhancing existing functionality, and improving the overall user experience.',
            live:'LIVE LINK',
            liveLink:'https://dukanext.co.ke/',
            github:'GITHUB',
            githubLink: 'https://github.com/aknjoroge/vastly-ecommerce-dashboard'
        },
        {
            image:'/Portfolio/Screenshot from 2024-11-30 20-11-26.png',
            title:'BlogNest',
            description:'BlogNest is a blog platform where users can view blogs, filter them by category, and publish their own after signing in. Built with the MERN stack (MongoDB, Express, React, Node.js), it demonstrates my skills in full-stack development.',
            live:'LIVE LINK',
            liveLink:'https://blog-nest-xi.vercel.app/',
            github:'GITHUB',
            githubLink: 'https://github.com/Mariam-Senzia/BlogNest'
        },
        {
            image:'/Portfolio/Screenshot from 2024-09-05 16-40-14.png',
            title:'Safiri Africa',
            description:'Safiri Africa provides a centralized platform where travelers can access comprehensive and unlimited information about African travel destinations.It provides details about various African countries, including photos, maps, and currency information. This makes travel planning more accessible and engaging, particularly for those who may not be familiar with the continent.',
            live:'LIVE LINK',
            liveLink:'https://safiri-africa-beta.vercel.app/',
            github:'GITHUB',
            githubLink: 'https://github.com/Mariam-Senzia/Safiri-Africa'
        }
    ]

    return (
        <>
        <Box mt={{base:'103rem',xxm:'98rem',xm:'92rem',sm:'88rem',xmd:'85rem',md:'80rem',slg:'85rem',lg:'24.4rem',xl:'15rem',xxl:'24rem'}} bgColor='#F5F5F5' p='3rem' textAlign='center' height={{base:'350vh',xxm:'265vh',xm:'250vh',sm:'230vh',xmd:'200vh',md:'180vh',slg:'102vh',lg:'150vh',xl:'140vh',dm:'110vh',xxl:'130vh'}} >
            <Heading mt={{dm:'4rem'}}>FEATURED PROJECTS</Heading>
            <Divider borderColor='red' borderWidth='2px' mt='0.5rem' width={{base:'4rem',xxm:'',xm:'',sm:'',xmd:'',md:'',slg:'',lg:'',xl:'10rem',dm:'20rem',xxl:''}} ml={{base:'5rem',xxm:'6rem',xm:'7rem',sm:'8rem',xmd:'18.5rem',md:'21rem',slg:'26rem',lg:'35rem',xl:'38rem',dm:'40rem',xxl:'44rem'}}/>

            {myProjects.map((project) => {
                return <Flex key={project.title} mt={{base:'3rem',xxm:'4rem',xm:'',sm:'',xmd:'5rem',md:'',slg:'',lg:'',xl:'5rem',xxl:''}} ml={{base:'1.5rem',xxm:'2rem',xm:'2.5rem',sm:'',xmd:'7rem',md:'8rem',slg:'3rem',lg:'8.5rem',xl:'10.5rem',dm:'',xxl:'10.5rem'}} flexDirection={{base:'column',xxm:'',xm:'',sm:'',xmd:'',md:'',slg:'row',lg:'',xl:'row',xxl:''}}>

                <Image src={project.image} alt='image' width={{base:'450vw',xxm:'',xm:'',sm:'',xmd:'',md:'70vw',slg:'40vw',lg:'30vw',xl:'32vw',dm:'600px',xxl:''}} height={{base:'',xmd:'25vh',slg:'22.8vh',lg:'32vh',dm:'35vh',xxl:'25.5vh'}} borderRadius='10px' ml={{base:'-1.5rem',xxm:'',xm:'',sm:'',xmd:'-3rem',md:'',slg:'',lg:'',xl:'0rem',xxl:''}} />

                <Box ml={{base:'-1.5rem',xxm:'',xm:'',sm:'',xmd:'-2.5rem',md:'',slg:'8rem',lg:'9rem',xl:'10rem',xxl:'15rem'}} textAlign='left'>
                    <Heading ml={{base:'',xxm:'',xm:'rem',sm:'',xmd:'rem',md:'',slg:'0',lg:'',xl:'0',dm:'2.5rem',xxl:''}} mt={{base:'1rem',xxm:'',xm:'',sm:'',xmd:'2rem',md:'',slg:'0',lg:'',xl:'',xxl:''}}>{project.title}</Heading>
                    <Text width={{base:'14rem',xxm:'15rem',xm:'17rem',sm:'18rem',xmd:'35rem',md:'',slg:'24rem',lg:'29.5rem',dm:'',xl:'27rem',xxl:'33rem'}} ml={{dm:'2.5rem'}} mt='1rem'>{project.description}</Text>

                    <Flex mt='1rem' ml={{base:'rem',xxm:'',xm:'',sm:'',xmd:'',md:'',slg:'0',lg:'',xl:'0',xxl:''}} >
                        <Link href={project.liveLink} target='_blank'>
                        <Button bgColor='#F75E50' color='white' colorScheme='#F75E50' ml={{dm:'2.5rem'}}>{project.live}</Button>
                        </Link>

                        <Link href={project.githubLink} target='_blank'>
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