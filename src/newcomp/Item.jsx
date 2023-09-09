import React from 'react';
import { SimpleGrid, Heading, Box, HStack } from '@chakra-ui/react';
import ItemCard from './ItemCard';

const coins = [
  {
    id: 1,
    title: 'Video 1',
    description: 'Description for Video 1',
    thumbnailUrl: 'https://via.placeholder.com/150',
  },
  {
    id: 2,
    title: 'Video 2',
    description: 'Description for Video 2',
    thumbnailUrl: 'https://via.placeholder.com/150',
  },
  {
    id: 3,
    title: 'Video 3',
    description: 'Description for Video 3',
    thumbnailUrl: 'https://via.placeholder.com/150',
  },
  {
    id: 4,
    title: 'Video 4',
    description: 'Description for Video 4',
    thumbnailUrl: 'https://via.placeholder.com/150',
  },

];

const ItemList = () => {

  return (
 
        <>
          <HStack wrap={"wrap"} justifyContent={"space-evenly"}>
            
            {coins.map((i) => (
              <Box
              height={200}
              width={300}
              >
              <ItemCard
                id={i.id}
                key={i.id}
                name={i.title}
                description={i.description}
                img={i.thumbnailUrl}
              />
            </Box>
            ))}
          </HStack>
        </>
     
  );
};

export default ItemList;
