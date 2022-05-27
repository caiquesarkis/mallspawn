import { Box, HStack, Text, List, ListIcon, ListItem, VStack, Button, Icon, Heading, Divider, Select } from "@chakra-ui/react";
import { FiArchive, FiBox, FiHome, FiSettings } from "react-icons/fi";
import { IconType } from "react-icons/lib";
import { Link } from "react-router-dom";
import { Avatar } from '@chakra-ui/react'
import './index.css'

export function SideBar(){
    return(
        <HStack 
        >            
           <VStack bg='gray.900' minW='250px' p={8} minH="100vh" color='black' display='flex' justifyContent='space-between'>
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
                        fontSize="xl"
                        letterSpacing={6}
                        textAlign='center'
                    >
                        Mallspawn
                    </Button>
                </Link>
                
                <List minW='100%' spacing={4}>
                    <MenuLink icon={FiHome} route="/store" text="Home"/> 
                    <MenuLink icon={FiArchive} route="/store/products" text="Products"/> 
                    <MenuLink icon={FiBox} route="/store/collections" text="Collections"/> 
                    <Divider borderColor='gray.500'/>
                    <ConfigButton icon={FiSettings} route="/store/settings" text="Configuration"/> 
                </List>
                <StoreSwitcher/> 
                <CostumerAvatar route="/store/account" costumerName="Caique Sarkis" src="https://pbs.twimg.com/profile_images/1420483313849016321/fJ856PK9_400x400.jpg"/> 
           </VStack>
        </HStack>
        
    )
}

const StoreSwitcher = () =>{
    return(
        <Select maxW="80%" bg="transparent" color="gray.400" variant="filled" placeholder='Mechdevil'>
            <option value='option1'>Option 1</option>
            <option value='option2'>Option 2</option>
            <option value='option3'>Option 3</option>
        </Select>
    )
}

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
            <Link style={{"display":"flex", "alignItems": "center"}} to={route}>
                <Button variant="outline" justifyContent='flex-start'  border='2px' borderColor='gray.300'>
                    <ListIcon as={icon} fontSize="xl" color='gray.300'/>
                    <Text 
                        as="span" 
                        fontSize="md" 
                        fontWeight='600' 
                        color='gray.300'>
                        {text}
                    </Text>
                </Button>
            </Link>
           
        </ListItem>
    )
}

const ConfigButton = (props: menuLink) =>{
    const {route, text, icon} = props;
    return(
        <Link style={{"display":"flex", "alignItems": "center"}} to={route}>
            <Button variant="outline" justifyContent='flex-start'  border='2px' borderColor='gray.300'>
                <Icon as={icon} fontSize="xl" mr="8px" color='gray.300'/>
                <Text 
                    as="span" 
                    fontSize="md" 
                    fontWeight='600' 
                    color='gray.300'>
                    {text}
                </Text>
            </Button>
        </Link>
    )
}

const CostumerAvatar = (props: {route: string, costumerName:string,  src: string}) =>{
    const {route, costumerName, src} = props;
    return(
        <Box
            justifySelf="flex-end"
        >
            <Link  to={route}>
                <Avatar size='md' bg='transparent'  name={costumerName} src={src} />
            </Link>
        </Box>
    )
}