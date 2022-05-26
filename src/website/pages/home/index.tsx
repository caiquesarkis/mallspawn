import { ArrowForwardIcon } from "@chakra-ui/icons";
import { Box, Text, Button, Heading, HStack, Image, Link, VStack } from "@chakra-ui/react";
import { motion } from "framer-motion";

export default function Home(){
    interface heroCTA {
    Route: string,
    Text: string
}

    const HeroCTA = (props: heroCTA) => {
        const {Route, Text} = props;
        return(
            <Link
                href={Route}
                target="_blank"
                rel="noopener noreferrer"
                style={{"textDecoration": "none"}}
                alignSelf="flex-start"
                >
                <Button
                    as={motion.div}
                    animate={{ x: [150, 0, 10], opacity: [0, 1]}}
                    transition={{ "ease": "easeIn"}}
                    mt={4}
                    px={8}
                    py={4}
                    size="4xl"
                    colorScheme='whiteAlpha' 
                    variant='outlined'
                    color="whiteAlpha.900"
                    border="2px"
                >
                {Text}
                <ArrowForwardIcon ml={2}/>
                </Button>
            </Link>
    )
}
    return(
        <HStack
            justifyContent="space-between"
            mx={48}
            mt={24}
        >
      <VStack
        as={motion.div}
        animate={{ x: [150, 0, 10], opacity: [0, 1]}}
        transition={{ "ease": "easeIn"}}
        >
        <Heading
          maxW={500}
          size="3xl"
          textAlign="left"
          mb={4}
        >
          <Text colorScheme="blackAlpha" pr={4} bg="blackAlpha.400" as="span">Mallspaw</Text> 
          is an e-commerce prototyping API
        </Heading>
        <Text maxW={500}>
          Create a store, add some products and fetch the data with Mallspawn API.
        </Text>
        <HeroCTA 
          Route="#" 
          Text="Examples"
          />
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
    )
}