import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { Card, CardBody, Stack, Text, Heading, Divider, CardFooter, ButtonGroup, Button } from '@chakra-ui/react';
import productos from '../Dataproductos'

const ItemDetail = () => {
    const { id } = useParams();
    const [contador, setContador] = useState(0);

    const filteredProduct= productos.find((producto) => producto.id === parseInt(id));

    const handleIncrement = () => {
        if (contador < 10) {
        setContador(contador + 1);
        } else {
        alert('La cantidad máxima es 10. No puedes agregar más.');
        }
    };

    const handleDecrement = () => {
        if (contador > 1) {
        setContador(contador - 1);
        } else {
        alert('La cantidad mínima es 1.');
        }
    };

    return (
        <>
        {filteredProduct && (
            <Card maxW='sm'>
                <CardBody>
                <Stack mt='6' spacing='3'>
                    <p>Imagen</p>
                    <Heading size='md'>{filteredProduct.prodNombre}</Heading>
                </Stack>
                </CardBody>
                <Text>{filteredProduct.detalle}</Text>
                <Text>${filteredProduct.precio}</Text>
                <Divider />
                <CardFooter>
                <ButtonGroup spacing='2'>
                    <Button variant='solid' colorScheme='blue' onClick={handleDecrement}>
                    Menos
                    </Button>
                    <Text>{contador}</Text>
                    <Button variant='solid' colorScheme='blue' onClick={handleIncrement}>
                    Más
                    </Button>
                </ButtonGroup>
                </CardFooter>
            </Card>
        )}
        </>
    );
};

export default ItemDetail;
