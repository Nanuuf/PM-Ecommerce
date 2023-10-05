import React from 'react'
import CartWidget from './CartWidget'
import { Menu, MenuButton, MenuList, MenuItem, Flex, Box, Spacer } from '@chakra-ui/react'

const Navbar = () => {
    return (
        <div className='estiloNav'>
            <Flex>
                <Box >
                    <h1>PM</h1>
                </Box>
                <Spacer />
                <Box>
                    <Menu>
                        <MenuButton >
                            Productos
                        </MenuButton>
                        <MenuList bg="purple.500">
                            <MenuItem bg="purple.500">Spray hauricos</MenuItem>
                            <MenuItem bg="purple.500">Sahumos</MenuItem>
                            <MenuItem bg="purple.500">Sahumerios</MenuItem>
                        </MenuList>
                    </Menu>
                </Box>
                <Spacer />
                <Box >
                    {/* carrito */}
                    <CartWidget/>
                </Box>
            </Flex>




            
            
            

        </div>
    )
}

export default Navbar