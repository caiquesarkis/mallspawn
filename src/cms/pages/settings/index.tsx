import { Box, Heading, HStack, Text } from "@chakra-ui/react";
import PageHeader from "../../components/PageHeader";
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
            <PageHeader/>
            </Box>
        </HStack>
    )
}