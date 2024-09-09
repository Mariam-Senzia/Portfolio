import React from 'react'
import './App.css'
import { ChakraProvider,Box } from '@chakra-ui/react'
import Navbar from './components/Navbar'
import Homepage from './components/Homepage'
import Aboutme from './components/Aboutme'
import Projects from './components/Projects'
import Footer from './components/Footer'
import theme from './theme/customBreakpoints'

function App() {

  return (
    <>
      <ChakraProvider theme={theme}>
          <Navbar />
          <Box id="home">
            <Homepage />
          </Box>
          <Box id="about">
            <Aboutme />
          </Box>
          <Box id="projects">
            <Projects />
          </Box>
          <Box id='contact'>
            <Footer />
          </Box>
      </ChakraProvider>
      
    </>
  )
}

export default App
