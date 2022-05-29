import { Box, Heading } from "@chakra-ui/layout";

export default function PageHeader(){
    let PageUrl = window.location.href;
    let PageHeaderContent = PageUrl.split("/").pop();
    return(
        <Box
            mt={20}
            mb={8} 
            w="100%" 
            py={1} 
            borderBottom="2px" 
            borderColor="gray.700"
        >
            <Heading 
                size="xl" 
                textAlign="left" 
                color="gray.400" 
                fontWeight={400}
                textTransform="capitalize"
                >
                    {PageHeaderContent}
            </Heading>
        </Box>
   )
}