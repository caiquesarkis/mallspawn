import {
  Box,
  ChakraProvider,
  Heading,
  HStack,
  Image,
  Text,
  VStack
} from "@chakra-ui/react"
import { Navbar } from "./components/navbar"
import { extendTheme } from '@chakra-ui/react'
import { motion } from 'framer-motion'


// example theme
const theme = extendTheme({
  fontSizes: {
    xs: "0.75rem",
    sm: "0.875rem",
    md: "1rem",
    lg: "1.125rem",
    xl: "1.25rem",
    "2xl": "1.5rem",
    "3xl": "1.875rem",
    "4xl": "2.25rem",
    "5xl": "3rem",
    "6xl": "3.75rem",
    "7xl": "4.5rem",
    "8xl": "6rem",
    "9xl": "8rem",
  },
  fontWeights: {
    hairline: 100,
    thin: 200,
    light: 300,
    normal: 400,
    medium: 500,
    semibold: 600,
    bold: 700,
    extrabold: 800,
    black: 900,
  },
  lineHeights: {
    normal: "normal",
    none: 1,
    shorter: 1.25,
    short: 1.375,
    base: 1.5,
    tall: 1.625,
    taller: "2",
    "3": ".75rem",
    "4": "1rem",
    "5": "1.25rem",
    "6": "1.5rem",
    "7": "1.75rem",
    "8": "2rem",
    "9": "2.25rem",
    "10": "2.5rem",
  },
  letterSpacings: {
    tighter: "-0.05em",
    tight: "-0.025em",
    normal: "0",
    wide: "0.025em",
    wider: "0.05em",
    widest: "0.1em",
  },
});


export const App = () => {
  return(<ChakraProvider theme={theme}>
    <Navbar/>
    
    <HStack
      justifyContent="space-between"
      mx={48}
      mt={24}
    >
      <VStack>
        <Heading
          maxW={500}
          size="3xl"
          textAlign="left"
          mb={4}
        >
          <Text colorScheme="blackAlpha" pr={4} bg="blackAlpha.400" as="span">Mallspaw</Text> 
          is an e-commerce prototyping API
        </Heading>
        <Text
          maxW={500} 
        >
          Create a store, add some products and fetch the data with Mallspawn API.
        </Text>
      </VStack>
      
      <Box
          as={motion.div}
          animate={{ x: [150, 0, 10], opacity: [0, 1]}}
          transition={{ "ease": "easeIn"}}
          drag='x'
          dragConstraints={{ left: -100, right: 100 }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          // not work: transition={{ transition: "0.5", ease: "linear" }>
          >
        <Image
            objectFit="contain"
            maxW="200"
            src='/images/hero.svg'
            alt='Dan Abramov'
          />
    
      </Box>
   </HStack>
  
  </ChakraProvider>)
}
