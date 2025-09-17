import { useColorModeValue } from '@/components/ui/color-mode';
import { toaster } from '@/components/ui/toaster';
import { useProductStore } from '@/store/product';
import { Box, Button, Container, Heading, Input, VStack } from '@chakra-ui/react';
import React, { useState } from 'react'

const CreatePage = () => {
    const [newProduct, setNewProduct] = useState({
        name: "",
        price: "",
        image: "",
    });

    const {createProduct} = useProductStore();

    const handleAddProduct = async()=>{
        const {success, message} = await createProduct(newProduct);
        if(!success){
            toaster.create({
                title: "Error",
                description: message,
                type: "error",
                closable: true
            });
        } else{
            toaster.create({
                title: "Success",
                description: message,
                type: "success",
                closable: true
            });
        }
        console.log("Success", success);
        console.log("Message", message);
        setNewProduct({name: "", price: "", image: ""});
    };

  return (
    <Container maxW={"container.sm"}>
        <VStack gap={8}>
            <Heading fontSize={"4xl"} size="2xl" textAlign="center" mb={8} fontWeight={"bold"}>
                Create New Product
            </Heading>
            <Box
                w={"vh"} bg={useColorModeValue("white", "gray.800")}
                p={6} rounded={'lg'} shadow={"md"}
            >
                    <VStack gap={4}>
                        <Input
                            borderColor={"gray"}
                            placeholder='Product Name'
                            name='name'
                            value={newProduct.name}
                            onChange={(e) => setNewProduct({...newProduct, name: e.target.value})}
                        />
                        <Input
                            borderColor={"gray"}
                            placeholder='Price'
                            name='price'
                            type='number'
                            value={newProduct.price}
                            onChange={(e) => setNewProduct({...newProduct, price: e.target.value})}
                        />
                        <Input
                            borderColor={"gray"}
                            placeholder='Image URL'
                            name='image'
                            value={newProduct.image}
                            onChange={(e) => setNewProduct({...newProduct, image: e.target.value})}
                        />
                        <Button colorScheme='blue' onClick={handleAddProduct} w='full'>
                            Add Product
                        </Button>
                    </VStack>
            </Box>
        </VStack>
    </Container>
  )
}

export default CreatePage