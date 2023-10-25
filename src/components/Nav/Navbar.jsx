import React from 'react'
import CartWidget from './CartWidget'
import { Menu, MenuButton, MenuList, MenuItem, Flex, Box, Spacer,Text  } from '@chakra-ui/react'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <div className='estiloNav'>
            <Flex height={50} color='white' alignItems='center' Text fontSize={15}>
                <Box >
                    <Link to={"/"} >
                        <Text fontSize={20}>PM</Text>
                    </Link>
                </Box>
                <Spacer />
                <Box>
                    <Menu>
                        <MenuButton >
                            <Text fontSize={20}>Productos</Text>
                        </MenuButton>
                        <MenuList bg="purple.500">
                            <Link to="/Sprays">
                                <MenuItem bg="purple.500">Spray hauricos</MenuItem>
                            </Link>

                            <Link to="/Sahumos">
                                <MenuItem bg="purple.500">Sahumos</MenuItem>
                            </Link>
                        </MenuList>
                    </Menu>
                </Box>
                <Spacer />
                <Box >
                    {/* carrito */}
                    <Link to={"/Cart"} >
                        <CartWidget/>
                    </Link>
                </Box>
            </Flex>




            
            
            

        </div>
    )
}

export default Navbar