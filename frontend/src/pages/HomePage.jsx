import ProductCard from '@/Component/ProductCard'
import { useProductStore } from '@/store/product'
import { Container, SimpleGrid, Text, VStack } from '@chakra-ui/react'
import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'

const HomePage = () => {
  const {fetchProducts, products} = useProductStore();
  
  useEffect(() => {
    fetchProducts();
  }, [fetchProducts]);
  console.log("products", products)

  return (
    <Container maxW='container.xl' py={12}>
      <VStack gap={8}>
        <Text
            fontSize={"3xl"}
            fontWeight="bold"
            textTransform="uppercase"
            textAlign="center"
            backgroundImage="linear-gradient(to right, #22d3ee, #3b82f6)"
            backgroundClip="text"
            color="transparent"
        >
            Current Products
        </Text>
        <SimpleGrid 
          columns={{
            base: 1,
            md: 2,
            lg: 3
          }}
          gap={10}
          w={'fit'}
        >
          {products.map((product) => (
            <ProductCard key={product._id} product={product} />
          ))}
        </SimpleGrid>
        {products.length === 0 && (
          <Text fontSize={'xl'} textAlign={"center"} fontWeight={"bold"} color={"gray.500"}>
            No products found 🤧{" "}
            <Link to={"/create"}>
              <Text display={'inline'} color={'blue.500'} _hover={{textDecoration: "underline"}}>
                Create a Product
              </Text>
            </Link>
          </Text>
        )}
      </VStack>
    </Container>
  )
}

export default HomePage