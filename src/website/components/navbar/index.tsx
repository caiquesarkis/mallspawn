import { ArrowForwardIcon } from "@chakra-ui/icons";
import {
  Button,
  Flex,
} from "@chakra-ui/react"
import { ColorModeSwitcher } from "../../../ColorModeSwitcher";
import { Link } from "react-router-dom";

interface NavbarLink {
    Route: string,
    Text: string
}

const NavbarLinks = (props: NavbarLink) => {
    const {Route, Text} = props;
    return(
        <Link 
            to={Route}
            rel="noopener noreferrer"
            style={{"textDecoration": "none"}}
            >
            <Button
                px={8}
                py={4}
                size="4xl"
                colorScheme='gray' 
                variant='ghost'
                color="gray.300"
                fontWeight={400}
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
            to={Route}
            rel="noopener noreferrer"
            style={{"textDecoration": "none"}}
            >
            <Button
                px={8}
                py={4}
                ml={12}
                size="4xl"
                fontSize="xm"
                colorScheme='purple' 
                variant='outline'
                color="purple.200"
                border="2px"
            >
                {Text}
                <ArrowForwardIcon ml={2}/>
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
                to="/"
                rel="noopener noreferrer"
                style={{"textDecoration": "none"}}
            >
                <Button
                    color="blue.50"
                    colorScheme='blue'
                    variant='ghost'
                    mr={12}
                    fontSize="xl"
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
                <NavbarLinks Route="/learn" Text="Learn"/>
                <NavbarLinks Route="/documentation" Text="Documentation"/>
                <NavbarLinks Route="/examples" Text="Examples"/>
                <NavbarCTA Route="/store" Text="My Store"/>
            </Flex>
            <ColorModeSwitcher justifySelf="flex-end" />
        </Flex>
    )
}