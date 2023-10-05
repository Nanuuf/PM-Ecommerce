import React from 'react'
import CartWidget from './CartWidget'
import { Menu, MenuButton, MenuList, MenuItem, Flex, Box, Spacer } from '@chakra-ui/react'

const Navbar = () => {
    return (
        <div>
            <Flex>
                <Box >
                    <h1>PM</h1>
                </Box>
                <Spacer />
                <Box>
                    <Menu>
                        <MenuButton>
                            Productos
                        </MenuButton>
                        <MenuList>
                            <MenuItem>Spray hauricos</MenuItem>
                            <MenuItem>Sahumos</MenuItem>
                            <MenuItem>Sahumerios</MenuItem>
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