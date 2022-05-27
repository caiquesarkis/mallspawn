import { Box, Heading, HStack, Text } from "@chakra-ui/react";
import { Menu } from "../../components/Menu";


export default function Account(){
    return(
        <HStack >
            <Menu/>
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
                Account
            </Heading>
            </Box>
        </HStack>
    )
}