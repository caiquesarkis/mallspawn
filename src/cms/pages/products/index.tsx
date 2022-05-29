import { Menu, Badge, Box, Button, Divider, Heading, HStack, Icon, Image, Input, Table, Tbody, Td, Text, Tfoot, Th, Thead, Tr, VStack, MenuButton, MenuList, MenuItem, DrawerOverlay, DrawerContent, Drawer, DrawerCloseButton, DrawerHeader, DrawerBody, FormControl, FormLabel, FormHelperText, Editable, EditablePreview, EditableTextarea, Textarea, Switch, RadioGroup, Radio } from "@chakra-ui/react";
import { useState } from "react";
import { FiSettings } from "react-icons/fi";
import { SideBar } from "../../components/sidebar";
import PageHeader from "../../components/PageHeader";
import { useDisclosure } from '@chakra-ui/react'

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
        <VStack w="80%" minH="100%" flexDirection="column" alignItems="center">
            <PageHeader/> 
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
  const { isOpen, onOpen, onClose } = useDisclosure()
  return (
      <>
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
            colorScheme="alphaBlack" 
            h="100%"
            value={value}
            textColor="green.100"
            border="2px"
            variant="solid"
            px="24px"
            onClick={onOpen}
        >
          New Product
        </Button>
    </HStack>
    <Drawer onClose={onClose} isOpen={isOpen} size="sm">
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>New Product</DrawerHeader>
          <DrawerBody>
            <FormControl>
                <Box mb={4}>
                    <FormLabel htmlFor='name'>Product Name*</FormLabel>
                    <Input id='name' type='text' placeholder="Keyboard X5l Bluetooth..."/>
                </Box>
                
                <Box mb={4}>
                    <FormLabel htmlFor='description'>Description*</FormLabel>
                    <Textarea id='description' placeholder='This product have such features...' />
                </Box>
                
                <Box mb={4}>
                    <FormLabel as='legend'>Status*</FormLabel>
                    <RadioGroup defaultValue='Draft'>
                        <HStack spacing='24px'>
                            <Radio value='Draft'>
                                <Badge variant='solid' px={2} py={1} colorScheme='blue'> Draft </Badge>
                            </Radio>
                            <Radio value='Active'>
                                <Badge variant='solid' px={2} py={1} colorScheme='green'> Active </Badge>
                            </Radio>
                        </HStack>
                    </RadioGroup>
                    <FormHelperText>Only Active products can be requested from <Text as="strong">Mallspawn Store-Front API</Text> </FormHelperText>
                </Box>
                <HStack mb={8}>
                   <Box>
                        <FormLabel htmlFor='price'>Price*</FormLabel>
                        <Input id='price' type="number" min="0.00" max="10000.00" step="0.01" placeholder="15.0"/>    
                    </Box> 
                    <Box>
                        <FormLabel htmlFor='compareAtPrice'>Compare At Price*</FormLabel>
                        <Input id='compareAtPrice' type="number" min="0.00" max="10000.00" step="0.01" placeholder="14.5"/>    
                    </Box>
                </HStack>

                <VStack>
                    <FormLabel htmlFor='price'>Images*</FormLabel>
                    <Button p={0} w={150} h={150}>
                        <Image src='https://cdn.shopify.com/s/files/1/0551/9563/1814/products/havit-kb487l-tkl-mechanical-keyboard.jpg?v=1618240421' borderRadius={4} alt='Dan Abramov' />
                    </Button> 
                    <Button p={0} w={50} h={50}>
                        <Image src='https://cdn.shopify.com/s/files/1/0551/9563/1814/products/havit-kb487l-tkl-mechanical-keyboard.jpg?v=1618240421' borderRadius={4} alt='Dan Abramov' />
                    </Button>
                </VStack>
            </FormControl>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  )
}


const ProductTable = (props: {Products:Product[]}) =>{
    const {Products} = props

    const TableItem = (props: {data:any}) =>{
        const {data} = props
        return(
            <Th py={6} border="none" maxW={100} minW={100} px={0}>
                <Text textAlign="left">
                    {data}
                </Text>
            </Th>
        )
    }

    const Headers = ["Product", "Name", "Status", "Collection", ""]

    return(
        <Table minW="100%">
            <Tbody
                justifyContent="space-around"
            >
        {
            Products.map((product:Product)=>{
                const {name, status, collection} = product
                return(
                    <Tr as={HStack} justifyContent="space-between">
                        <Button p={0} w={50} h={50}>
                            <Image src='https://cdn.shopify.com/s/files/1/0551/9563/1814/products/havit-kb487l-tkl-mechanical-keyboard.jpg?v=1618240421' borderRadius={4} alt='Dan Abramov' />
                        </Button>
                        <TableItem data={name}/>
                        <TableItem data={status?
                               <Badge variant='solid' px={2} py={1} colorScheme='green'> Active </Badge>
                               : 
                               <Badge variant='solid' px={2} py={1} colorScheme='blue'> Draft </Badge>
                               }/>
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
