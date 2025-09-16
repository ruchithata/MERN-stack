import { Button, Container, Flex, HStack, Text } from '@chakra-ui/react'
import { Link } from 'react-router-dom'
import { FaRegMoon, FaRegPlusSquare, FaSun } from "react-icons/fa";
import { useColorMode } from '@/components/ui/color-mode';


const Navbar = () => {
    const {colorMode, toggleColorMode} = useColorMode();
  return (
    <Container maxW={"1140px"} px={4}>
        <Flex
            h={16}
            alignItems={"center"}
            justifyContent={"space-between"}
            flexDir={{
                base:"column",
                sm:"row"
            }}
        >
            <Link to={"/"}>
                <Text
                    as="h1"
                    fontSize={{base:"22",sm:"28"}}
                    fontWeight="bold"
                    textTransform="uppercase"
                    textAlign="center"
                    backgroundImage="linear-gradient(to right, #22d3ee, #3b82f6)"
                    backgroundClip="text"
                    color="transparent"
                >
                    Product Store
                </Text>
            </Link>
            <HStack spacing={2} alignItems={"center"}>
                <Link to={"/create"}>
                <Button>
                    <FaRegPlusSquare fontSize={20}/>
                </Button>
                </Link>
                <Button onClick={toggleColorMode}>
                    {colorMode === "light" ? <FaRegMoon/> : <FaSun/>}
                </Button>
            </HStack>
        </Flex>
    </Container>
  )
}

export default Navbar