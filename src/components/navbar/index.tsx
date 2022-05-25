import {
  Box,
  Text,
  Link,
  VStack,
  Code,
  Grid,
  theme,
  HStack,
  Button,
  Flex,
  Heading,
} from "@chakra-ui/react"
import { ColorModeSwitcher } from "../../ColorModeSwitcher"


interface NavbarLink {
    Route: string,
    Text: string
}

const NavbarLinks = (props: NavbarLink) => {
    const {Route, Text} = props;
    return(
        <Link 
            href={Route}
            target="_blank"
            rel="noopener noreferrer"
            style={{"textDecoration": "none"}}
            >
            <Button
                px={8}
                py={4}
                size="4xl"
                colorScheme='teal' 
                variant='ghost'
                color="teal.500"
            >
                {Text}
            </Button>
        </Link>
    )
}

const NavbarCTA = (props: NavbarLink) => {
    const {Route, Text} = props;
    return(
        <Link 
            href={Route}
            target="_blank"
            rel="noopener noreferrer"
            style={{"textDecoration": "none"}}
            >
            <Button
                px={8}
                py={4}
                size="4xl"
                colorScheme='teal' 
                variant='outline'
                color="teal.500"
                ml={12}
                border="2px"
            >
                {Text}
            </Button>
        </Link>
    )
}

export const Navbar = () => {
    return(
        <Flex
            align="center"
            justify="space-between" 
            py={4}   
            mx={16}
        >
            <Link 
                href="/"
                target="_blank"
                rel="noopener noreferrer"
                style={{"textDecoration": "none"}}
            >
                <Button
                    color="blue.50"
                    colorScheme='blue'
                    variant='ghost'
                    mr={12}
                    fontSize="1.5rem"
                    letterSpacing={6}
                >
                    Mallspawn
                </Button>
            </Link>
            
            <Flex 
                align="center" 
                justify="space-around"
                w='40%'
                gap={2}
            >
                <NavbarLinks Route="#" Text="Learn"/>
                <NavbarLinks Route="#" Text="Documentation"/>
                <NavbarLinks Route="#" Text="Examples"/>
                <NavbarCTA Route="#" Text="My Store"/>
            </Flex>
            <ColorModeSwitcher justifySelf="flex-end" />
        </Flex>
    )
}