import { Box, HStack, Text, List, ListIcon, ListItem, VStack, Button } from "@chakra-ui/react";
import { FiArchive, FiBox, FiHome } from "react-icons/fi";
import { IconType } from "react-icons/lib";
import { Link } from "react-router-dom";

interface menuLink{
    route: string,
    text: string,
    icon: IconType
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

export function Menu(){
    return(
        <HStack>
           <VStack bg='gray.900' minW='250px' p={4} h="100vh" color='black' display='flex' justifyContent='center'>
                <List spacing={4}>
                    <MenuLink icon={FiHome} route="/" text="Home"/> 
                    <MenuLink icon={FiArchive} route="/" text="Products"/> 
                    <MenuLink icon={FiBox} route="/" text="Collections"/> 
                </List>
            </VStack> 
        </HStack>
        
    )
}