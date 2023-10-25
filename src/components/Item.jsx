import React from 'react'
import {Card, CardBody, Stack, Heading, Divider, CardFooter, ButtonGroup, Button } from '@chakra-ui/react'
import { Link } from 'react-router-dom'

const Item = ({id, prodNombre}) => {

    
    return (
        <div>
            <Card maxW='sm'>
                <CardBody>
                    
                    <Stack mt='6' spacing='3'>
                        <p>Imagen</p>
                        <Heading size='md'> {prodNombre} </Heading>
                        
                        
                    </Stack>
                </CardBody>
                <Divider />
                <CardFooter>
                    <ButtonGroup spacing='2'>
                        <Button variant='solid' colorScheme='blue'>
                            <Link to={`/product/${id}`} >
                                Ver detalle
                            </Link>
                        </Button>
                    </ButtonGroup>
                </CardFooter>
            </Card>
        </div>
    )
}

export default Item