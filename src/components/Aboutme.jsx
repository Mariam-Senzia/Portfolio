import { Heading,Text,Box,Divider,Grid, Card, CardBody,Stack, UnorderedList,ListItem} from "@chakra-ui/react";

const Aboutme = () => {
    const skills = [
        {
            title:'FrontEnd Developer',
            description:'I create responsive, user-friendly interfaces that prioritize seamless interaction and performance.',
            subtitle:'Languages :',
            languages:'JavaScript, TypeScript, HTML, CSS',
            devtools:'Dev Tools :',
            tools: ['React','Next','Zustand','Chakra UI','Tailwind CSS','Git & Github','Responsive Design','Vercel']
        },
        {
            title:'BackEnd Developer',
            description:'I build scalable, secure backend systems that power efficient data management and smooth user experiences.',
            subtitle:'Languages :',
            languages:'Python, JavaScript', 
            devtools:'Dev Tools :',
            tools:['Flask','Node.js','Express.js','PostgreSQL, SQLite, MongoDB','Render']
        },
        {
            title: 'CMS & Web Platforms',
            description: 'I build and customize websites using content management systems, ensuring flexibility, responsiveness, and user-friendly design.',
            languages: '',
            devtools: 'Tools & Platforms:',
            subtitle: '',
            tools: ['WordPress', 'Elementor', 'Salient', 'cPanel', 'SEO Optimization', 'Site Deployment']
        },
        {
            title:'DevOps',
            description:'I streamline development and operations through automation, continuous integration, and scalable deployment.',
            subtitle:'',
            languages:'',
            devtools:'Dev Tools :',
            tools:['Docker','Kubernetes','CI/CD (Jenkins, GitHub Actions)','Infrastructure as Code (Ansible)','Cloud Platforms (AWS, GCP)','Agile & Scalable Deployments']
        }
    ]
    return (
        <>
         <Box bgColor='#FF5A5F' height={{base:'95vh',xxm:'80vh',xm:'',sm:'',xmd:'52vh',md:'',slg:'35vh',lg:'55vh',xl:'60vh',xxl:'38vh'}} p='2rem' textAlign='center' color='white' mt={{base:'rem',xxm:'rem',xm:'',sm:'',xmd:'',md:'',slg:'',lg:'',xl:'',xxl:''}}>
            <Heading>ABOUT ME</Heading>
            <Divider width={{base:'50vh',xxm:'18.5rem',xm:'20rem',sm:'21.5rem',xmd:'41.5rem',md:'45rem',slg:'',lg:'50rem',xl:'55rem',xxl:'65rem'}} ml={{base:'',xxm:'',xm:'',sm:'',xmd:'1rem',md:'',slg:'7rem',lg:'13rem',xl:'17rem',dm:'22.8rem',xxl:''}}/>

            <Box ml={{dm:'6.8rem'}}>
            <Text width={{base:'',xxm:'18rem',xm:'20rem',sm:'21.5rem',xmd:'40rem',md:'43rem',slg:'',lg:'',xl:'55rem',xxl:''}} ml={{base:'',xxm:'',xm:'',sm:'',xmd:'2rem',md:'',slg:'8rem',lg:'16rem',xl:'17rem',xxl:'21rem'}} mt='1rem'>{"I focus on creating seamless user experiences on the frontend and building scalable, efficient systems on the backend. I'm always eager to learn,collaborate and thrive on tackling new challenges and driving continuous improvement."}</Text>
            </Box>

            <Grid templateColumns={{base:'repeat(1,1fr)',xxm:'',xm:'',sm:'',xmd:'repeat(1,1fr)',md:'',slg:'repeat(2,1fr)',lg:'repeat(2,1fr)',xl:'repeat(4,1fr)',xxl:'repeat(4,1fr)'}} gap={{base:'3',xxm:'',xm:'',sm:'',xmd:'',md:'',slg:'',lg:'',xl:'0',xxl:''}} width={{base:'',xxm:'',xm:'',sm:'',xmd:'',md:'',slg:'',lg:'40rem',xl:'40rem',xxl:''}} ml={{base:'-0.5rem',xxm:'0.8rem',xm:'0.6rem',sm:'0.8rem',xmd:'7rem',md:'8.6rem',slg:'-0.8rem',lg:'7.5rem',xl:'-1.7rem',dm:'0.4rem',xxl:'2.5rem'}} mt='2rem'>
            {skills.map((skill) => {
                return <Card maxW='' width={{base:'17rem',xxm:'',xm:'19rem',sm:'20.5rem',xmd:'30rem',md:'',slg:'',lg:'30rem',xl:'22.1rem',xxl:'26.2rem'}} borderWidth='2px' borderColor='' key={skill.title}>
                <CardBody>
                  <Stack mt='6' spacing='3'>
                    <Heading size='md' mt='-1.5rem'>{skill.title}</Heading>

                    <Text>{skill.description}</Text>
                    <Text mt='1rem' color='#FF474E'>{skill.subtitle}</Text>
                    <Text>{skill.languages}</Text>
                    <Text mt='2rem' color='#FF474E'>{skill.devtools}</Text>
                    
                    {skill.tools.map((tool) => {
                        return <UnorderedList styleType='none' key={tool}>
                            <ListItem>{tool}</ListItem>
                        </UnorderedList>
                    })}
                  </Stack>
                </CardBody>
              </Card>
            })}
            </Grid>

         </Box>
        </>
    )
}
export default Aboutme;