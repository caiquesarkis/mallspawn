import { Box, Heading, HStack, Text } from "@chakra-ui/react";
import { SideBar } from "../../components/sidebar";


export default function Settings(){
    return(
        <HStack >
            <SideBar/>
            <Box
                style={{"marginLeft": "0px"}}
                bg='gray.800'
                w='100%'
                h='100vh'
                display='flex'
                flexDirection='column'
                justifyContent='center'
                alignItems='center'
                gap={24}
            >
            <Heading size="2xl" color="gray.400" fontWeight={400}>
                Settings 
            </Heading>
            </Box>
        </HStack>
    )
}