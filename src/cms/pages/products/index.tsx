import { Avatar, Box, Heading, HStack, Table, TableCaption, TableContainer, Tbody, Td, Text, Tfoot, Th, Thead, Tr } from "@chakra-ui/react";
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

interface Product{
    name: string,
    status: boolean,
    collection: string
}

const TableRow = (props: Product ) =>{
    const {name, status, collection} = props;
    return(
        <Tr>
            <Td>{name}</Td>
            <Td>{status? "Active": "Draft"}</Td>
            <Td>{collection}</Td>
        </Tr>
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
        <>
            <Heading size="2xl" color="gray.400" fontWeight={400}>
                    Products
            </Heading>
            <TableContainer>
                <Table variant='striped' colorScheme='teal'>
                    <Thead>
                    <Tr>
                        <Th>Product</Th>
                        <Th>Status</Th>
                        <Th>Collection</Th>
                    </Tr>
                    </Thead>
                    <Tbody>
                    {products.map((product: Product)=>{
                        const {name, status, collection} = product;
                        return(
                            <TableRow name={name} status={status} collection={collection}/>
                        )
                    })}
                    </Tbody>
                </Table>
            </TableContainer> 
        </>
       
    )
}