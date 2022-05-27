import { Menu, Badge, Box, Button, Divider, Heading, HStack, Icon, Image, Input, Table, Tbody, Td, Text, Tfoot, Th, Thead, Tr, VStack, MenuButton, MenuList, MenuItem } from "@chakra-ui/react";
import { useState } from "react";
import { FiSettings } from "react-icons/fi";
import { ChevronDownIcon } from "@chakra-ui/icons";
import { SideBar } from "../../components/sidebar";

export default function Products(){
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
            status: false,
            collection: "all"
        }
    ]);
    return(
        <VStack w="80%" minH="100%" flexDirection="column" justifyContent="space-around" alignItems="center">
            <Heading  size="2xl" color="gray.400" fontWeight={400}>
                    Products
            </Heading>
            <Divider/>
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
    <HStack w="100%" minH="50px">
      <Input
        colorScheme="gray" 
        h="100%"
        bg="gray.900"
        value={value}
        variant="outline"
        border="2px"
        onChange={handleChange}
        placeholder='Here is a sample placeholder'
      />
      <Button
        colorScheme="gray" 
        h="100%"
        bg="transparent"
        value={value}
        border="2px"
        variant="outline"
        >
          Search
      </Button>
        <Button
            colorScheme="green" 
            h="100%"
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

    const TableHeader = (props: {data:any}) =>{
        const {data} = props
        return(
            <Th py={6} border="none" maxW={100} minW={100} px={0}>
                <Text textAlign="left">
                    {data}
                </Text>
            </Th>
        )
    }

    return(
        <Table minW="100%" h="50%">
            <Tbody
                justifyContent="space-around"
            >
        {
            Products.map((product:Product)=>{
                const {name, status, collection} = product
                return(
                    <Tr as={HStack} justifyContent="space-between">
                        <Button p={0}  w={50} h={50}>
                            <Image src='https://cdn.shopify.com/s/files/1/0551/9563/1814/products/havit-kb487l-tkl-mechanical-keyboard.jpg?v=1618240421' borderRadius={4} alt='Dan Abramov' />
                        </Button>
                        <TableHeader data={name}/>
                        <TableHeader data={status?
                               <Badge variant='solid' px={2} py={1} colorScheme='green'> Active </Badge>
                               : 
                               <Badge variant='solid' px={2} py={1} colorScheme='blue'> Draft </Badge>
                               }/>
                        <TableHeader data={collection}/>
                        <Menu>
                            <MenuButton as={Button} justifyContent="center" alignItems="center">
                                <Icon as={FiSettings}/>
                            </MenuButton>
                            <MenuList>
                                <MenuItem>Edit</MenuItem>
                                <MenuItem>Mark as Draft</MenuItem>
                                <MenuItem>Delete</MenuItem>
                            </MenuList>
                        </Menu>
                    </Tr>       
                )
            })
        }
            </Tbody>
        </Table>
    )
}