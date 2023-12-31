import React from 'react';
import { Box, Text } from '@chakra-ui/react';

const ItemCard = (props) => {
  return (
    <Box
      borderWidth="1px"
      borderRadius="lg"
      overflow="hidden"
      boxShadow="md"
      maxW="sm"
      mb={4}
      position="relative"
      _hover={{
        transform: 'scale(1.03)',
        transition: 'transform 0.3s',
      }}
    >
      <Box
        width="100%"
        paddingTop="56.25%" // 16:9 aspect ratio (9 / 16 * 100)
        position="relative"
      >
        <img
          src={props.img}
          alt={props.name}
          style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}
        />
      </Box>
      <Box p={4}>
        <Text fontWeight="bold" fontSize="lg">
          {props.title}
        </Text>
        <Text color="gray.500">{props.description}</Text>
      </Box>
    </Box>
  );
};

export default ItemCard;
