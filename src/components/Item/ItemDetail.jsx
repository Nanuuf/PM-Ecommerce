import React from 'react';
import { useParams } from 'react-router-dom';
import { Card, CardBody, Stack, Text, Heading, Divider, CardFooter, ButtonGroup, Button, Image } from '@chakra-ui/react';
import { useState, useContext, useEffect } from "react"
import ItemCount from '../ItemCount.jsx/ItemCount';
import Item from '../Item';
import { useCart } from '../CartContext/CartContext';


const ItemDetail = ( { producto   } ) => {
    const { addToCart } = useCart();

    

    return (
        <>
            {producto && ( 
                <Card maxW='sm' >
                    <CardBody>
                        <Image 
                            boxSize='150px'
                            src= {producto.imagen} borderRadius='lg'
                        />
                        <Stack mt='6' spacing='3'>
                            <Heading size='md'>{producto.prodNombre}</Heading>
                            
                            <Text color='blue.600' fontSize='2xl'>
                                ${producto.precio}
                            </Text>
                            
                        </Stack>
                    </CardBody>
                    <Divider />
                    <CardFooter>
                    <ButtonGroup spacing='2'>
                        <ItemCount product={producto}  />
                        
                    </ButtonGroup>
                    </CardFooter>
                </Card>
            )}
        </>
    );
};

export default ItemDetail;
