import { Avatar, Box, Button, Heading, HStack, Input, List, ListItem, Table, TableCaption, TableContainer, Tbody, Td, Text, Tfoot, Th, Thead, Tr, VStack } from "@chakra-ui/react";
import { Menu } from "../../components/Menu";
import { useState } from "react";
import { stat } from "fs";

export default function Products(){
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
            <ProductPage/>
            </Box>
        </HStack>
    )
}



const ProductPage = () =>{
    const [products, setProducts] = useState([
        {
            name: "Socks",
            status: true,
            collection: "all"
        },
        {
            name: "Keyboard",
            status: true,
            collection: "all"
        },
        {
            name: "Cable",
            status: true,
            collection: "all"
        }
    ]);
    return(
        <VStack w="80%" minH="100%" flexDirection="column" justifyContent="space-around" alignItems="center">
            <Heading  size="2xl" color="gray.400" fontWeight={400}>
                    Products
            </Heading>
            <ProductSearchInput/>
            <ProductTable Products={products} />
        </VStack>
       
    )
}


interface Product{
    name: string,
    status: boolean,
    collection: string
}







function ProductSearchInput() {
  const [value, setValue] = useState('')
  const handleChange = (e: any) => setValue(e.target.value)

  return (
    <HStack w="100%">
      <Input
        colorScheme="gray" 
        bg="gray.900"
        value={value}
        variant="outline"
        border="2px"
        onChange={handleChange}
        placeholder='Here is a sample placeholder'
      />
      <Button
        colorScheme="gray" 
        bg="transparent"
        value={value}
        border="2px"
        variant="outline"
        >
          Search
      </Button>
        <Button
            colorScheme="green" 
            value={value}
            textColor="green.200"
            border="2px"
            variant="ghost"
            px="24px"
        >
          New Product
        </Button>
    </HStack>
  )
}




const ProductTable = (props: {Products:Product[]}) =>{
    const {Products} = props
    return(
        <List>
        {
            Products.map((product:Product)=>{
                const {name, status, collection} = product
                return(
                    <ListItem>
                        {name}
                        {status? "Active": "Draft"}
                        {collection}
                    </ListItem>       
                )
            })
        }
        </List>
    )
}