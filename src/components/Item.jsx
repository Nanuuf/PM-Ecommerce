import React from 'react'
import {Card, CardBody, Stack, Heading, Divider, CardFooter, ButtonGroup, Button, Text, Image } from '@chakra-ui/react'
import { Link } from 'react-router-dom'

const Item = ({ id, prodNombre, precio, imagen, detalle  }) => {
    

    return (
        
        

        <Card maxW='sm' >
            <CardBody>
                <Image 
                    boxSize='150px'
                    src= {imagen} borderRadius='lg'
                />
                <Stack mt='6' spacing='3'>
                    <Heading size='md'>{prodNombre}</Heading>
                    <Text>
                        {detalle}
                    </Text>
                    <Text color='blue.600' fontSize='2xl'>
                    ${precio}
                    </Text>
                </Stack>
            </CardBody>
            <Divider />
            <CardFooter>
            <ButtonGroup spacing='2'>
                <Button variant='ghost' colorScheme='blue'>
                    <Link to={`/product/${id}`} >
                        Ver detalle
                    </Link>
                </Button>
                <Button variant='solid' colorScheme='blue'>
                Agregar al carrito
                </Button>
            </ButtonGroup>
            </CardFooter>
        </Card>

            
    )
}

export default Item