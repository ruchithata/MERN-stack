import { useColorModeValue } from '@/components/ui/color-mode';
import { toaster } from '@/components/ui/toaster';
import { useProductStore } from '@/store/product';
import { Dialog, Portal } from '@ark-ui/react';
import { Box, Heading, HStack, IconButton, Image, Text, VStack, Input, Button } from '@chakra-ui/react'
import React, { useState } from 'react'
import { FaEdit } from "react-icons/fa";
import { MdDeleteForever } from "react-icons/md";

const ProductCard = ({product}) => {
    const textColor = useColorModeValue('gray.600', 'gray.200');
    const bg = useColorModeValue('white', 'gray.800');
    const {deleteProduct, updateProduct} = useProductStore();
    const [updatedProduct, setUpdatedProduct] = useState(product);
    const [open, setOpen] = useState(false);

    const handleUpdateProduct = async(pid, updatedProduct) => {
        const {success, message} = await updateProduct(pid, updatedProduct);
        setOpen();
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
                description: "Product updated successfully",
                type: "success",
                closable: true,
                duration: 3000,
            });
        }
    }

    const handleDeleteProduct = async(pid) =>{
        const {success, message} = await deleteProduct(pid);
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
                description: "Product deleted successfully",
                type: "success",
                closable: true,
                duration: 3000,
            });
        }
    }

  return (
    <Box
        shadow={'lg'} 
        rounded={'lg'}
        overflow={'hidden'}
        transition='all 0.3s'
        _hover={{transform: "translateY(-5px)", shadow:"xl"}}
        bg={bg}
        gap={3}
    >
        <Image src={product.image} alt={product.name} h={48} w='full' objectFit='cover'/>
        <Box p={4}>
            <Heading fontSize={"4xl"} size="md" mb={2}>
                {product.name}
            </Heading>
            <Text fontWeight='bold' fontSize='xl' color={textColor} mb={4}>
                ${product.price}
            </Text>
            <HStack gap={2}>
                <Dialog.Root open={open} onOpenChange={(e)=>setOpen(e.open)}>
                    <Dialog.Trigger asChild>
                        <IconButton aria-label="Edit" variant={"outline"} background={'blue.500'}>
                            <FaEdit/>
                        </IconButton>
                    </Dialog.Trigger>
                    <Portal>
                        <Dialog.Backdrop asChild>
                            <Box
                                position="fixed"
                                inset="0"
                                bg="blackAlpha.600"
                            />
                        </Dialog.Backdrop>
                        <Dialog.Positioner asChild>
                            <Box
                                position="fixed"
                                inset="0"
                                display="flex"
                                alignItems="center"
                                justifyContent="center"
                            >
                                <Dialog.Content asChild>
                                    <Box bg={bg} rounded="lg" p={6} shadow="xl" w="full" maxW="md" position={"relative"}>
                                            <Dialog.Title asChild>
                                                <Heading fontSize="xl" mb={4}>
                                                    Update Product
                                                </Heading>
                                            </Dialog.Title>
                                            <Dialog.CloseTrigger asChild>
                                                <IconButton aria-label="Close" position="absolute" top={3} right={3} variant={"ghost"} size={"sm"}>X</IconButton>
                                            </Dialog.CloseTrigger>
                                            <VStack gap={4}mb={6}>
                                                <Input placeholder="Product Name" name="name" borderColor={"gray"} value={updatedProduct.name} onChange={(e)=>setUpdatedProduct({...updatedProduct, name:e.target.value})}/>
                                                <Input placeholder="Price" name="price" type="number" borderColor={"gray"} value={updatedProduct.price} onChange={(e)=>setUpdatedProduct({...updatedProduct, price: e.target.value})}/>
                                                <Input placeholder="Image URL" name="image" borderColor={"gray"} value={updatedProduct.image} onChange={(e)=>setUpdatedProduct({...updatedProduct, image: e.target.value})}/>
                                            </VStack>
                                            <HStack justify={'flex-end'} gap={3}>
                                                <Button background={'blue.500'} color={'white'} onClick={() => handleUpdateProduct(product._id, updatedProduct)}>
                                                    Update
                                                </Button>
                                                <Dialog.CloseTrigger asChild>
                                                    <Button variant={'outline'} background={'gray.800'} color={'white'}>
                                                        Cancel
                                                    </Button>
                                                </Dialog.CloseTrigger>
                                            </HStack>
                                        </Box>
                                </Dialog.Content>
                            </Box>
                        </Dialog.Positioner>
                    </Portal> 
                </Dialog.Root>

                <IconButton aria-label='Delete'variant={"outline"} onClick={() => handleDeleteProduct(product._id)} background={'red.500'}>
                    <MdDeleteForever />
                </IconButton>
            </HStack>
        </Box>
    </Box>
  )
}

export default ProductCard