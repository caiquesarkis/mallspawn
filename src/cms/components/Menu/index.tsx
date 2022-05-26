import { Box, HStack, Text, List, ListIcon, ListItem, VStack, Button, Icon, Heading } from "@chakra-ui/react";
import { FiArchive, FiBox, FiHome, FiSettings } from "react-icons/fi";
import { IconType } from "react-icons/lib";
import { Link } from "react-router-dom";
import { Avatar } from '@chakra-ui/react'
interface menuLink{
    route: string,
    text: string,
    icon?: IconType
}

const MenuLink = (props: menuLink) =>{
    const {route, text, icon} = props;
    return(
        <ListItem
            display='flex'
            alignItems='center'
            justifyContent='flex-start'
        >
            <Button  border='2px' borderColor='gray.300'>
                <Link to={route}>
                    <ListIcon as={icon} fontSize="xl" color='gray.300'/>
                    <Text 
                        as="span" 
                        fontSize="xl" 
                        fontWeight='600' 
                        color='gray.300'>
                        {text}
                    </Text>
                </Link>
            </Button>
           
        </ListItem>
    )
}

const ConfigButton = (props: menuLink) =>{
    const {route, text, icon} = props;
    return(
        <Box
            justifySelf="flex-end"
        >
            <Link to={route}>
                <Icon as={icon} fontSize="3xl" color='gray.300'/>
            </Link>
        </Box>
    )
}

const CostumerAvatar = (props: {route: string, costumerName:string,  src: string}) =>{
    const {route, costumerName, src} = props;
    return(
        <Box
            justifySelf="flex-end"
        >
            <Link to={route}>
                <Avatar border='2px' borderColor='gray.300' size='md' name={costumerName} src={src} />
            </Link>
        </Box>
    )
}

export function Menu(){
    return(
        <HStack 
        >            
           <VStack bg='gray.900' minW='250px' p={4} minH="100vh" color='black' display='flex' justifyContent='space-between'>
                <Link 
                    to="/"
                    rel="noopener noreferrer"
                    style={{"textDecoration": "none"}}
                >
                    <Button
                        color="blue.50"
                        colorScheme='blue'
                        mt={8}
                        variant='ghost'
                        fontSize="1.5rem"
                        letterSpacing={6}
                        textAlign='center'
                    >
                        Mallspawn
                    </Button>
                </Link>
                <List spacing={6}>
                    <MenuLink icon={FiHome} route="/store" text="Home"/> 
                    <MenuLink icon={FiArchive} route="/store" text="Products"/> 
                    <MenuLink icon={FiBox} route="/store" text="Collections"/> 
                </List>
                <HStack
                    justifyContent='center' 
                    gap={12}
                >
                    <ConfigButton icon={FiSettings} route="settings" text="Configuration"/> 
                    <CostumerAvatar route="account" costumerName="Caique Sarkis" src="https://pbs.twimg.com/profile_images/1420483313849016321/fJ856PK9_400x400.jpg"/> 
                </HStack>
           </VStack>
        </HStack>
        
    )
}