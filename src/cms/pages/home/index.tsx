import { Box, Heading, HStack, Stat, StatGroup, StatLabel, StatNumber, Text } from "@chakra-ui/react";
import { Menu } from "../../components/Menu";


export default function Store(){
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
                Wellcome back <Text color="gray.200" as='span'>{"Caique Sarkis"}</Text>
            </Heading>
            <Statistics/>
            </Box>
        </HStack>
    )
}



let Statistics = () =>{
    return(
        <StatGroup  gap={36}>
        <Stat >
            <StatLabel>Products</StatLabel>
            <StatNumber>42</StatNumber>
        </Stat>
        <Stat>
            <StatLabel>Collections</StatLabel>
            <StatNumber>5</StatNumber>
        </Stat>
        </StatGroup>
    )
}
